

export const getStaticProps = async () => {

        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/pikachu');
        const data = await res.json();

        return {
            props: { pokemons: data }
        }
    }

const Pokemons= ({pokemons}) => {
    return (
        <div>
            <h1>Pokemon Stats</h1>
            {/* {pokemons.map(pokemon=> ( */}
                <div>
                      <p>Name:{pokemons.name} </p>
                      <p>Weight:{pokemons.weight} </p>
                      <p>Height:{pokemons.height}</p>
                      {/* create a for loop, to go through abilities? */}
                      {/* <p>Abilities:{pokemon.abilities.ability.name} </p> */}

                </div>
            
        </div>

    )
}

export default Pokemons