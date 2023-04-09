// Layout component
import Layout from '../components/Layout'

// Fonts
import localFont from '@next/font/local';

// Styles
import '@/styles/globals.css'
import '@/styles/reset.css'

// Context
import CartContext from '@/context/CartContext'

const brandon = localFont({
  src: [
    {
      path: './../public/fonts/Brandon_reg.otf',
      weight: '400',
    },
    {
      path: './../public/fonts/Brandon_bld.otf',
      weight: '700',
    },
  ],
  variable: '--font-brandon'
});



export default function App({ Component, pageProps }) {
  
  return(
    <>
    <style jsx global>{`
        :root {
          /* ... */
          --font-brandon: ${brandon.style.fontFamily};
        }
      `}</style>
      
      <CartContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext>
    </>

  ) 
}
