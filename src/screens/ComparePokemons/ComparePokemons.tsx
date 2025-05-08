import React from 'react';
import classes from './ComparePokemons.module.css';

const mockPokemons = [
  { id: 1, name: 'Pikachu', height: 4, weight: 60, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
  { id: 2, name: 'Eevee', height: 3, weight: 65, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' },
];

const getComparisonIcon = (a: number, b: number) => {
  if (a > b) return '⬆️';
  if (a < b) return '⬇️';
  return '＝';
};

export const ComparePokemons = () => {
  const [left, right] = mockPokemons;
  return (
    <div className={classes.compareContainer}>
      <div className={classes.pokemonCard}>
        <img src={left.image} alt={left.name} className={classes.pokemonImage} />
        <div className={classes.row}><strong>Name:</strong> {left.name}</div>
        <div className={classes.row}><strong>Height:</strong> {left.height}</div>
        <div className={classes.row}><strong>Weight:</strong> {left.weight}</div>
        <div className={classes.removeIcon} title="Remove">✖</div>
      </div>
      <div className={classes.comparisonColumn}>
        <div className={classes.comparisonRow}>{getComparisonIcon(left.height, right.height)}</div>
        <div className={classes.comparisonRow}>{getComparisonIcon(left.weight, right.weight)}</div>
      </div>
      <div className={classes.pokemonCard}>
        <img src={right.image} alt={right.name} className={classes.pokemonImage} />
        <div className={classes.row}><strong>Name:</strong> {right.name}</div>
        <div className={classes.row}><strong>Height:</strong> {right.height}</div>
        <div className={classes.row}><strong>Weight:</strong> {right.weight}</div>
        <div className={classes.removeIcon} title="Remove">✖</div>
      </div>
    </div>
  );
} 