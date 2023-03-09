import { SvgXml } from 'react-native-svg';
import styled, { css } from 'styled-components/native';
import themes from '../../global/themes/themes';
import { Touchable } from '../touchableOpacity';

export const Container = styled(Touchable).attrs({
  activeOpacity: themes.activeOpacity,
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayscale.white};
    border-radius: ${theme.border.radius.pill}px;
    align-self: flex-start;
    padding: ${theme.spacing.xxs}px;
    elevation: 10;
  `}
`;

export const SVG = styled(SvgXml).attrs({
  fill: themes.colors.primary,
  width: themes.icon.size.sm,
  height: themes.icon.size.sm,
})`
  ${() => css``}
`;
