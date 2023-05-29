import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
  const melk = (gras) => {
    console.log('eet ', gras)
    alert('dan is daar melkl')
    console.log(
      `script loaded correctly, window.FB has been populated`,
      window.FB,
    )
  }
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          // console.log(`script loaded correctly, window.FB has been populated`)
          // alert('BOOM!')
          melk('gras')
        }
      />

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}
