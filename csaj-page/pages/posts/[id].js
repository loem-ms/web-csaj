import Head from 'next/head';
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../lib/date";
import NextImage from 'next/image';
import Image from 'next/image';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
        <article className="prose dark:prose-dark px-20 text-justify">
        <h1 className="text-3xl md:text-5xl dark:text-blue text-center mb-12">{postData.title}</h1>
            <p>Written on <Date dateString={postData.date} /></p>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <br/>
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
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}