import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './header.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <div className="logo">
          <img src="/boosters.svg" height="100%" alt="GFS Logo" className="logo-img" />
          <span>GFT - Exchange</span>
        </div>
      </Link>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rates" className="nav-link">
              Rates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
