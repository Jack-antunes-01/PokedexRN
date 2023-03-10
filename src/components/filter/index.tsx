import React from 'react';
import { Icons } from '@assets/icons';

import * as S from './styles';

interface FilterProps {}

const Filter = ({}: FilterProps) => {
  return (
    <S.Container>
      <S.SVG xml={Icons.sort} />
    </S.Container>
  );
};

export { Filter };
