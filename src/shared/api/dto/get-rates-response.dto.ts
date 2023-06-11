export interface GetRatesResponseDto {
  motd: Motd;
  success: boolean;
  base: string;
  date: string;
  rates: Rates;
}

export type Rates = { [key: string]: number };

interface Motd {
  msg: string;
  url: string;
}
