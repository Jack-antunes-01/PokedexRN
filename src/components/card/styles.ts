import { Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled, { css } from 'styled-components/native';

import { Touchable } from '@components/touchableOpacity';

const { width } = Dimensions.get('screen');

const CONSTANTS = {
  cardSize: (width - 72) / 3,
};

export const Container = styled(Touchable)`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayscale.white};
    width: ${CONSTANTS.cardSize}px;
    height: ${CONSTANTS.cardSize}px;
    border-radius: 8px;
    margin-bottom: 16px;
    elevation: 4;
  `}
`;

export const Header = styled.View`
  ${() => css`
    padding: 4px 8px;
  `}
`;

export const PokemonNumber = styled.Text`
  ${({ theme }) => css`
    text-align: right;
    font-size: ${theme.font.fontSize.xs}px;
  `}
`;

export const ContainerTitle = styled.View`
  ${({ theme }) => css`
    height: 46px;
    width: ${CONSTANTS.cardSize}px;
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    background-color: ${theme.colors.grayscale.background};
    justify-content: flex-end;
    align-items: center;
    padding: 8px;
  `}
`;

export const SVGContainer = styled.View`
  ${() => css`
    align-items: center;
    z-index: 1;
  `}
`;

export const SVG = styled(SvgXml)`
  ${({}) => css``}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.fontSize.xs}px;
  `}
`;
