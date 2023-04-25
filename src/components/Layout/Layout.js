import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import BlueStain from '../../icons/blueStain/blueStain';
import PinkStain from '../../icons/pinkStain/pinkStain';
import MainPhoto from '../../icons/mainPhotoComp/mainPhotoComp';
import { Toaster } from 'react-hot-toast';

import s from '../../styles/base.module.css';

export const Layout = () => {
  return (
    <div className={s.container}>
      <BlueStain />
      <PinkStain />
      <MainPhoto />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster />
    </div>
  );
};
