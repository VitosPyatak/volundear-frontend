import { ChangeEventHandler, FC, useState } from 'react';
import { SimpleInputProps } from './types';
import classes from './styles.module.scss';

export const SimpleInput: FC<SimpleInputProps> = ({ placeholder, submitInput, onChange }) => {
  const [input, setInput] = useState<string>('');

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
    onChange(event.target.value);
  };

  return <input placeholder={placeholder} value={input} className={classes.input} onChange={onInputChange} />;
};
