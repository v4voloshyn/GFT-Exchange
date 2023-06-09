import { FC, HTMLAttributes, ComponentProps } from 'react';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  optionsList: string[];
  onChange?: ComponentProps<'select'>['onChange'];
}

export const Select: FC<SelectProps> = ({ optionsList, onChange, ...rest }) => {
  return (
    <select defaultValue="UAH" onChange={onChange} {...rest}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="UAH">UAH</option>
    </select>
  );
};
