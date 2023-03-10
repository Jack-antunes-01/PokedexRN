import { Route } from '@enum/route';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@navigator/types';

export const animations = [
  'bounce',
  'flash',
  'pulse',
  'rotate',
  'rubberBand',
  'shake',
  'swing',
  'tada',
  'wobble',
  'bounceIn',
  'bounceInDown',
  'bounceInUp',
  'bounceInLeft',
  'bounceInRight',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'flipInX',
  'flipInY',
  'slideInDown',
  'slideInUp',
  'slideInLeft',
  'slideInRight',
  'zoomIn',
  'zoomInDown',
  'zoomInUp',
  'zoomInLeft',
  'zoomInRight',
];

export const useDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, Route.Details>>();

  const pokemonInfo = route.params.pokemonInfo;

  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;

  const randomAnimation = animations[random(0, animations.length - 1)];

  return { pokemonInfo, randomAnimation };
};
