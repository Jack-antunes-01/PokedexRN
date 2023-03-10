import React from 'react';

import { Icons } from '@assets/icons';

import * as S from './styles';
import { goBack } from '@navigator/index';

interface NavigationHeaderProps {
  icon?: string;
  title: string;
  id: string;
}

const NavigationHeader = ({
  icon = Icons.arrow_back,
  title = 'Pokemon Name',
  id = '#999',
}: NavigationHeaderProps) => {
  return (
    <S.Container>
      <S.ContainerRow>
        <S.ContainerSVG onPress={goBack}>
          <S.SVG xml={icon} />
        </S.ContainerSVG>
        <S.ContainerTitle>
          <S.Title>{title}</S.Title>
          <S.Identificator>#{id}</S.Identificator>
        </S.ContainerTitle>
      </S.ContainerRow>
    </S.Container>
  );
};

export { NavigationHeader };
