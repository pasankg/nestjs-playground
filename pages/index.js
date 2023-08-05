import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>My Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className="title">
            Read <Link href="/posts/first-post"> this page!</Link>
          </h1>
        </main>    
      </div>
    </Layout>
  )
}
