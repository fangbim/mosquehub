import './globals.css'
import {Poppins} from '@next/font/google'
const poppins = Poppins({subsets: ['latin'], weight: ['100', '300', '500', '700']});

export const metadata = {
  title: 'Mosque Ku',
  description: 'Solusi Digital Umat',
  icons: {icon: './images/logo-mosqueku.png'}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}