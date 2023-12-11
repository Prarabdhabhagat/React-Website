import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <Title>BhagatTech</Title>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const Title = styled.h1`
  font-size: 30px;
  text-decoration: none;
  list-style: none;
`;
