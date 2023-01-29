import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Postblock from '../components/postblock'

export default function News({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>CSAJ-News</title>
      </Head>
      <section class="bg-white">
        <div class="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
            <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {allPostsData.map((post) => (
                    <Postblock post={{id: post.id, date: post.date, title: post.title, image: '/logo.jpg'}} />
                ))}
            </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}