import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Icons } from '@assets/icons';

import * as S from './styles';

interface SearchProps {
  style?: StyleProp<ViewStyle>;
  text: string;
  onChangeText: (value: string) => void;
}

const Search = ({ style, text, onChangeText }: SearchProps) => {
  return (
    <S.Container style={style}>
      <S.SVG xml={Icons.search} />
      <S.SearchInput
        value={text}
        placeholder="Search"
        onChangeText={onChangeText}
      />
      {text && (
        <Animatable.View animation="fadeIn" iterationCount={1} useNativeDriver>
          <S.ContainerSVGClose onPress={() => onChangeText('')}>
            <S.SVGClose xml={Icons.close} width={26} height={26} />
          </S.ContainerSVGClose>
        </Animatable.View>
      )}
    </S.Container>
  );
};

export { Search };
