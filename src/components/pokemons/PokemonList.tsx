import React from 'react'
import { Pokemon } from '../../types'
import { PokemonItem } from "./PokemonItem"
import classes from "./PokemonList.module.css"

export const PokemonList = (props:{data:Pokemon[]}) => {
  return (
    <>
      <ul className={classes.list}>
          {props.data.map((pokemon,id)=>{
            return <PokemonItem key={id} name={pokemon.name} id={id}/>
          })}
      </ul>
      <div className="controls">
        <button>
          Previous
        </button>
        <button>
          Next
        </button>
      </div>
    </>
  )
}
