import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';

import * as S from './styles';

interface TouchableProps extends TouchableOpacityProps {
  children?: React.ReactNode[] | React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Touchable = ({ children, style, ...args }: TouchableProps) => {
  return (
    <S.Container
      style={style}
      hitSlop={{
        bottom: 8,
        top: 8,
        right: 8,
        left: 8,
      }}
      {...args}>
      {children}
    </S.Container>
  );
};

export { Touchable };
