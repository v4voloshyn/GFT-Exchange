import { FC } from 'react';

export const SortIcon: FC<ReactTagProps<'svg'>> = (props) => (
  <svg
    className="sort-icon"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="SortIcon"
    {...props}
  >
    <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
  </svg>
);
