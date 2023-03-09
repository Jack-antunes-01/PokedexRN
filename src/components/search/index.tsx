import React from 'react';
import * as Animatable from 'react-native-animatable';

import { Icons } from '../../assets/icons';
import { useSearch } from './useSearch';
import themes from '../../global/themes/themes';
import * as S from './styles';
import { StyleProp, ViewStyle } from 'react-native';

interface SearchProps {
  style?: StyleProp<ViewStyle>;
}

const Search = ({ style }: SearchProps) => {
  const { onValueChange, text, handleResetText } = useSearch();
  return (
    <S.Container style={style}>
      <S.SVG xml={Icons.search} />
      <S.SearchInput
        value={text}
        placeholder="Search"
        onChangeText={onValueChange}
      />
      {text && (
        <Animatable.View animation="fadeIn" iterationCount={1} useNativeDriver>
          <S.ContainerSVGClose onPress={handleResetText}>
            <S.SVGClose
              xml={Icons.close}
              width={26}
              height={26}
              fill={themes.colors.primary}
            />
          </S.ContainerSVGClose>
        </Animatable.View>
      )}
    </S.Container>
  );
};

export { Search };
