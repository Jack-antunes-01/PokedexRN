import React from 'react';
import { ListRenderItem } from 'react-native';

import { Card } from '@components/card';
import { Filter } from '@components/filter';
import { Illustrations } from '@assets/ilustrations';

import { PokemonTypes } from 'src/types/pokemonTypes';

import * as S from './styles';
import { useHome } from './useHome';

export const Home = () => {
  const {
    searchText,
    filteredPokemons,
    handleChangeText,
    handleNavigateToDetails,
  } = useHome();

  const renderItem = ({ item }: { item: PokemonTypes }) => (
    <Card
      id={item.id}
      image={Illustrations[item.image as keyof typeof Illustrations]}
      name={item.name}
      onPress={() => handleNavigateToDetails(item)}
    />
  );

  return (
    <S.Container>
      <S.StyledHeader />
      <S.SearchContainer>
        <S.StyledSearch onChangeText={handleChangeText} text={searchText} />
        <Filter />
      </S.SearchContainer>
      <S.ContainerFlatList>
        <S.List
          keyExtractor={(item: unknown) => (item as PokemonTypes).id.toString()}
          data={filteredPokemons}
          renderItem={renderItem as ListRenderItem<unknown>}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      </S.ContainerFlatList>
      <S.Footer />
    </S.Container>
  );
};
