import React from "react";
import styled from "styled-components";

const SCSection = styled.section`
  background-image: url("https://i.ytimg.com/vi/9FJ0sV8_O_8/maxresdefault.jpg");
  height: 400px;
  text-align: center;
`;
const SCButton = styled.button`
  margin-top: 150px;
  display: inline-block;
  text-align: center;
  color: black;
  padding: 10px;
  font-weight: bold;
    font-size: 30px;

  }
`;
const SCFood = styled.h3`
  margin-top: 20px;
  text-align: center;
`;

export default function Home(props) {
  const { clickButton } = props;
  return (
    <>
      <SCSection>
        <SCButton onClick={clickButton} data-cy="home-button">
          I'm Hungry
        </SCButton>
      </SCSection>
      <SCFood>BEST PIZZA IN ISTANBUL</SCFood>
    </>
  );
}
