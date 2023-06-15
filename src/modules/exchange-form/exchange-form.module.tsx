import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { convertCurrencyAmount } from '../../shared/api/api';
import { Input } from '../../shared/components/ui/input/input.component';
import { useDebounce } from '../../shared/hooks/useDebounce';
import { formatWithFixed } from '../../shared/utils/formatNumber';
import { CurrencyForm } from '../../shared/components/currency-form/currency-form.component';
import { Select } from '../../shared/components/ui/select/select.component';
import { useCurrencyWithParams } from '../hooks/useCurrencyWithParams';
import { useSymbolsList } from '../hooks/useSymbolsList';

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

  const currenciesSymbolsList = useSymbolsList();
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
        const formattedResult = formatWithFixed(result);
        setResultValue(String(formattedResult));
      })
      .catch((e) => {
        toast(e.message);
        setResultValue('');
      });
  }, [baseCurrency, targetCurrency, debouncedAmount]);

  return (
    <CurrencyForm
      amount={amount}
      handleAmountChange={handleAmountChange}
      baseCurrency={baseCurrency}
      handleChangeBaseCurrency={handleChangeBaseCurrency}
      currenciesSymbolsList={currenciesSymbolsList}
    >
      <div className="exchange-to">
        <button className="swap" onClick={handleSwapCurrencies} type="button">
          ⇅
        </button>
        <Input
          className="number-to"
          type="number"
          placeholder="Result amount"
          value={resultValue}
          title={resultValue}
        />
        <Select
          key={targetCurrency}
          className="select-to"
          optionsList={currenciesSymbolsList}
          value={targetCurrency}
          onChange={handleChangeTargetCurrency}
          name="select-to"
        />
      </div>
    </CurrencyForm>
  );
};
