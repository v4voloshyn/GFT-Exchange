import { FC, HTMLAttributes, ComponentProps } from 'react';

import './select.scss';

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
  const { className, ...otherProps } = rest;
  const classNames = className ? `select ${className}` : 'select';

  return (
    <div className="custom-select">
      <select className={classNames} name={name} onChange={onChange} value={value} {...otherProps}>
        {optionsList.map((symbolName) => (
          <option key={symbolName} value={symbolName}>
            {symbolName}
          </option>
        ))}
      </select>
    </div>
  );
};
