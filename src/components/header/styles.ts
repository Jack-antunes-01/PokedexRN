import { SvgXml } from 'react-native-svg';
import styled, { css } from 'styled-components/native';

import themes from '@themes/themes';

export const Container = styled.View`
  ${() => css``}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    margin-bottom: ${theme.spacing.xs}px;
  `}
`;

export const SVG = styled(SvgXml).attrs({
  fill: themes.colors.grayscale.white,
  width: 32,
  height: 32,
})`
  ${() => css`
    margin-right: 16px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.fontSize.md}px;
    font-weight: 700;
    color: ${theme.colors.grayscale.white};
  `}
`;
