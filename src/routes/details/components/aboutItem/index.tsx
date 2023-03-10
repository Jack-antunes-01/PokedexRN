import React from 'react';

import * as S from './styles';

type AboutItemProps = {
  isFirstItem: boolean;
  icon?: string;
  value: string | number;
  description: string;
};

const AboutItem = ({
  isFirstItem,
  icon,
  value,
  description,
}: AboutItemProps) => {
  return (
    <S.ContainerItem isFirstItem={isFirstItem}>
      <S.ContainerRow>
        {icon && <S.SVG xml={icon} />}
        <S.Description>{value}</S.Description>
      </S.ContainerRow>
      <S.SubTitle>{description}</S.SubTitle>
    </S.ContainerItem>
  );
};

export { AboutItem };
