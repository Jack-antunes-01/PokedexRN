import styled, { css } from 'styled-components/native';

import { Header } from '../../components/header';
import { Search } from '../../components/search';
import themes from '../../global/themes/themes';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.primary};
  `}
`;

export const StyledHeader = styled(Header)`
  ${({ theme }) => css`
    padding: ${theme.spacing.md}px ${theme.spacing.md}px 0 ${theme.spacing.md}px;
  `}
`;

export const SearchContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    padding: 0 ${theme.spacing.md}px;
    margin-bottom: ${theme.spacing.xg}px;
  `}
`;

export const StyledSearch = styled(Search)`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.xs}px;
  `}
`;

export const ContainerFlatList = styled.View`
  ${({ theme }) => css`
    border-width: 4px;
    border-color: ${theme.colors.grayscale.white};
    border-radius: ${theme.border.radius.xs};
    margin-right: ${theme.spacing.xxxs}px;
    margin-left: ${theme.spacing.xxxs}px;
    background-color: ${theme.colors.grayscale.white};
    flex: 1;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    height: 4px;
    background-color: ${theme.colors.primary};
  `}
`;

export const List = styled.FlatList.attrs({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    backgroundColor: themes.colors.grayscale.white,
    paddingTop: themes.spacing.xg,
    paddingHorizontal: themes.spacing.sm,
  },
})``;
