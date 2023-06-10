/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

export const useDebounce = (value: any, delayMs = 200) => {
  const [debouncedValue, setDebouncedValue] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => clearTimeout(timerId);
  }, [value, delayMs]);

  return debouncedValue;
};
