export default {
  github: "https://marmolinasgranillos.com/",
  docsRepositoryBase: "https://marmolinasgranillos.com/",
  titleSuffix: " – Blog Marmolinas",
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline text-marmolinas-blue">Marmolinas</span>
      <span className="text-marmolinas-yellow font-bold hidden md:inline">Blog</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#003087" />
      <meta name="theme-color" content="#003087" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <meta name="description" content="Blog de Marmolinas Granillos: tips, inspiración y novedades sobre granito, cuarzo y mármol en Ecuador." />
      <meta name="og:description" content="Blog de Marmolinas Granillos: tips, inspiración y novedades sobre granito, cuarzo y mármol en Ecuador." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/logo-marmolinas.jpg" />
      <meta name="twitter:site:domain" content="marmolinasgranillos.com" />
      <meta name="twitter:url" content="https://marmolinasgranillos.com" />
      <meta name="og:title" content="Blog Marmolinas Granillos" />
      <meta name="og:image" content="/logo-marmolinas.jpg" />
      <meta name="apple-mobile-web-app-title" content="Blog Marmolinas" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo-marmolinas.jpg" />
      <link rel="icon" type="image/png" sizes="192x192" href="/logo-marmolinas.jpg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo-marmolinas.jpg" />
      <link rel="icon" type="image/png" sizes="96x96" href="/logo-marmolinas.jpg" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo-marmolinas.jpg" />
      <meta name="msapplication-TileImage" content="/logo-marmolinas.jpg" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: false,
  footerText: <>
    <span className="text-marmolinas-blue font-bold">Marmolinas Granillos</span> &copy; {new Date().getFullYear()} | Blog oficial de granito, cuarzo y mármol en Ecuador.
  </>,
  unstable_faviconGlyph: "🪨",
};
