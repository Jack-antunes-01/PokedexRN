import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';
import { useRadio } from './useRadio';

type RadioItems = {
  label: string;
  value: boolean;
};

interface RadioProps {
  values: RadioItems[];
}

const Radio = ({ values }: RadioProps) => {
  const { handleSelect, selectedRadio } = useRadio();

  return (
    <S.Container>
      {values.map(item => (
        <S.ContainerRadio onPress={() => handleSelect(item.value)}>
          <S.ContainerCircle>
            <S.Fill isSelected={item.value === selectedRadio} />
          </S.ContainerCircle>
          <Text>{item.label}</Text>
        </S.ContainerRadio>
      ))}
    </S.Container>
  );
};

export { Radio };
