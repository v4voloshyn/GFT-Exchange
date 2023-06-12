import { FC } from 'react';

import { RatesForm } from '../../modules/rates-form/rates-form.module';

import './rates.scss';

export const Rates: FC = () => {
  return (
    <div className="rates-container">
      <RatesForm />
    </div>
  );
};
