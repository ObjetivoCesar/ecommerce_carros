"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [textareaHeight, setTextareaHeight] = useState("auto")

  // Load data from localStorage on mount
  useEffect(() => {
    // LIMPIAR localStorage viejo para evitar conflictos
    const savedMessages = localStorage.getItem("marmolinas-chat-messages")

    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }))
        setMessages(parsedMessages)
      } catch (error) {
        console.error("Error parsing saved messages:", error)
        localStorage.removeItem("marmolinas-chat-messages")
      }
    }

    // Add welcome message if no messages exist
    if (!savedMessages || JSON.parse(savedMessages).length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Bienvenido a Marmolinas y Granillos, ¿en qué te puedo ayudar?",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [])

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("marmolinas-chat-messages", JSON.stringify(messages))
    }
  }, [messages])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Handle cart messages from other components
  useEffect(() => {
    const handleAddToChat = (event: CustomEvent) => {
      // The custom event's detail is expected to have a 'message' property of type string.
      const messageText = (event.detail as { message: string }).message
      if (typeof messageText === 'string') {
        setCurrentMessage(messageText)
        setIsOpen(true)
      } else {
        console.error("addToChat event received with invalid detail:", event.detail)
      }
    }

    window.addEventListener("addToChat", handleAddToChat as EventListener)
    return () => {
      window.removeEventListener("addToChat", handleAddToChat as EventListener)
    }
  }, [])

  const addMessage = (text: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const sendMessage = async () => {
    if (!currentMessage.trim()) return

    // Add user message
    addMessage(currentMessage, "user")
    const messageToSend = currentMessage
    setCurrentMessage("")
    setTextareaHeight("auto")
    setIsLoading(true)

    try {
      const chatData = {
        mensaje: messageToSend,
        conversacion: messages.map((msg) => ({
          texto: msg.text,
          remitente: msg.sender,
          timestamp: msg.timestamp.toISOString(),
        })),
        timestamp: new Date().toISOString(),
      }

      const response = await fetch("https://hook.us2.make.com/fq92tr3l4yw3ms1fdxwi8u67esbcodtn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chatData),
      })

      if (response.ok) {
        const result = await response.text()
        let botResponse = result
        try {
          const jsonResult = JSON.parse(result)
          botResponse = jsonResult.message || jsonResult.response || result
        } catch {
          // Use result as is if not JSON
        }

        if (botResponse && botResponse.trim()) {
          addMessage(botResponse, "bot")
        } else {
          addMessage("¡Mensaje recibido! Te contactaremos pronto por WhatsApp.", "bot")
        }
      } else {
        throw new Error("Error al enviar")
      }
    } catch (error) {
      addMessage(
        "Lo siento, hubo un error al enviar tu mensaje. Por favor intenta nuevamente o contáctanos directamente por WhatsApp.",
        "bot",
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    setMessages([])
    localStorage.removeItem("marmolinas-chat-messages")

    // Add welcome message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: "Bienvenido a Marmolinas y Granillos, ¿en qué te puedo ayudar?",
      sender: "bot",
      timestamp: new Date(),
    }
    setMessages([welcomeMessage])
  }

  const whatsappUrl = `https://wa.me/593986223966?text=${encodeURIComponent("Hola, me interesa conocer más sobre sus productos y servicios")}`

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentMessage(e.target.value)
    setTextareaHeight("auto")
    const scrollHeight = e.target.scrollHeight
    setTextareaHeight(`${scrollHeight}px`)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          {messages.length > 1 && (
            <span className="absolute -top-1 -left-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {messages.length - 1}
            </span>
          )}
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl border w-96 h-[750px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-marmolinas-blue text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">Chat Marmolinas</h3>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={clearChat}
                className="h-6 w-6 text-white hover:bg-white/20"
                title="Limpiar chat"
              >
                <span className="text-xs">🗑️</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-3">
            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      message.sender === "user" ? "bg-marmolinas-blue text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <div className="flex-1">
                        <p className="whitespace-pre-wrap">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-2 rounded-lg text-sm">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <span>Escribiendo...</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-3 border-t space-y-2">
            <div className="flex space-x-2">
              <Textarea
                ref={inputRef}
                placeholder="Escribe tu mensaje..."
                value={currentMessage}
                onChange={handleTextareaChange}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="text-sm resize-none"
                style={{ height: textareaHeight, overflow: "hidden" }}
                rows={1}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !currentMessage.trim()}
                size="icon"
                className="bg-marmolinas-blue hover:bg-marmolinas-blue/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <Button asChild variant="outline" className="w-full text-xs bg-transparent">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                💬 Chatear por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
