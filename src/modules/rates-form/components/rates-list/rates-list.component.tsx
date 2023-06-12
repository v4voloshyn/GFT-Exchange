import { FC } from 'react';

import { Rates } from '../../../../shared/api/dto/get-rates-response.dto';
import { ListItem } from '../list-item/list-item.component';

import './rates-list.scss';

interface RatesListProps {
  ratesList: Rates;
  flagList: Record<string, string>;
}

export const RatesList: FC<RatesListProps> = ({ ratesList, flagList }) => {
  return (
    <div className="rates">
      <ul className="rates-list">
        {Object.entries(ratesList).map(([symbol, rate]) => (
          <ListItem key={symbol} rate={rate} symbol={symbol} flagImgSrc={flagList[symbol]} />
        ))}
        {Object.keys(ratesList).length === 0 ? (
          <li className="item-empty">Please select a currency and enter the amount</li>
        ) : null}
      </ul>
    </div>
  );
};
