import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../footer/footer.component';
import { Header } from '../header/header.component';

import './layout.scss';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
