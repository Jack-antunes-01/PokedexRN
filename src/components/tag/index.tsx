import React from 'react';

import * as S from './styles';

type TagProps = {
  title: string;
  isFirstItem: boolean;
};

export const Tag = ({ title, isFirstItem }: TagProps) => {
  return (
    <S.Container title={title} isFirstItem={isFirstItem}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
