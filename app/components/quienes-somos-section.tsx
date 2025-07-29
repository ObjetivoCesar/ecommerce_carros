import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function QuienesSomosSection() {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-marmolinas-blue">Quiénes</span> Somos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                En <span className="text-marmolinas-yellow font-semibold">Racing Motos</span>, nos apasiona todo lo relacionado con el mundo de las dos ruedas. 
                Desde nuestros inicios, nos hemos dedicado a ofrecer productos y servicios de la más 
                alta calidad para los amantes de las motocicletas.
              </p>
              
              <p className="text-lg text-gray-300">
                Nuestro equipo está formado por expertos en el sector, comprometidos con brindar 
                asesoramiento personalizado y soluciones integrales para cada uno de nuestros clientes.
              </p>
              
              <div className="pt-4">
                <Button 
                  asChild 
                  className="bg-marmolinas-blue text-white hover:bg-marmolinas-blue/90 transition-colors"
                >
                  <a href="/contacto">Conoce más sobre nosotros</a>
                </Button>
              </div>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image 
                src="/images/motos_grupo1.jpg" 
                alt="Equipo de Racing Motos"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Misión",
                description: "Ofrecer productos y servicios de calidad que superen las expectativas de nuestros clientes, impulsando la pasión por las motocicletas.",
                icon: "🎯"
              },
              {
                title: "Visión",
                description: "Ser reconocidos como la mejor opción en el mercado de motocicletas, destacando por nuestra excelencia y compromiso.",
                icon: "👁️"
              },
              {
                title: "Valores",
                description: "Compromiso, pasión, honestidad y servicio al cliente son los pilares fundamentales de nuestra empresa.",
                icon: "❤️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-marmolinas-yellow mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
