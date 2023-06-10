import axios from 'axios';

import { serializeSymbols } from '../utils/serializeSymbols';

import { ConvertCurrencyRequestDto } from './dto/convert-currency-request.dto';
import { ConvertCurrencyResponseDto } from './dto/convert-currency-response.dto';
import { SymbolsResponseDto } from './dto/symbols-response.dto';
import { handleError } from './error-handler';

const BASE_URL = 'https://api.exchangerate.host';
const ENDPOINT = {
  LATEST: '/latest',
  CONVERT: '/convert',
  SYMBOLS: '/symbols',
};

const api = axios.create({
  baseURL: BASE_URL,
});

export const getSymbols = async () => {
  try {
    const response = await api.get<SymbolsResponseDto>(ENDPOINT.SYMBOLS);
    const serializedData = serializeSymbols(response.data);

    return serializedData;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getLatestRates = async () => {
  try {
    const response = await api.get(ENDPOINT.LATEST);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const convertCurrencyAmount = async ({ from, to, amount }: ConvertCurrencyRequestDto) => {
  try {
    const response = await api.get<ConvertCurrencyResponseDto>(
      `${ENDPOINT.CONVERT}?from=${from}&to=${to}&amount=${amount}`
    );

    if (response.data.result === null) {
      throw new Error('Something went wrong. Check your input data');
    }

    const data = response.data;
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
