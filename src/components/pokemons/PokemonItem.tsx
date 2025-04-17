import React from 'react'
import { Pokemon } from '../../types'
import classes from "./PokemonItem.module.css"
export const PokemonItem = (props:{id:number,name:string}) => {
  return (
    <div className={classes.item}>
        <div>{props.name}</div>
        <div>{props.id}</div>
        <div className="controls">
            <button>
                Add to favorite
            </button>
            <button>
                Add to compare 
            </button>
        </div>
      </div>
  )
}
