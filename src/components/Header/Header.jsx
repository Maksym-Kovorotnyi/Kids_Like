import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Logo />
      <Navigation />
      <Outlet />
    </>
  );
}

export default Layout;
