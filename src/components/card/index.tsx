import React from 'react';
import { Dimensions } from 'react-native';

import { Illustrations } from '@assets/ilustrations';

import * as S from './styles';

export type CardProps = {
  name: string;
  image: string;
  id: string;
  onPress: () => void;
};

export const Card = ({
  id = '999',
  image = Illustrations.silhouette,
  name = 'Pokémon Name',
  onPress,
}: CardProps) => {
  const width = Dimensions.get('screen').width / 6.25;
  return (
    <S.Container onPress={onPress}>
      <S.Header>
        <S.PokemonNumber>#{id}</S.PokemonNumber>
      </S.Header>
      <S.SVGContainer>
        <S.SVG xml={image} width={width} height={width} />
      </S.SVGContainer>
      <S.ContainerTitle>
        <S.Title>{name}</S.Title>
      </S.ContainerTitle>
    </S.Container>
  );
};
