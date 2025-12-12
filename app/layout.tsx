import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hennessey & Company',
  description: 'Procurement solutions for the construction industry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
