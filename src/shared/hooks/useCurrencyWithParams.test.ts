import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { vi } from 'vitest';

import { useCurrencyWithParams } from './useCurrencyWithParams';

const INITIAL_CURRENCIES_MOCK = {
  BASE: 'USD',
  TARGET: 'EUR',
};

vi.mock('react-router-dom', () => ({
  useSearchParams: vi.fn().mockReturnValue([[{}], vi.fn()]),
}));

describe('useCurrencyWithParams', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should set the initial state', () => {
    const { result } = renderHook(() => useCurrencyWithParams());
    const { amount, baseCurrency, targetCurrency } = result.current;

    expect(amount).toBe('');
    expect(baseCurrency).toBe(INITIAL_CURRENCIES_MOCK.BASE);
    expect(targetCurrency).toBe(INITIAL_CURRENCIES_MOCK.TARGET);
  });

  it('should update amount on handleAmountChange', async () => {
    const { result } = renderHook(() => useCurrencyWithParams());
    const event = { target: { value: '20' } } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.handleAmountChange(event);
    });

    expect(result.current.amount).toBe('20');
    expect(result.current.baseCurrency).toBe(INITIAL_CURRENCIES_MOCK.BASE);
    expect(result.current.targetCurrency).toBe(INITIAL_CURRENCIES_MOCK.TARGET);
  });

  it('should update base currency on handleChangeBaseCurrency', async () => {
    const NEW_BASE_CURRENCY = 'PLN';
    const { result } = renderHook(() => useCurrencyWithParams());
    const event = { target: { value: NEW_BASE_CURRENCY } } as ChangeEvent<HTMLSelectElement>;

    act(() => {
      result.current.handleChangeBaseCurrency(event);
    });

    expect(result.current.baseCurrency).toBe(NEW_BASE_CURRENCY);
  });

  it('should update target currency on handleChangeTargetCurrency', async () => {
    const NEW_TARGET_CURRENCY = 'AED';
    const { result } = renderHook(() => useCurrencyWithParams());
    const event = { target: { value: NEW_TARGET_CURRENCY } } as ChangeEvent<HTMLSelectElement>;

    act(() => {
      result.current.handleChangeTargetCurrency(event);
    });

    expect(result.current.targetCurrency).toBe(NEW_TARGET_CURRENCY);
  });

  it('should swap currencies on handleSwapCurrencies', async () => {
    const { result } = renderHook(() => useCurrencyWithParams());
    const { baseCurrency, targetCurrency } = result.current;

    act(() => {
      result.current.handleSwapCurrencies();
    });

    expect(result.current.baseCurrency).toBe(targetCurrency);
    expect(result.current.targetCurrency).toBe(baseCurrency);
  });
});
