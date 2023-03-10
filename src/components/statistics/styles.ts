import styled, { css } from 'styled-components/native';

const CONSTANTS = {
  barHeight: 5,
};

type PokemonTypeProps = {
  pokemonType: string;
  value?: number;
};

export const ContainerColumn = styled.View`
  ${({}) => css`
    flex-direction: column;
  `}
`;

export const ContainerRow = styled.View`
  ${({}) => css`
    flex-direction: row;
  `}
`;

export const Container = styled.View`
  ${({}) => css`
    flex: 1;
    background-color: white;
  `}
`;

export const BarContainer = styled.View`
  ${() => css`
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
  `}
`;

export const BarBackgroundContainer = styled.View`
  ${() => css`
    flex-direction: row;
    width: 100%;
    height: ${CONSTANTS.barHeight}px;
  `}
`;

export const BarBackground = styled.View<PokemonTypeProps>`
  ${({ theme, pokemonType }) => css`
    position: absolute;
    height: ${CONSTANTS.barHeight}px;
    width: 100%;
    border-radius: ${theme.border.radius.pill}px;
    background-color: ${theme.colors.byPokemonType[
      pokemonType.toLowerCase() as keyof typeof theme.colors.byPokemonType
    ]};
    opacity: 0.2;
  `}
`;

export const Bar = styled.View<PokemonTypeProps>`
  ${({ theme, pokemonType, value }) => css`
    position: absolute;
    height: ${CONSTANTS.barHeight}px;
    width: ${value}%;
    border-radius: ${theme.border.radius.pill}px;
    background-color: ${theme.colors.byPokemonType[
      pokemonType.toLowerCase() as keyof typeof theme.colors.byPokemonType
    ]};
  `}
`;

export const Title = styled.Text<PokemonTypeProps>`
  ${({ theme, pokemonType }) => css`
    font-size: ${theme.font.fontSize.sm}px;
    align-self: flex-end;
    font-weight: 700;
    color: ${theme.colors.byPokemonType[
      pokemonType.toLowerCase() as keyof typeof theme.colors.byPokemonType
    ]};
    margin-right: ${theme.spacing.sm}px;
  `}
`;

export const ContainerTitle = styled.View`
  ${({ theme }) => css`
    border-right-width: 1px;
    border-right-color: ${theme.colors.grayscale.light};
    margin-right: ${theme.spacing.sm}px;
  `}
`;

export const Numbers = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.fontSize.sm}px;
    color: ${theme.colors.grayscale.dark};
    margin-right: ${theme.spacing.xxs}px;
  `}
`;
