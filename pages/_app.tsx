import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <AnimatePresence exitBeforeEnter initial={false} >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
    </>
  )
}
