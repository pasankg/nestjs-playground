import Link from "next/link";
import Script from 'next/script';
import Head from 'next/head';
import Layout from "../../components/layout";

export default function FirstPost() {
 return (
  <Layout>
   <Head>
    <title>First Post</title>
   </Head>
   <Script src=""
    strategy="lazyOnLoad"
    onLoad={() =>
     console.log(`hello`)
    }
   />
   <h1>First Post</h1>
   <div>
    {/* <Link href="/">Back to home</Link> */}
   </div>
  </Layout>
 );

}