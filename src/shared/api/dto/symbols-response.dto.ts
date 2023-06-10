export interface SymbolsResponseDto {
  motd: Motd;
  success: boolean;
  symbols: Symbols;
}

type Symbols = Record<string, SymbolDescription>;

interface SymbolDescription {
  description: string;
  code: string;
}

interface Motd {
  msg: string;
  url: string;
}
