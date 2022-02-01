import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UNMA - Universal Metaverse Association</title>
        <meta name="Universal Metaverse Association" content="Biggest association of metaverse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
    </div>
  );
}
