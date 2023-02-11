import Layout from '@/components/layouts/layout'
import '@/styles/globals.css'
import '@/styles/theme.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
