import LogOut from 'components/LogOut/LogOut';
import UserInfo from 'components/UserInfo/UserInfo';
import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <>
      <NavLink to="/main">Main</NavLink>
      <NavLink to="/planning">Planning</NavLink>
      <NavLink to="/award">Award</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <UserInfo />
      <LogOut />
    </>
  );
};

export default UserNav;
