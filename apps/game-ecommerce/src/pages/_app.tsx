import type { AppProps } from 'next/app'
import '~/styles/globals.css'
import Head from 'next/head'
import { STORE_NAME } from '~/lib/constants'
import { SWRConfig } from 'swr'
import Footer from '~/components/footer'
import NavBar from '~/components/header'
import phetch from '~/lib/phetch'


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
      <SWRConfig value={{ fetcher: phetch }}>
        <Component { ...pageProps } />
      </SWRConfig>
    </RootLayout>
  )
}
