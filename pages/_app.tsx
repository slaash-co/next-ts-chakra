import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from "../core/utils/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Head>
          <title>Project Title</title>
          <meta name="description" content="Project Purpose" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </div>
    </ChakraProvider>
  )
}

export default MyApp