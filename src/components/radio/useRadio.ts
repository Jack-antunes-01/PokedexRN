import { useState } from 'react';

export const useRadio = () => {
  const [selectedRadio, setSelectedRadio] = useState<boolean | undefined>(
    undefined,
  );

  const handleSelect = (value: boolean) => {
    setSelectedRadio(value);
  };

  return {
    selectedRadio,
    handleSelect,
  };
};
