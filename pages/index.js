import { useState } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import Link from 'next/link'
import axios from 'axios'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
  // const allPostsData = result.data
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  console.log('all post data', allPostsData)
  let [alertype, toggleAlertType] = useState('success')

  function handleCliek() {
    if (alertype === 'success') {
      toggleAlertType('error')
    } else if (alertype === 'error') {
      toggleAlertType('success')
    }
    console.log('toggle')
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Hardus - I'm an intermediate frontend developer leaning
          into full stack development!
        </p>
        <p>
          (This is just a beginning template for my business card{' '}
          <Link href="/posts/first-post">website</Link>. Besides being a bit of
          a code monkey, I also like to put ink in skin...)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}> {title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <Alert type={alertype}>This is the fancy alert!</Alert>
      <br />
      <button onClick={handleCliek}>Toggle Alert</button>
    </Layout>
  )
}
