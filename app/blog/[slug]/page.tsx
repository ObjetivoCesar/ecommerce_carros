import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const articulos = [
  {
    slug: "granito-para-tu-cocina",
    titulo: "¿Cómo elegir el mejor granito para tu cocina?",
    descripcion: "Consejos prácticos para seleccionar el granito ideal según tu estilo y necesidades.",
    imagen: "/images/encimera_Pinteres.webp",
    fecha: "2024-06-01",
    contenido: (
      <>
        <p className="mb-4">El granito es una de las opciones más populares para cocinas modernas y clásicas. Su resistencia, variedad de colores y fácil mantenimiento lo convierten en la elección ideal para quienes buscan durabilidad y estilo.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Considera el color y la textura que combine con tus muebles.</li>
          <li>Elige un acabado pulido para mayor brillo o mate para un look más natural.</li>
          <li>Consulta siempre con expertos para la instalación y mantenimiento.</li>
        </ul>
        <p>En Marmolinas te asesoramos para que tu cocina luzca espectacular y funcional.</p>
      </>
    ),
  },
  {
    slug: "ventajas-cuarzo-premium",
    titulo: "Ventajas del cuarzo premium en superficies modernas",
    descripcion: "Descubre por qué el cuarzo es tendencia en diseño de interiores y remodelaciones.",
    imagen: "/images/cocinalujo_Pinteres.webp",
    fecha: "2024-05-20",
    contenido: (
      <>
        <p className="mb-4">El cuarzo premium ofrece una superficie no porosa, resistente a manchas y rayones, ideal para cocinas y baños de alto tráfico.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Gran variedad de colores y acabados.</li>
          <li>No requiere sellado periódico.</li>
          <li>Fácil limpieza y mantenimiento.</li>
        </ul>
        <p>¡Atrévete a renovar tus espacios con cuarzo premium de Marmolinas!</p>
      </>
    ),
  },
  {
    slug: "fachaletas-decorativas",
    titulo: "Fachaletas decorativas: transforma tus espacios",
    descripcion: "Ideas y tips para renovar ambientes con fachaletas de piedra natural.",
    imagen: "/images/fachaletas-de-piedra.jpeg",
    fecha: "2024-05-10",
    contenido: (
      <>
        <p className="mb-4">Las fachaletas de piedra natural son perfectas para dar un toque elegante y moderno a cualquier ambiente, tanto interior como exterior.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Fáciles de instalar y mantener.</li>
          <li>Resistentes a la intemperie.</li>
          <li>Variedad de estilos y colores.</li>
        </ul>
        <p>Descubre cómo transformar tus espacios con Marmolinas.</p>
      </>
    ),
  },
];

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const articulo = articulos.find((a) => a.slug === params.slug);
  if (!articulo) return notFound();

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Link href="/blog" className="text-marmolinas-yellow hover:underline mb-6 inline-block">← Volver al blog</Link>
        <h1 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-2">{articulo.titulo}</h1>
        <div className="text-gray-500 text-sm mb-4">{new Date(articulo.fecha).toLocaleDateString()}</div>
        <Image src={articulo.imagen} alt={articulo.titulo} width={800} height={256} className="rounded-lg w-full h-64 object-cover mb-6" />
        <div className="text-lg text-gray-700 mb-6">{articulo.descripcion}</div>
        <article className="prose prose-marmolinas max-w-none">
          {articulo.contenido}
        </article>
        <div className="mt-8">
          <Link href="/blog" className="bg-marmolinas-blue text-white px-6 py-2 rounded hover:bg-marmolinas-blue/90 font-semibold">Volver al blog</Link>
        </div>
      </div>
    </div>
  );
} 