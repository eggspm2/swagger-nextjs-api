// app/docs/layout.js
// custom

export const metadata = {
  title: "S Z - D O C S",
  description: "S A N Z - R E S T - A P I",
  keywords: "rest api bot wa",
  openGraph: {
    title: "SANZ - REST API Documentation",
    description:
      "Sanz is a free, simple REST API created by balxzzy for the common good. Feel free to use it, but please avoid DDoS attacks.",
    url: "https://swagger-nextjs-api.vercel.app/docs",
    type: "website",
    images: [
      {
        url: "https://nyimpen.vercel.app/component/logoku.png",
        width: 800,
        height: 600,
        alt: "sz Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
