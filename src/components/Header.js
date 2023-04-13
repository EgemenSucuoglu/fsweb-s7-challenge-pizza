import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SCHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: red;
`;

const SCImg = styled.img`
  width: 90px;
  margin-left: 100px;
`;
const SCNav = styled.nav`
  text-decoration: none;
  margin-right: 5px;
  border: 2px solid black;
  padding: 5px;
  font-weight: 600;
  display: inline-block;
`;
const SCNav1 = styled.nav`
  text-decoration: none;
  border: 2px solid black;
  padding: 5px;
  font-weight: 600;
  display: inline-block;
`;

export default function Header() {
  return (
    <>
      <SCHeader>
        <SCImg src="https://st4.depositphotos.com/2160693/41004/v/450/depositphotos_410048040-stock-illustration-fast-pizza-logo-running-pizza.jpg" />
        <h1>Technological Foods</h1>

        <SCNav>
          <Link to="/">Home</Link>
        </SCNav>
        <SCNav1>
          <Link to="/pizza">Order Form</Link>
        </SCNav1>
      </SCHeader>
    </>
  );
}
