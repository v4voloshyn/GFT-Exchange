export interface ConvertCurrencyResponseDto {
  motd: Motd;
  success: boolean;
  query: Query;
  info: Info;
  historical: boolean;
  date: string;
  result: number;
}

interface Info {
  rate: number;
}

interface Query {
  from: string;
  to: string;
  amount: number;
}

interface Motd {
  msg: string;
  url: string;
}
