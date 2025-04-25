import { Pokemon } from '../../types'
import { PokemonItem } from "../../components/pokemons/PokemonItem"
import classes from "./PokemonList.module.css"

export const PokemonList = (props:{data:Pokemon[]}) => {
  return (
    <ul className={classes.list}>
      {props.data.map((pokemon, id) => (
        <PokemonItem key={id} name={pokemon.name} id={id} />
      ))}
      <li style={{ width: '100%', display: 'flex', justifyContent: 'center', listStyle: 'none', marginTop: 16 }}>
        <div className={classes.controls}>
          <button>
            Previous
          </button>
          <button>
            Next
          </button>
        </div>
      </li>
    </ul>
  )
}
