import { SvgXml } from 'react-native-svg';
import styled, { css } from 'styled-components/native';
import themes from '../../global/themes/themes';
import { Touchable } from '../touchableOpacity';

export const Container = styled(Touchable)`
  ${({}) =>
    css`
      flex-direction: row;
      align-items: center;
      align-self: flex-start;
    `}
`;

type CheckboxSquareProps = {
  isSelected: boolean;
};

const CheckboxSquareModifier = {
  isSelected: (isSelected: boolean) => {
    if (isSelected) {
      return css`
        background-color: ${themes.colors.primary};
      `;
    }
  },
};

export const CheckboxSquare = styled.View<CheckboxSquareProps>`
  ${({ theme, isSelected }) => css`
    background-color: ${theme.colors.grayscale.white};
    width: 16px;
    height: 16px;
    border-width: 1px;
    border-color: ${theme.colors.primary};
    margin-right: ${theme.spacing.xs}px;
    align-items: center;
    justify-content: center;

    ${CheckboxSquareModifier.isSelected(isSelected)}
  `}
`;

export const SVG = styled(SvgXml).attrs({
  fill: themes.colors.grayscale.white,
  width: 12,
  height: 12,
})`
  ${() => css``}
`;
