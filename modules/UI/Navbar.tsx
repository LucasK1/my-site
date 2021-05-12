import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  height: 100px;
  width: 100%;
  border-bottom: 1px solid darkgrey;
`;

const Nav = styled.nav`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;
const StyledLink = styled.a``;
const NavItem = styled.li`
  color: #335c67;
  font-size: 1.3rem;
  padding: 10px;
  margin: 5px 20px;
  transition: color 100ms ease-in;
  &:hover {
    color: #87b7c4;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <NavList>
          <StyledLink href="#">
            <NavItem>About me</NavItem>
          </StyledLink>
          <StyledLink href="#">
            <NavItem>Contact</NavItem>
          </StyledLink>
        </NavList>
      </Nav>
    </Header>
  );
};

export default Navbar;
