import { Touchable } from '@components/touchableOpacity';
import themes from '@themes/themes';
import { SvgXml } from 'react-native-svg';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({}) => css``}
`;

export const ContainerHeader = styled.View`
  ${() => css`
    height: 76px;
    background-color: transparent;
  `}
`;

export const ContainerRow = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const SVG = styled(SvgXml).attrs({
  fill: themes.colors.grayscale.white,
  width: themes.icon.size.md,
  height: themes.icon.size.md,
})`
  ${() => css``}
`;

export const ContainerSVG = styled(Touchable)`
  ${({ theme }) =>
    css`
      margin-right: ${theme.spacing.xs}px;
      margin-left: ${theme.spacing.md}px;
      margin-top: ${theme.spacing.md}px;
      margin-bottom: ${theme.spacing.md}px;
    `}
`;

export const ContainerTitle = styled.View`
  ${() => css`
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.fontSize.md}px;
    color: ${theme.colors.grayscale.white};
    font-weight: 700;
  `}
`;

export const Identificator = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.fontSize.sm}px;
    color: ${theme.colors.grayscale.white};
    font-weight: 700;
    margin-right: ${theme.spacing.md}px;
  `}
`;
