import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  console.log('POST DATA', postData)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title> {postData.title}</title>
      </Head>
      <article>
        {/* {postData.id} */}
        {/* <Date dateString={postData.date} /> */}
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightTex}>{postData.date}</div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
