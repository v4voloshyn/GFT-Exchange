import { AxiosError } from 'axios';

export const handleError = (error: unknown) => {
  if (error instanceof Error || error instanceof AxiosError) {
    throw new Error(error.message);
  } else {
    throw new Error('Bad request. Try again later');
  }
};
