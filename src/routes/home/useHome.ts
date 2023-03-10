import { useState } from 'react';

import { Route } from '@enum/route';
import { navigate } from '@navigator/index';
import { pokemons } from '@data/data.json';

import { PokemonTypes } from 'src/types/pokemonTypes';

export const useHome = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleChangeText = (value: string) => {
    setSearchText(value);
  };

  const handleNavigateToDetails = (pokemonInfo: PokemonTypes) => {
    navigate({
      routeName: Route.Details,
      params: {
        pokemonInfo,
      },
    });
  };

  const filteredPokemons = pokemons.filter(
    (pokemon: PokemonTypes) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()) ||
      pokemon.id.includes(searchText),
  );

  return {
    searchText,
    filteredPokemons,
    handleChangeText,
    handleNavigateToDetails,
  };
};
