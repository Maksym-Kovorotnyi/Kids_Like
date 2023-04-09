import UserInfo from 'components/UserInfo/UserInfo';
import UserScore from 'components/UserScore/UserScore';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutUser } from 'redux/Auth/AuthOperations';

const UserNav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <UserScore />
      <NavLink to="/main">Main</NavLink>
      <NavLink to="/planning">Planning</NavLink>
      <NavLink to="/award">Award</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <UserInfo />
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Log Out
      </button>
    </>
  );
};

export default UserNav;
