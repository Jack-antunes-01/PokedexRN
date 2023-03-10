import { createNavigationContainerRef } from '@react-navigation/native';
import { Route } from '@enum/route';

import { RootStackParamList } from './types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export interface NavigateProps {
  routeName: Route;
  params?: Object;
}

export const navigate = ({ routeName, params }: NavigateProps) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(
      routeName as never,
      params ? (params as never) : ({} as never),
    );
  }
};

export const goBack = () => {
  navigationRef && navigationRef.current && navigationRef.current.goBack();
};
