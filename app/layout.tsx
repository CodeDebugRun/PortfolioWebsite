import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Erhan - Softwareentwickler | Software Developer | QA Automation Engineer',
  description: 'Softwareentwickler und QA Automatisierungsingenieur mit Expertise in Java, Selenium, Cypress, n8n und SAP ABAP. Software Developer and QA Automation Engineer specialized in Java, Selenium, Cypress, n8n, and SAP ABAP.',
  keywords: ['Java Entwickler', 'Java Developer', 'QA Automatisierung', 'QA Automation', 'Selenium', 'Cypress', 'n8n', 'SAP ABAP', 'Softwareentwickler', 'Software Developer', 'Stadtlohn', 'Deutschland', 'Germany'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
