import React, { useState } from 'react';
import styles from './PokemonDetails.module.css';

// Mock data for a Pokémon
type Stat = {
  name: string;
  value: number;
};
const mockPokemon = {

  name: 'Pikachu',
  height: 4,
  weight: 60,
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  stats: [
    { name: 'HP', value: 35 },
    { name: 'Attack', value: 55 },
    { name: 'Defense', value: 40 },
    { name: 'Speed', value: 90 },
  ] as Stat[],
};

const PokemonDetails: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [inComparison, setInComparison] = useState(false);

  return (
    <div className={styles.container}>
      <h2>{mockPokemon.name}</h2>
      <img src={mockPokemon.image} alt={mockPokemon.name} className={styles.pokemonImage} />
      <p>Height: <b>{mockPokemon.height}</b></p>
      <p>Weight: <b>{mockPokemon.weight}</b></p>
      <h3>Stats</h3>
      <ul className={styles.statsList}>
        {mockPokemon.stats.map((stat) => (
          <li key={stat.name}>
            <span>{stat.name}</span>
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>
      <div className={styles.iconRow}>
        <span
          className={styles.icon}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => setIsFavorite((f) => !f)}
        >
          {isFavorite ? '★' : '☆'}
        </span>
        <span
          className={styles.icon}
          title={inComparison ? 'Remove from comparison' : 'Add to comparison'}
          onClick={() => setInComparison((c) => !c)}
        >
          {inComparison ? '🔗' : '➕'}
        </span>
      </div>
    </div>
  );
};

export default PokemonDetails; 