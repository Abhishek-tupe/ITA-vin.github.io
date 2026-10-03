import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const BASE_PATH = '/ITA-vin.github.io'

export const metadata: Metadata = {
  title: 'Lume | Italian Kitchen',
  description:
    'An intimate Italian restaurant where time slows down and every plate tells a story.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: `${BASE_PATH}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${BASE_PATH}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: `${BASE_PATH}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: 'white',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: 'black',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
