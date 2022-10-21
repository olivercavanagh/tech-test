import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"

export default function Home({pokemonList}) {
  console.log(pokemonList)

  return (
    <Layout title="NextJS Pokedex">
      <h1>Pokedex</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a>
                <Image src={pokemon.image} alt={pokemon.name} width="100" height="100"/>
                <span>{index + 1}. </span>
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=898")

    const {results} = await response.json()

    const pokemonList = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return {
        ...result,
        image
      }
    })

    return {
      props: {pokemonList}
    }
  } catch(error) {
    console.log(error)
  }

  return {
    notFound: true
  }
}
