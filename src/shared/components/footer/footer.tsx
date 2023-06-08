import { FC } from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="rights">{currentYear}. All Rights Reserved :)</div>
      <div className="author">
        Made by:{' '}
        <Link
          to="https://github.com/v4voloshyn"
          className="
        author-link"
        >
          Pavlo Voloshyn
        </Link>
      </div>
    </div>
  );
};
