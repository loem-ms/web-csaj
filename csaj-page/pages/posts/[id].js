import Head from 'next/head';
import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";
import Date from "../../lib/date";
import Image from 'next/image';
import md from 'markdown-it';
import fs from 'fs';
import matter from 'gray-matter';

export default function Post({ postData, content }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.image.map((img) => (
        <div className='relative' width='500' height='500' align='center'>
          <Image
            alt={postData.title}
            src={img}
            unoptimized={true}
            height={500}
            width={800}
            intrinsic
          />
        </div>
      ))}
      <article className="propse prose-xl px-48 text-justify font-sans">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-blue text-center mb-12">{postData.title}</h1>
        <p>Written on <Date dateString={postData.date} /></p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <br />

      </article>

    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fileName = fs.readFileSync(`posts/${params.id}.md`, 'utf-8');
  const { data: postData, content } = matter(fileName);
  return {
    props: {
      postData,
      content,
    },
  };
}