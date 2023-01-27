import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Find out more about us here 👉 
          <a href="https://www.facebook.com/csajpage">Official Facebook Page</a>
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h1>Home</h1>
      </section>
    </Layout>
  );
}