import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/Auth/AuthSelectors';

const UserInfo = () => {
  const userName = useSelector(selectUserName);
  return (
    <>
      <p>{userName}</p>
    </>
  );
};

export default UserInfo;
