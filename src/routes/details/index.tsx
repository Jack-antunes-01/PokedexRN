import React from 'react';
import * as Animatable from 'react-native-animatable';

import { Tag } from '@components/tag';
import { Icons } from '@assets/icons';
import { Statistics } from '@components/statistics';
import { NavigationHeader } from '@components/navigationHeader';

import * as S from './styles';
import { AboutItem } from './components/aboutItem';
import { useDetails } from './useDetails';
import { detailsStrings } from './locales';
import { PokemonImage, PokemonImageProps } from './components/pokemonImage';

const PokemonImageAnimated = Animatable.createAnimatableComponent<
  PokemonImageProps & { style?: any }
>(PokemonImage);

export const Details = () => {
  const { pokemonInfo, randomAnimation } = useDetails();

  return (
    <S.Container pokemonType={pokemonInfo.type[0]}>
      <NavigationHeader title={pokemonInfo.name} id={pokemonInfo.id} />
      <S.ContainerPokeball>
        <S.PokeballSVG xml={Icons.pokeball} opacity={0.1} />
      </S.ContainerPokeball>
      <PokemonImageAnimated
        pokemonName={pokemonInfo.name}
        animation={randomAnimation}
        duration={1500}
        useNativeDriver={true}
      />
      <S.ContainerPokemon />

      <S.ContainerContent>
        <S.ContainerTag>
          {pokemonInfo.type.map((el, index) => (
            <Tag title={el} isFirstItem={!index} />
          ))}
        </S.ContainerTag>

        <S.Title pokemonType={pokemonInfo.type[0]}>About</S.Title>
        <S.ContainerAbout>
          <AboutItem
            description={detailsStrings.weight}
            icon={Icons.weight}
            isFirstItem
            value={pokemonInfo.weight.toFixed(1)}
          />
          <AboutItem
            description={detailsStrings.height}
            icon={Icons.ruler}
            isFirstItem={false}
            value={pokemonInfo.height.toFixed(1)}
          />
          <AboutItem
            description={detailsStrings.moves}
            isFirstItem={false}
            value={pokemonInfo.moves.join('\n')}
          />
        </S.ContainerAbout>

        <S.ContainerDescription>
          <S.Description>{pokemonInfo.description}</S.Description>
        </S.ContainerDescription>

        <S.Title pokemonType={pokemonInfo.type[0]}>Base Stats</S.Title>
        <S.ContainerStatistics>
          <Statistics
            pokemonStatus={pokemonInfo.status}
            pokemonType={pokemonInfo.type[0]}
          />
        </S.ContainerStatistics>
      </S.ContainerContent>
    </S.Container>
  );
};
