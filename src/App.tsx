import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import { Layout } from './shared/components/layout/layout';

export const App: FC = () => {
  return (
    <>
      <Layout />
      <ToastContainer position="bottom-right" />
    </>
  );
};
