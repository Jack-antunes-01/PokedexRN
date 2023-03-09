import React from 'react';

import * as S from './styles';

type TagProps = {
  title: string;
};

export const Tag = ({ title }: TagProps) => {
  return (
    <S.Container title={title}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
