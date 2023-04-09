import { Container } from 'components/App.styled';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderBox, HeaderWrapper } from './Header.styled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import UserScore from 'components/UserScore/UserScore';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <HeaderBox>
        <Container>
          <HeaderWrapper>
            <Logo />
            {isLoggedIn && <UserScore />}
            <BurgerMenu />
            <Navigation />
          </HeaderWrapper>
        </Container>
      </HeaderBox>

      <Outlet />
    </>
  );
}

export default Header;
