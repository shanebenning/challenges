import type { AppProps } from 'next/app'
import '~/styles/globals.css'


const RootLayout = ({  children }: { children?: React.ReactNode }) => {
  return (
    <>
      <main>{ children }</main>
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
