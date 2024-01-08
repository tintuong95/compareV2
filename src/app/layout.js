
import './globals.css'
import { Titillium_Web } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css"



const titillium_Web = Titillium_Web({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Visual Inspection',
  description: 'FRIWO Visual Inspection Helper',
}



export default function RootLayout({ children }) {

  return (
    <html className="dark m-0 p-0">
      <head>
        <script src="../assets/bootstrap.bundle.min.js"></script>
      </head>
      <body className={titillium_Web.className}>
        {children}
      </body>
    </html>
  )
}
