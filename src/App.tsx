import { Header } from "./components/header/Header"
import "./App.css"
import { useEffect, useState } from "react"
import { Pokemon } from "./types"
import { PokemonList } from "./screens/PokemonList/PokemonList"
import PokemonDetails from "./screens/PokemonDetails/PokemonDetails"
import { ComparePokemons } from "./screens/ComparePokemons"
import { FavoritePokemons } from "./screens/FavoritePokemons"

export const App = () => {
  let [pokemons,setPokemons] = useState<Pokemon[]>([])
  async function fetchPokemons(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon")
    let data = await response.json()
    setPokemons(data.results)
  }

  useEffect(()=>{
    try {
      fetchPokemons()
    } catch (error) {
      console.log(error)
    }
  },[])
  return (
    <div>
      <Header/>
      {/* <PokemonList data={pokemons}/> */}
      {/* <PokemonDetails /> */}
      <ComparePokemons/>
      {/* <FavoritePokemons/> */}
    </div>
  )
}
