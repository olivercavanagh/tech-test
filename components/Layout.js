import Head from 'next/head'

export default function Layout({title, children}) {
  return (
    <div className="bg-[url('../public/background/pokemon-background.png')] text-dark-gray">
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/pokeball.ico" />
            <meta name="description" content="The People's Pokedex"/>
        </Head>
        <main>
            {children}
        </main>
    </div>
  )
}
