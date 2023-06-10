import { FC, HTMLAttributes, ComponentProps } from 'react';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  optionsList: string[];
  name: ComponentProps<'select'>['name'];
  value: ComponentProps<'select'>['value'];
  onChange?: ComponentProps<'select'>['onChange'];
}

export const Select: FC<SelectProps> = ({
  name,
  value,
  optionsList,
  onChange = () => {},
  ...rest
}) => {
  return (
    <select name={name} onChange={onChange} value={value} {...rest}>
      {optionsList.map((symbolName) => (
        <option key={symbolName} value={symbolName}>
          {symbolName}
        </option>
      ))}
    </select>
  );
};
