import React from 'react';
import * as Animatable from 'react-native-animatable';

import * as S from './styles';
import {
  AnimationProps,
  StatisticsProps,
  useStatistics,
} from './useStatistics';

const BarAnimated = Animatable.createAnimatableComponent<
  AnimationProps & { style?: any }
>(S.Bar);

const Statistics = ({ pokemonStatus, pokemonType }: StatisticsProps) => {
  const { pokemonStatusArr } = useStatistics({ pokemonStatus });
  return (
    <S.Container>
      <S.ContainerRow>
        <S.ContainerColumn>
          {pokemonStatusArr &&
            pokemonStatusArr.map(element => (
              <S.ContainerTitle key={element[0]}>
                <S.Title pokemonType={pokemonType}>
                  {element[0].toUpperCase()}
                </S.Title>
              </S.ContainerTitle>
            ))}
        </S.ContainerColumn>

        <S.ContainerColumn>
          {pokemonStatusArr &&
            pokemonStatusArr.map(element => (
              <S.Numbers key={element[0]}>{element[1]}</S.Numbers>
            ))}
        </S.ContainerColumn>

        <S.BarContainer>
          {pokemonStatusArr &&
            pokemonStatusArr.map(element => (
              <S.BarBackgroundContainer>
                <BarAnimated
                  pokemonType={pokemonType}
                  value={element[1]}
                  duration={1000}
                  animation="fadeInRight"
                />
                <S.BarBackground pokemonType={pokemonType} />
              </S.BarBackgroundContainer>
            ))}
        </S.BarContainer>
      </S.ContainerRow>
    </S.Container>
  );
};

export { Statistics };
