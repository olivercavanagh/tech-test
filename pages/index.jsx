import Head from 'next/head'
import styles from '../pages/index.module.css'
import Link from 'next/link'
import Pokemons from './pikachuStats'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pikachu Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pikachu Stats</h1>
        <Pokemons />
      </main>
    </div>
  )
}
