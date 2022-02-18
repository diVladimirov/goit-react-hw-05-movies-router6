import React from 'react';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';
import { NavStyled, NavLinkStyled } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <header>
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </NavStyled>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
