import { FC } from 'react';

import { ExchangeForm } from '../../modules/form/exchange-form/exchange-form';

import './main.scss';

export const Main: FC = () => {
  return (
    <div className="main-container">
      <ExchangeForm />
    </div>
  );
};
