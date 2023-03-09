import { useState } from 'react';

export const useCheckbox = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handlePressCheckbox = () => {
    setIsSelected(!isSelected);
  };

  return { isSelected, handlePressCheckbox };
};
