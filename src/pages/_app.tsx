import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <DefaultSeo
        title='おつまみ.dev'
        twitter={{}}
        openGraph={{
          title: 'おつまみ（まつお）のページ',
          url: 'https://otsumami.dev',
          type: 'website',
          description: 'おつまみ（まつお）のTOPページ',
          site_name: 'otsumami.dev',
        }}
      />
      <Component {...pageProps} />)
    </NextUIProvider>
  )
}

export default MyApp
