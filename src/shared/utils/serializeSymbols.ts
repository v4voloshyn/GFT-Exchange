import { SymbolsResponseDto } from '../api/dto/symbols-response.dto';

export const serializeSymbols = (symbols: SymbolsResponseDto): string[] => {
  return Object.keys(symbols.symbols);
};
