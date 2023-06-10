import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { convertCurrencyAmount } from '../../../shared/api/api';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { Input } from '../components/input';
import { Select } from '../components/select';
import { useCurrencyWithParams } from '../hooks/useCurrencyWithParams';
import { useSymbols } from '../hooks/useSymbols';

import 'react-toastify/dist/ReactToastify.css';

import './exchange-form.scss';

export const ExchangeForm: FC = () => {
  const [resultValue, setResultValue] = useState('');
  const {
    amount,
    baseCurrency,
    targetCurrency,
    handleAmountChange,
    handleChangeBaseCurrency,
    handleChangeTargetCurrency,
    handleSwapCurrencies,
  } = useCurrencyWithParams();

  const { currenciesSymbolsList } = useSymbols();
  const debouncedAmount = useDebounce(amount);

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
        const result = data?.result;
        const formattedResult = result?.toFixed(2).replace(/\.?0+$/, '');
        setResultValue(String(formattedResult));
      })
      .catch((e) => {
        toast(e.message);
        setResultValue('');
      });
  }, [baseCurrency, targetCurrency, debouncedAmount]);

  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="form-top">
          <span className="exchange-date">June 9, 2023</span>
          <h1 className="exchange-title">
            Currency <span>⏷</span>
          </h1>
          <div className="exchange-from">
            <Input
              className="input number-from"
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
              className="select select-from"
              optionsList={currenciesSymbolsList}
              value={baseCurrency}
              onChange={handleChangeBaseCurrency}
              name="select-from"
            />
          </div>
        </div>
        <div className="form-bottom">
          <div className="exchange-to">
            <button className="swap" onClick={handleSwapCurrencies} type="button">
              ⇅
            </button>
            <Input
              className="input number-to"
              type="number"
              placeholder="Result amount"
              value={resultValue}
              title={resultValue}
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
        </div>
      </form>
    </div>
  );
};
