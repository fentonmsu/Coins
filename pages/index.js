// to import links
import Link from "next/link"
// import the head component 
import Head from 'next/head'
import Image from 'next/image'
// import it by calling it styles whatever class create 
import styles from '../styles/Home.module.css'
// run npm run dev
export default function Home() {
  return <div className={styles.container}>
    <Head>
      <title>ZAF Coding</title>
    </Head>

    <h1 className={styles.homePageTitle}>Hello World</h1>
  </div>;
}
