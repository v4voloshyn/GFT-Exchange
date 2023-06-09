import { FC } from 'react';

import { Input } from '../components/input';
import { Select } from '../components/select';

import './exchange-form.scss';

interface ExchangeFormProps {}

export const ExchangeForm: FC<ExchangeFormProps> = () => {
  return (
    <div className="form-wrapper">
      <form className="exchange">
        <span className="exchange-date">June 9, 2023</span>
        <h1 className="exchange-title">Currency</h1>
        <div className="exchange-from">
          <Input
            className="input number-from"
            // value="99"
            type="number"
            placeholder="Enter amount"
          />
          <Select className="select select-from" optionsList={[]} />
          <button className="switch" type="button">
            ⇅
          </button>
        </div>

        <div className="exchange-to">
          <Input className="input number-to" type="number" placeholder="Result amount" />
          <Select className="select select-to" optionsList={[]} />
        </div>
      </form>
    </div>
  );
};
