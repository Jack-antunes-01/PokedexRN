import React from 'react';
import { Text } from 'react-native';

import { Icons } from '@assets/icons';

import * as S from './styles';
import { useCheckbox } from './useCheckbox';

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  const { handlePressCheckbox, isSelected } = useCheckbox();

  return (
    <S.Container onPress={handlePressCheckbox}>
      <S.CheckboxSquare isSelected={isSelected}>
        {isSelected && <S.SVG xml={Icons.checkmark} />}
      </S.CheckboxSquare>
      <Text>{label}</Text>
    </S.Container>
  );
};

export { Checkbox };
