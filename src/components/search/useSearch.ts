import { useState } from 'react';

export const useSearch = () => {
  const [text, setText] = useState<string>('');

  const onValueChange = (value: string) => {
    setText(value);
  };

  const handleResetText = () => {
    setText('');
  };

  return { text, onValueChange, handleResetText };
};
