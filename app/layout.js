import './globals.css'
import "react-day-picker/style.css";
import Head from "next/head";
import {Poppins} from '@next/font/google'
const poppins = Poppins({subsets: ['latin'], weight: ['100', '300', '500', '700']});


export const metadata = {
  title: 'MosqueHub',
  description: 'Startup digital yang fokus pada informasi mengenai kegiatan masjid di lingkungan anda',
  icons: {icon: './images/logo4.png'}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Mosque ku</title>
        <meta  name="description" content="Startup digital yang fokus pada informasi mengenai kegiatan masjid di lingkungan anda" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}