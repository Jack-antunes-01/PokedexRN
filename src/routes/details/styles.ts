import { SvgXml } from 'react-native-svg';
import styled, { css, DefaultTheme } from 'styled-components/native';

import themes from '@themes/themes';

type PokemonTypeProps = {
  pokemonType: string;
};

export const Container = styled.View<PokemonTypeProps>`
  ${({ theme, pokemonType }) => css`
    flex: 1;
    background-color: ${theme.colors.byPokemonType[
      pokemonType.toLowerCase() as keyof typeof theme.colors.byPokemonType
    ]};
    elevation: 10;
  `}
`;

export const PokeballSVG = styled(SvgXml).attrs({
  fill: themes.colors.grayscale.white,
  width: '100%',
  height: '100%',
})`
  ${() => css``}
`;

export const ContainerPokeball = styled.View`
  ${() => css`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 65%;
    height: 35%;
    z-index: -2;
  `}
`;

export const PokemonSVG = styled(SvgXml).attrs({
  width: '60%',
  height: '100%',
})`
  ${() => css``}
`;

export const ContainerPokemonSVG = styled.View`
  ${() => css`
    z-index: -1;
    position: absolute;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 60%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `}
`;

export const ContainerPokemon = styled.View`
  ${() => css`
    height: 27%;
    z-index: -3;
  `}
`;

export const ContainerContent = styled.View`
  ${({ theme }) => css`
    z-index: -2;
    flex: 1;
    background-color: ${theme.colors.grayscale.white};
    border-radius: ${theme.border.radius.md}px;
    margin-right: ${theme.spacing.xxxs}px;
    margin-left: ${theme.spacing.xxxs}px;
    margin-bottom: ${theme.spacing.xxxs}px;
  `}
`;

export const ContainerTag = styled.View`
  ${({ theme }) => css`
    margin-top: 17%;
    flex-direction: row;
    justify-content: center;
    margin-bottom: ${theme.spacing.sm}px;
  `}
`;

export const Title = styled.Text<PokemonTypeProps>`
  ${({ theme, pokemonType }) => css`
    font-size: ${theme.font.fontSize.xmd}px;
    align-self: center;
    font-weight: 700;
    color: ${theme.colors.byPokemonType[
      pokemonType.toLowerCase() as keyof typeof theme.colors.byPokemonType
    ]};
    margin-bottom: ${theme.spacing.sm}px;
  `}
`;

export const ContainerAbout = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    margin-right: 10%;
    margin-left: 10%;
    margin-bottom: ${theme.spacing.xlg}px;
  `}
`;

export const ContainerRow = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.spacing.xs}px;
  `}
`;

type ContainerItemProps = {
  isFirstItem: boolean;
};

const ContainerItemModifier = {
  isFirstItem: (theme: DefaultTheme, isFirstItem: boolean) => css`
    border-left-color: ${isFirstItem
      ? theme.colors.grayscale.white
      : theme.colors.grayscale.light};
  `,
};

export const ContainerItem = styled.View<ContainerItemProps>`
  ${({ theme, isFirstItem }) => css`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    border-left-width: 2px;
    border-left-color: ${theme.colors.grayscale.light};

    ${ContainerItemModifier.isFirstItem(theme, isFirstItem)}
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.fontSize.xxs}px;
    align-self: center;
    font-weight: 600;
    color: ${theme.colors.grayscale.medium};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.grayscale.dark};
    font-size: ${theme.font.fontSize.xs}px;
  `}
`;

export const ContainerDescription = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.md}px;
    margin-right: ${theme.spacing.md}px;
    margin-bottom: ${theme.spacing.sm}px;
  `}
`;

export const ContainerStatistics = styled.View`
  ${({ theme }) => css`
    flex: 1;
    margin-left: ${theme.spacing.md}px;
    margin-right: ${theme.spacing.md}px;
  `}
`;
