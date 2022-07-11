import type { AppProps } from 'next/app'
import '~/styles/globals.css'

import Head from 'next/head'
import { STORE_NAME } from '~/lib/constants'
import Footer from '~/components/footer'
import NavBar from '~/components/header'


const RootLayout = ({  children }: { children?: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps)  {
  return (
    <RootLayout>
      <Component { ...pageProps } />
    </RootLayout>
  )
}
