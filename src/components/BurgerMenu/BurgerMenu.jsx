import React from 'react';
import { ReactComponent as BurgerMenuIcon } from '../../images/menu.svg';
import { BurgerButton } from './BurgerMenu.styled';

const BurgerMenu = ({ onClick }) => {
  return (
    <BurgerButton type="button" onClick={onClick}>
      <BurgerMenuIcon />
    </BurgerButton>
  );
};

export default BurgerMenu;
