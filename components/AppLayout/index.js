import FooterApp from 'components/FooterApp'
import Head from 'next/head'
import HeaderApp from 'components/HeaderApp'
import { rem } from 'styles/utils'

export default function AppLayout ({ children }) {
  return (
    <>
      <main>
        <Head>
            <title>Cristian Poley</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preload" href="/fonts.css" as="style" />
            <meta name="viewport" content="width=device-width"/>
        </Head>
        <HeaderApp />
          {children}
        <FooterApp />
      </main>
      <style jsx>{`
        main {
          height: 100vh;
          max-width: var(--xl2);
          padding: 0 ${rem(160)};
          margin: 0 auto;
        }

        @media (max-width: ${rem(1024)}) {
          main {
            padding: 0 ${rem(40)};
          }
        }
        @media (max-width: ${rem(768)}) {
          main {
            padding: 0 ${rem(24)};
          }
        }
      `}</style>
    </>
  )
}
