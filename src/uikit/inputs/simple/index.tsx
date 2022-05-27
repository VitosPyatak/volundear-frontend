import { ChangeEventHandler, FC, KeyboardEventHandler, useState } from 'react';
import { SimpleInputProps } from './types';
import classes from './styles.module.scss';
import { keyboardKeys } from 'configs/keys';

export const SimpleInput: FC<SimpleInputProps> = ({ placeholder, submitInput, onChange }) => {
  const [input, setInput] = useState<string>('');

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
    onChange && onChange(event.target.value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === keyboardKeys.enter) {
      submitInput && submitInput(input);
    }
  };

  return (
    <input onKeyDown={onKeyDown} placeholder={placeholder} value={input} className={classes.input} onChange={onInputChange} />
  );
};
