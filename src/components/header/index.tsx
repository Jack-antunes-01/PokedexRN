import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Icons } from '@assets/icons';

import * as S from './styles';

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
}

const Header = ({ style }: HeaderProps) => {
  return (
    <S.Header style={style}>
      <S.SVG xml={Icons.pokeball} />
      <S.Title>Pokédex</S.Title>
    </S.Header>
  );
};

export { Header };
