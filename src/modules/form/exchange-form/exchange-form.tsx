import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSymbols } from '../../../shared/api/api';
import { serializeQueryParams } from '../../../shared/utils/serializeQueryParams';
import { Input } from '../components/input';
import { Select } from '../components/select';

import './exchange-form.scss';

const INITIAL_CURRENCIES = {
  BASE: 'USD',
  TARGET: 'EUR',
};

export const ExchangeForm: FC = () => {
  const [amount, setAmount] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [baseCurrency, setBaseCurrency] = useState(INITIAL_CURRENCIES.BASE);
  const [targetCurrency, setTargetCurrency] = useState(INITIAL_CURRENCIES.TARGET);
  const [currenciesSymbolsList, setCurrenciesSymbolsList] = useState<string[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getSymbols().then((currenciesListData) => setCurrenciesSymbolsList(currenciesListData));
  }, []);

  useEffect(() => {
    const params = serializeQueryParams(searchParams);
    const { from, to } = params;

    if (from && currenciesSymbolsList.includes(from)) {
      setBaseCurrency(from);
    }
    if (to && currenciesSymbolsList.includes(to)) {
      setTargetCurrency(to);
    }
  }, [currenciesSymbolsList, searchParams]);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
  };

  const handleChangeBaseCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    const newBaseCurrency = e.target.value;
    setBaseCurrency(newBaseCurrency);
  };

  const handleChangeTargetCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTargetCurrency = e.target.value;
    setTargetCurrency(newTargetCurrency);
  };

  const handleSwapCurrencies = () => {
    if (targetCurrency && baseCurrency) {
      setBaseCurrency(targetCurrency);
      setTargetCurrency(baseCurrency);
      setSearchParams({ from: `${targetCurrency}`, to: `${baseCurrency}` });
    }
  };

  return (
    <div className="form-wrapper">
      <form className="exchange">
        <span className="exchange-date">June 9, 2023</span>
        <h1 className="exchange-title">Currency</h1>
        <div className="exchange-from">
          <Input
            className="input number-from"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <Select
            key={baseCurrency}
            className="select select-from"
            optionsList={currenciesSymbolsList}
            value={baseCurrency}
            onChange={handleChangeBaseCurrency}
            name="select-from"
          />
          <button className="swap" onClick={handleSwapCurrencies} type="button">
            ⇅
          </button>
        </div>

        <div className="exchange-to">
          <Input
            className="input number-to"
            type="number"
            placeholder="Result amount"
            value={resultValue}
          />
          <Select
            key={targetCurrency}
            className="select select-to"
            optionsList={currenciesSymbolsList}
            value={targetCurrency}
            onChange={handleChangeTargetCurrency}
            name="select-to"
          />
        </div>
      </form>
    </div>
  );
};
