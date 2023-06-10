import { forwardRef, ComponentProps, HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  onChange?: ComponentProps<'input'>['onChange'];
  type?: ComponentProps<'input'>['type'];
  value?: ComponentProps<'input'>['value'];
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', onChange = () => {}, value = '', ...rest }, ref) => {
    return <input type={type} onChange={onChange} value={value} ref={ref} {...rest} />;
  }
);

Input.displayName = 'InputWithRef';
