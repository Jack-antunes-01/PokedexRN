import { PokemonTypes } from 'src/types/pokemonTypes';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    pokemonInfo: PokemonTypes;
  };
};
