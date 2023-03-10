import { SvgXml } from 'react-native-svg';
import styled, { css, DefaultTheme } from 'styled-components/native';

import themes from '@themes/themes';

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

export const ContainerRow = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.spacing.xxs}px;
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

export const SVG = styled(SvgXml).attrs({
  fill: themes.colors.grayscale.dark,
  width: themes.icon.size.sm,
  height: themes.icon.size.sm,
})`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.xxs}px;
  `}
`;
