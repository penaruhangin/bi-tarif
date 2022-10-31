import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
      <ChakraProvider>
      <>
        <Head>
          <title>PT.Bank Rakyat Indonesia (Persero) Tbk.</title>
          <meta name="description" content="Gedung BRI I dan II, Jalan Jendral Sudirman Kav. 44 - 46, Jakarat, Indonesia" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
      </>
      </ChakraProvider>
    )
}

export default MyApp