import React from 'react';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';
import { NavStyled, NavLinkStyled, Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <header>
          <NavStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NavStyled>
        </header>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
