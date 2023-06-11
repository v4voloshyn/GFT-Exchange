import { FC, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { getLatestRates } from '../../shared/api/api';
import { Rates } from '../../shared/api/dto/get-rates-response.dto';
import { useDebounce } from '../../shared/hooks/useDebounce';
import { CurrencyForm } from '../components/currency-form/currency-form.component';
import { useCurrencyWithParams } from '../hooks/useCurrencyWithParams';
import { useSymbolsList } from '../hooks/useSymbolsList';

import { ListItem } from './components/list-item/list-item.component';

import './rates-list.scss';

export const RatesList: FC = () => {
  const [ratesList, setRatesList] = useState<Rates>({});

  const { amount, handleAmountChange, baseCurrency, handleChangeBaseCurrency } =
    useCurrencyWithParams();
  const currenciesSymbolsList = useSymbolsList();
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
    <CurrencyForm
      amount={amount}
      handleAmountChange={handleAmountChange}
      baseCurrency={baseCurrency}
      handleChangeBaseCurrency={handleChangeBaseCurrency}
      currenciesSymbolsList={currenciesSymbolsList}
    >
      <div className="rates">
        <ul className="rates-list">
          {Object.entries(ratesList).map(([symbol, rate]) => (
            <ListItem key={symbol} rate={rate} symbol={symbol} flagImgSrc={flagList[symbol]} />
          ))}
          {Object.keys(ratesList).length === 0 ? (
            <li className="item-empty">Please select a currency and enter the amount</li>
          ) : null}
        </ul>
      </div>
    </CurrencyForm>
  );
};
