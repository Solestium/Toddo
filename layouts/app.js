import Head from 'next/head'
import { Fragment } from 'react'

export default ({ children }) => (
  <Fragment>
    <Head>
      <title>Toddo</title>

      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito"
        rel="stylesheet"
        type="text/css"
      />
    </Head>

    <main>{children}</main>

    <style jsx global>{`
      body {
        font: 16px Nunito, menlo;
      }

      html,
      body,
      #__next {
        height: 100%;
        padding: 0;
        margin: 0;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .content {
        color: #676767;
        padding-top: 1rem;
        font-size: 1.1rem;
        letter-spacing: 1px;
      }
    `}</style>
  </Fragment>
)
