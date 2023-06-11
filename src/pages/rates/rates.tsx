import { FC } from 'react';

import { RatesList } from '../../modules/form/rates-list/rates-list';

import './rates.scss';

export const Rates: FC = () => {
  return (
    <div className="rates-container">
      <RatesList />
    </div>
  );
};
