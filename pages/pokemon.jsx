import Image from "next/image"
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Pokemon({pokemon}) {
    console.log("pokemon id: " + pokemon.id)

    const colors = {
        grass: "#3e9709",
        fire: "#f67f0b",
        water: "#0a7abc",
        normal: "#ccc9aa",
        flying: "#5eb9b2",
        bug: "#bddd6e",
        poison: "#a719d7",
        electric: "#fffa24",
        ground: "#e1d158",
        fighting: "#d36063",
        psychic: "#f55792",
        rock: "#776a3e",
        ice: "#1995a1",
        ghost: "#8e55a4",
        dragon: "#8a55fd",
        dark: "#4f4f4f",
        steel: "#7b8e8a",
        fairy: "#ff9fc2",
    }

    console.log("pokemon type: " + pokemon.types[0].type.name)

    const pokemonColor = colors[pokemon.types[0].type.name.toString()]
    console.log("background color: " + pokemonColor)

    return (
        <Layout title={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}>
			<table>
				<tbody>
					<tr>
						<td>
							<Image src={pokemon.image} alt={pokemon.name} width="200" height="200"/>
						</td>
						<td>
							<h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
							<p>#{pokemon.id}</p>
							<p>Type: {pokemon.types[0].type.name}</p>
							<p>Weight: {pokemon.weight * 10}</p>
							<p>Height: {pokemon.height * 100} grams</p>
							<p>Abilities: {pokemon.abilities.map(({ability}, index) => <p key={ability.slot}>{"- " + ability.name[0].toUpperCase() + ability.name.slice(1)}</p>)}</p>
							<p>Types:
							{pokemon.types.map(({type}, index) => type.name=="ghost" | type.name=="poison" | type.name=="dark" | type.name=="water" | type.name=="rock"?<p style={{backgroundColor: colors[type.name.toString()],}} key={type.slot}>{type.name[0].toUpperCase() + type.name.slice(1)}</p>
                    :
                    <p style={{backgroundColor: colors[type.name.toString()],}} key={type.slot}>{type.name[0].toUpperCase() + type.name.slice(1)}</p>)
                    }
					</p>
						</td>
					</tr>
				</tbody>
			</table>
            <p>
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            </p>
        </Layout>
    )
}

export async function getServerSideProps({query}) {
    const id = query.id

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon = await response.json()
        const paddedIndex = ("00" + id).slice(-3)
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`

        pokemon.image = image

        return {
            props: {pokemon}
        }
    } catch(error) {
        console.log(error)
    }

    return {
        notFound: true
    }
}
