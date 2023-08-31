import './globals.css'
import { Inter } from 'next/font/google'
import Header from 'src/app/components/header.js'
import Footer from 'src/app/components/footer.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Project Foshes",
  description: 'Project Foshes fan item catalog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div id='blur' className='blur'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
