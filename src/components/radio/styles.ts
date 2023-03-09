import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { Touchable } from '../touchableOpacity';

export const Container = styled.View`
  ${({}) => css`
    flex-direction: row;
    justify-content: space-evenly;
  `}
`;

export const ContainerRadio = styled(Touchable)`
  ${({}) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

type FillProps = {
  isSelected?: boolean;
};

const FillModifier = {
  isSelected: (theme: DefaultTheme, isSelected?: boolean) => {
    return css`
      background-color: ${isSelected
        ? theme.colors.primary
        : theme.colors.grayscale.white};
    `;
  },
};

export const Fill = styled.View<FillProps>`
  ${({ theme, isSelected }) => css`
    background-color: red;
    flex: 1;
    border-radius: ${theme.border.radius.pill}px;
    margin: 3px;

    ${FillModifier.isSelected(theme, isSelected)};
  `}
`;

export const ContainerCircle = styled.View`
  ${({ theme }) => css`
    width: 16px;
    height: 16px;
    border-radius: ${theme.border.radius.pill}px;
    background-color: ${theme.colors.grayscale.white};
    border-width: 1px;
    border-color: ${theme.colors.primary};
    margin-right: ${theme.spacing.xs}px;
  `}
`;
