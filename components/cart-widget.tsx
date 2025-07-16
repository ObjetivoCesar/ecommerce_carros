"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/lib/cart-context"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface CartWidgetProps {
  isOpen: boolean
  onClose: () => void
}

export function CartWidget({ isOpen, onClose }: CartWidgetProps) {
  const { state, dispatch } = useCart()
  const { toast } = useToast()
  const [customerData, setCustomerData] = useState({
    nombre: "",
    whatsapp: "",
    mensaje: "",
  })

  const updateQuantity = (id: string, newQuantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, cantidad: newQuantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (state.items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega productos antes de enviar el pedido",
        variant: "destructive",
      })
      return
    }

    if (!customerData.nombre || !customerData.whatsapp) {
      toast({
        title: "Datos incompletos",
        description: "Por favor completa tu nombre y WhatsApp",
        variant: "destructive",
      })
      return
    }

    // Create the order message for chat
    const orderMessage = `🛒 *NUEVO PEDIDO*\n\n👤 *Cliente:* ${customerData.nombre}\n📱 *WhatsApp:* ${customerData.whatsapp}\n\n📦 *Productos:*\n${state.items.map((item) => `• ${item.nombre} - Cantidad: ${item.cantidad} - $${item.precio}`).join("\n")}\n\n💰 *Total:* $${state.total.toFixed(2)}\n\n📝 *Mensaje:* ${customerData.mensaje || "Sin mensaje adicional"}`

    console.log("Enviando evento con mensaje:", orderMessage) // DEBUG

    // Trigger chat widget to open with the message as user message
    const event = new CustomEvent("addToChat", {
      detail: {
        message: orderMessage,
        sender: "user", // EXPLÍCITAMENTE como usuario
      },
    })

    console.log("Evento creado:", event) // DEBUG
    window.dispatchEvent(event)

    // Show success message
    toast({
      title: "¡Pedido agregado al chat!",
      description: "Tu pedido ha sido agregado al chat. Envíalo para completar la solicitud.",
    })

    // Clear cart and form
    dispatch({ type: "CLEAR_CART" })
    setCustomerData({ nombre: "", whatsapp: "", mensaje: "" })
    onClose()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Carrito de Compras</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {state.items.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Tu carrito está vacío</p>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Image
                      src={item.imagen || "/placeholder.svg"}
                      alt={item.nombre}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.nombre}</h4>
                      <p className="text-marmolinas-blue font-semibold">${item.precio}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.cantidad}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6 text-red-500 hover:text-red-700"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Total and Form */}
          {state.items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-marmolinas-blue">${state.total.toFixed(2)}</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input
                    id="nombre"
                    value={customerData.nombre}
                    onChange={(e) => setCustomerData((prev) => ({ ...prev, nombre: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    value={customerData.whatsapp}
                    onChange={(e) => setCustomerData((prev) => ({ ...prev, whatsapp: e.target.value }))}
                    placeholder="593986223966"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje">Mensaje adicional</Label>
                  <Textarea
                    id="mensaje"
                    value={customerData.mensaje}
                    onChange={(e) => setCustomerData((prev) => ({ ...prev, mensaje: e.target.value }))}
                    placeholder="Información adicional sobre tu pedido..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-marmolinas-yellow text-marmolinas-blue hover:bg-marmolinas-yellow/90"
                >
                  Enviar Pedido
                </Button>
                <Button
                  type="button"
                  className="w-full mt-2 bg-marmolinas-blue text-white hover:bg-marmolinas-blue/90"
                  onClick={() => toast({
                    title: "Próximamente",
                    description: "La opción de pago con tarjeta estará disponible muy pronto.",
                  })}
                >
                  Pagar con tarjeta
                </Button>
              </form>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
