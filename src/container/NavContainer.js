import React from "react";
import styled from "styled-components";
import Nav from "../component/Nav";

const NavWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  @media (max-width: 1080px) {
    width: calc(100% - 32px);
    height: 64px;
    margin: 0 16px 0 16px;
  }
`;

const NavContainer = () => {
  return (
    <NavWrapper>
      <Nav></Nav>
    </NavWrapper>
  );
};

export default NavContainer;
