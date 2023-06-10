import axios from 'axios';

import { serializeSymbols } from '../utils/serializeSymbols';

import { ConvertCurrencyRequestDto } from './dto/convert-currency-request.dto';
import { ConvertCurrencyResponseDto } from './dto/convert-currency-response.dto';
import { SymbolsResponseDto } from './dto/symbols-response.dto';

const BASE_URL = 'https://api.exchangerate.host';
const ENDPOINT = {
  LATEST: '/latest',
  CONVERT: '/convert', // ?from=USD&to=EUR
  SYMBOLS: '/symbols',
};

const api = axios.create({
  baseURL: BASE_URL,
});

export const getSymbols = async () => {
  const response = await api.get<SymbolsResponseDto>(ENDPOINT.SYMBOLS);
  const serializedData = serializeSymbols(response.data);
  return serializedData;
};

export const getLatestRates = async () => {
  const response = await api.get(ENDPOINT.LATEST);
  return response.data;
};

export const convertCurrencyAmount = async ({ from, to, amount }: ConvertCurrencyRequestDto) => {
  const response = await api.get<ConvertCurrencyResponseDto>(
    `${ENDPOINT.CONVERT}?from=${from}&to=${to}&amount=${amount ?? 1}`
  );
  const data = response.data;

  return data;
};
