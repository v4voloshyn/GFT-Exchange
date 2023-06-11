import { FC } from 'react';

import { RatesList } from '../../modules/rates-form/rates-form.module';

import './rates.scss';

export const Rates: FC = () => {
  return (
    <div className="rates-container">
      <RatesList />
    </div>
  );
};
