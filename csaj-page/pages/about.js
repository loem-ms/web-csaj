import Head from 'next/head';
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function About() {
    return (
        <Layout home>
            <Head>
                <title>CSAJ-About Us</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                Find out more about us here 👉 
                <a href="https://www.facebook.com/csajpage">Official Facebook Page</a>
                </p>
            </section>
            <section className={utilStyles.headingMd}>
                <h1>About Us</h1>
            </section>
        </Layout>
    );
  }