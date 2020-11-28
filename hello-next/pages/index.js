import Link from "next/link";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from 'next/head'

const Index = () => {
  return (
    <Layout>
        <Head>
            <title>
                Index Page
            </title>
        </Head>
      <h2>
        <Link href="/about">
          <div style={{ background: "black", color: "white" }}>Intro</div>
        </Link>
      </h2>
    </Layout>
  );
};

export default Index;
