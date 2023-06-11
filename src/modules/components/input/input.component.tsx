import { forwardRef, ComponentProps, HTMLAttributes } from 'react';

import './input.scss';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  onChange?: ComponentProps<'input'>['onChange'];
  type?: ComponentProps<'input'>['type'];
  value?: ComponentProps<'input'>['value'];
  step?: ComponentProps<'input'>['step'];
  min?: ComponentProps<'input'>['min'];
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', onChange = () => {}, value = '', ...rest }, ref) => {
    const { className, ...otherProps } = rest;
    const classNames = className ? `input ${className}` : 'input';

    return (
      <input
        className={classNames}
        type={type}
        onChange={onChange}
        value={value}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

Input.displayName = 'InputWithRef';
