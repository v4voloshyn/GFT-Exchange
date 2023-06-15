import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getSymbols } from '../api/api';

export const useSymbolsList = () => {
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
