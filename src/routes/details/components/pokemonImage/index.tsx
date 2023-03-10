import { Illustrations } from '@assets/ilustrations';
import React from 'react';

import * as S from './styles';

export type PokemonImageProps = {
  pokemonName: string;
};

export class PokemonImage extends React.Component<PokemonImageProps> {
  render() {
    const { pokemonName } = this.props;
    return (
      <S.ContainerPokemonSVG>
        <S.PokemonSVG
          xml={
            Illustrations[
              pokemonName.toLowerCase() as keyof typeof Illustrations
            ]
          }
        />
      </S.ContainerPokemonSVG>
    );
  }
}
