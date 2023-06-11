import { FC } from 'react';

import { ExchangeForm } from '../../modules/exchange-form/exchange-form.module';

import './main.scss';

export const Main: FC = () => {
  return (
    <div className="main-container">
      <ExchangeForm />
    </div>
  );
};
