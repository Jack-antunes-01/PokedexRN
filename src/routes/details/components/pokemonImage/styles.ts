import { SvgXml } from 'react-native-svg';
import styled, { css } from 'styled-components/native';

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
