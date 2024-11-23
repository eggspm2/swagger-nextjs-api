// app/layout.js
// https://nextjs.org/docs/app/getting-started/installation

export const metadata = {
  title: "S A N Z",
  description: "S I M P L E  R E S T  A P I",
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
