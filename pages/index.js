import Head from 'next/head';
//import styles from '../styles/Home.module.css'
import Link from 'next/link';
import TasksList from './tasksList';

const Home = () => {
  return (
    <section>
    <div>
        <h1>FT Onboarding Tasks</h1>
    </div>
    <div className="{styles.container}">
      <Head>
        <title>Onboarding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>        
      <TasksList />
    </div>
    </section>
  )
}

export default Home;