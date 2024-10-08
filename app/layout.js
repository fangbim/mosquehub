import './globals.css'
import "react-day-picker/style.css";
import Head from "next/head";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.9, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}