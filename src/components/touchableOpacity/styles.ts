import styled, { css } from 'styled-components/native';
import themes from '../../global/themes/themes';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: themes.activeOpacity,
})`
  ${({}) => css``}
`;
