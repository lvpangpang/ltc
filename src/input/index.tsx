import * as React from 'react';
import { useState } from 'react';

import './index.less';

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (val: any) => void;
}

function Input(props: InputProps) {
  const {
    className='',
    placeholder,
    type='text',
    value,
    disabled,
    maxLength,
    onChange=(val) => {}
  } = props;

  const [myValue, setMyValue] = useState(value);

  const myChange = (e:any) => {
    const value = e.target.value;
    setMyValue(value);
    onChange(value);
  }

  return (
    <div className={`zec-input ${className}`}>
      <input 
        className='input'
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        value={myValue}
        disabled={disabled}
        onChange={myChange}
      />
    </div>
  );
}

export default Input;