import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const INITIAL_CURRENCIES = {
  BASE: 'USD',
  TARGET: 'EUR',
};

export const useCurrencyWithParams = () => {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState(INITIAL_CURRENCIES.BASE);
  const [targetCurrency, setTargetCurrency] = useState(INITIAL_CURRENCIES.TARGET);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    const { from, to, amount: paramAmount } = params;
    if (from) {
      setBaseCurrency(from);
    }
    if (to) {
      setTargetCurrency(to);
    }
    if (paramAmount) {
      const validAmountNumbers = paramAmount.replace(/[^0-9.]/g, '');
      setAmount(validAmountNumbers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    const validAmountNumbers = newAmount.replace(/[^0-9.]/g, '');
    if (validAmountNumbers.length === 0) {
      setAmount('');
      setSearchParams({ ...params, amount: '' });
      return;
    }
    setAmount(validAmountNumbers);
    setSearchParams({ ...params, amount: validAmountNumbers });
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

  return {
    amount,
    baseCurrency,
    targetCurrency,
    handleAmountChange,
    handleChangeBaseCurrency,
    handleChangeTargetCurrency,
    handleSwapCurrencies,
  };
};
