import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

function Error() {
  return (
    <Wrapper>
      <h2 className="common-heading">OOps page not found!</h2>
      <Button className="btn hireme-btn">
        <NavLink to="/">Go to Home Page</NavLink>
      </Button>
    </Wrapper>
  );
}

export default Error;

const Wrapper = styled.section`
  padding: 9rem 0 5rem 5rem;
  button {
    padding: 10px 10px;
    cursor: pointer;
  }
`;
