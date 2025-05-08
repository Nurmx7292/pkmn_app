import React from 'react';
import { PokemonItem } from '../../components/pokemons/PokemonItem';
import classes from './FavoritePokemons.module.css';

const mockFavorites = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Charmander' },
  { id: 3, name: 'Squirtle' },
];

export const FavoritePokemons = () => {
  return (
    <ul className={classes.list}>
      {mockFavorites.map((pokemon) => (
        <PokemonItem key={pokemon.id} name={pokemon.name} id={pokemon.id} favoriteButtonLabel="Remove from favorite" />
      ))}
    </ul>
  );
} 