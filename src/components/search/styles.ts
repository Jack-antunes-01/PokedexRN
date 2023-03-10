import styled, { css } from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import { Touchable } from '@components/touchableOpacity';
import themes from '@themes/themes';

export const Container = styled.View`
  ${({ theme }) => css`
    height: 40px;
    border-radius: ${theme.border.radius.pill}px;
    background-color: ${theme.colors.grayscale.white};
    flex-direction: row;
    align-items: center;
    elevation: 10;
    flex: 1;
  `}
`;

export const SVG = styled(SvgXml).attrs({
  fill: themes.colors.primary,
  width: themes.icon.size.sm,
  height: themes.icon.size.sm,
})`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.xs}px;
  `}
`;

export const ContainerSVGClose = styled(Touchable)`
  ${() => css``}
`;

export const SVGClose = styled(SvgXml).attrs({
  fill: themes.colors.primary,
})`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.xs}px;
  `}
`;

export const SearchInput = styled.TextInput.attrs({})`
  ${({ theme }) => css`
    flex: 1;
    border-radius: ${theme.border.radius.pill}px;
    margin-left: ${theme.spacing.xxs}px;
    margin-right: ${theme.spacing.xxs}px;
  `}
`;
