import React from 'react';

import { Filter } from '../../components/filter';
import { Illustrations } from '../../assets/ilustrations';
import { Card, CardProps } from '../../components/card';
import { pokemons } from '../../data/data.json';

import * as S from './styles';

export const Home = () => {
  const renderItem = ({ item }: { item: CardProps }) => (
    <Card
      id={item.id}
      image={Illustrations[item.image as keyof typeof Illustrations]}
      name={item.name}
    />
  );

  return (
    <S.Container>
      <S.StyledHeader />
      <S.SearchContainer>
        <S.StyledSearch />
        <Filter />
      </S.SearchContainer>
      <S.ContainerFlatList>
        <S.List
          keyExtractor={(_: any, index: number) => index.toString()}
          data={pokemons}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      </S.ContainerFlatList>
      <S.Footer />
    </S.Container>
  );
};
