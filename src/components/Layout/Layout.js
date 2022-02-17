import React from 'react';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';
import { NavStyled, NavLinkStyled } from './Layout.styled';

const Layout = () => {
  return (
    <header>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </NavStyled>
      <GlobalStyle />
    </header>
  );
};

export default Layout;
