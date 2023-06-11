import { FC } from 'react';

import { formatWithFixed } from '../../../../../shared/utils/format-number';

import './list-item.scss';

interface ListItemProps {
  symbol: string;
  rate: number;
  flagImgSrc: string;
}

export const ListItem: FC<ListItemProps> = ({ symbol, rate, flagImgSrc }) => {
  const NUMBERS_AFTER_COMMA = 3;

  return (
    <li key={symbol} className="list-item">
      <div className="currency">
        <img src={flagImgSrc} alt={`${symbol}`} className="currency-img" loading="lazy" />
        <span className="currency-code">{symbol}</span>
      </div>
      <div className="currency-rate">{formatWithFixed(rate, NUMBERS_AFTER_COMMA)}</div>
    </li>
  );
};
