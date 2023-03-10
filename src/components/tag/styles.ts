import styled, { css, DefaultTheme } from 'styled-components/native';

type ContainerProps = {
  title: string;
  isFirstItem: boolean;
};

const ContainerModifier = {
  isFirstItem: (theme: DefaultTheme, isFirstItem: boolean) => css`
    margin-left: ${isFirstItem ? 0 : theme.spacing.sm}px;
  `,
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, title, isFirstItem }) => css`
    align-self: flex-start;
    background-color: ${theme.colors.byPokemonType[
      title.toLowerCase() as keyof typeof theme.colors.byPokemonType
    ]};
    padding: ${theme.spacing.xxxs}px ${theme.spacing.xxs}px;
    border-radius: ${theme.border.radius.sm}px;

    ${ContainerModifier.isFirstItem(theme, isFirstItem)}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.grayscale.white};
    font-weight: 700;
  `}
`;
