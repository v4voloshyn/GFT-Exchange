import { FC, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { getLatestRates } from '../../../shared/api/api';
import { Rates } from '../../../shared/api/dto/get-rates-response.dto';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { currentDate } from '../../../shared/utils/getCurrentDate';
import { Input } from '../components/input';
import { Select } from '../components/select';
import { useCurrencyWithParams } from '../hooks/useCurrencyWithParams';
import { useSymbols } from '../hooks/useSymbols';

import { ListItem } from './components/list-item/list-item';

import './rates-list.scss';

export const RatesList: FC = () => {
  const [ratesList, setRatesList] = useState<Rates>({});

  const { amount, handleAmountChange, baseCurrency, handleChangeBaseCurrency } =
    useCurrencyWithParams();
  const currenciesSymbolsList = useSymbols();
  const debouncedAmount = useDebounce(amount);

  const flagList = useMemo(() => {
    return currenciesSymbolsList.reduce((acc, currency) => {
      return {
        ...acc,
        [currency]: `https://wise.com/public-resources/assets/flags/rectangle/${currency.toLowerCase()}.png`,
      };
    }, {} as Record<string, string>);
  }, [currenciesSymbolsList]);

  useEffect(() => {
    if (!baseCurrency || !debouncedAmount || Number(debouncedAmount) <= 0) {
      setRatesList({});
      return;
    }

    getLatestRates({ base: baseCurrency, amount: debouncedAmount })
      .then((data) => setRatesList(data))
      .catch((error) => toast(error.message));
  }, [baseCurrency, debouncedAmount]);

  return (
    <div className="form-wrapper rates-wrapper">
      <form className="form">
        <div className="form-top">
          <span className="exchange-date">{currentDate}</span>
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
      </form>
      <div className="rates">
        <ul className="rates-list">
          {Object.entries(ratesList).map(([symbol, rate]) => (
            <ListItem key={symbol} rate={rate} symbol={symbol} flagImgSrc={flagList[symbol]} />
          ))}
          {Object.keys(ratesList).length === 0 ? (
            <li>Please select a currency and enter the amount</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};
