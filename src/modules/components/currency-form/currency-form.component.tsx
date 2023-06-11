import { FC } from 'react';

import { SortIcon } from '../../../shared/components/icons/sort-icon';
import { currentDate } from '../../../shared/utils/getCurrentDate';
import { Input } from '../input/input.component';
import { Select } from '../select/select.component';

import './currency-form.scss';

interface CurrencyFormProps {
  amount: string;
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  baseCurrency: string;
  handleChangeBaseCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currenciesSymbolsList: string[];
  children?: React.ReactNode;
}

export const CurrencyForm: FC<CurrencyFormProps> = ({
  children,
  amount,
  handleAmountChange,
  baseCurrency,
  handleChangeBaseCurrency,
  currenciesSymbolsList,
}) => {
  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="form-top">
          <div className="currency-header">
            <span className="currency-date">{currentDate}</span>
            <span className="currency-sort">
              <SortIcon className="sort-icon" />
            </span>
          </div>
          <h1 className="currency-title">
            Currency <span>⏷</span>
          </h1>
          <div className="currency-from">
            <Input
              className="number-from"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={handleAmountChange}
              step="1"
              min="0"
              title={amount}
            />
            <Select
              key={baseCurrency}
              className="select-from"
              optionsList={currenciesSymbolsList}
              value={baseCurrency}
              onChange={handleChangeBaseCurrency}
              name="select-from"
            />
          </div>
        </div>
        <div className="form-bottom">{children}</div>
      </form>
    </div>
  );
};
