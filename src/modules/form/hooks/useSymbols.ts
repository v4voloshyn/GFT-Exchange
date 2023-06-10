import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getSymbols } from '../../../shared/api/api';

export const useSymbols = () => {
  const [currenciesSymbolsList, setCurrenciesSymbolsList] = useState<string[]>([]);

  useEffect(() => {
    getSymbols()
      .then((currenciesListData) => setCurrenciesSymbolsList(currenciesListData))
      .catch((error) => {
        setCurrenciesSymbolsList(['USD', 'EUR']);
        toast(error.message);
      });
  }, []);

  return currenciesSymbolsList;
};
