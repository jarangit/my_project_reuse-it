import Layout from '@/components/layouts/layout'
import AppState from '@/context/appState'
import '@/styles/globals.css'
import '@/styles/theme.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppState>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </AppState>
  )
}
