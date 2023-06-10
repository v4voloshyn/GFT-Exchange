import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { convertCurrencyAmount } from '../../../shared/api/api';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { Input } from '../components/input';
import { Select } from '../components/select';
import { useSymbols } from '../hooks/useSymbols';

import 'react-toastify/dist/ReactToastify.css';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const debouncedAmount = useDebounce(amount);
  const currenciesSymbolsList = useSymbols();

  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    if (debouncedAmount === '') {
      setResultValue('');
    }

    if (debouncedAmount === '0') {
      setResultValue('0');
    }

    if (!debouncedAmount || !baseCurrency || !targetCurrency || Number(debouncedAmount) <= 0) {
      return;
    }

    convertCurrencyAmount({ from: baseCurrency, to: targetCurrency, amount: debouncedAmount })
      .then((data) => {
        const result = data.result.toFixed(3);
        setResultValue(String(result));
      })
      .catch((e) => toast(e.message));
  }, [baseCurrency, targetCurrency, debouncedAmount]);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    setSearchParams({ ...params, amount: newAmount || '0' });
  };

  const handleChangeBaseCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    const newBaseCurrency = e.target.value;
    setBaseCurrency(newBaseCurrency);
    setSearchParams({ ...params, from: newBaseCurrency });
  };

  const handleChangeTargetCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTargetCurrency = e.target.value;
    setTargetCurrency(newTargetCurrency);
    setSearchParams({ ...params, to: newTargetCurrency });
  };

  const handleSwapCurrencies = () => {
    if (targetCurrency && baseCurrency) {
      setBaseCurrency(targetCurrency);
      setTargetCurrency(baseCurrency);
      setSearchParams({ ...params, from: `${targetCurrency}`, to: `${baseCurrency}` });
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
      <ToastContainer position="bottom-right" />
    </div>
  );
};
