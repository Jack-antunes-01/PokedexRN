import styled, { css } from 'styled-components/native';

type ContainerProps = {
  title: string;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, title }) => css`
    align-self: flex-start;
    background-color: ${theme.colors.byPokemonType[
      title.toLowerCase() as keyof typeof theme.colors.byPokemonType
    ]};
    padding: ${theme.spacing.xxxs}px ${theme.spacing.xxs}px;
    border-radius: ${theme.border.radius.sm}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.grayscale.white};
    font-weight: 700;
  `}
`;
