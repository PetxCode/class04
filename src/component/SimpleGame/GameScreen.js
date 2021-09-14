import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GameScreen = () => {
  const [picker, setPicker] = useState(0);
  const [computer, setComputer] = useState(0);

  const guessValue = (min, max) => {
    return setComputer(Math.floor(Math.random() * (max - min) + min));
  };

  useEffect(() => {
    guessValue(1, 5);
  }, []);
  return (
    <Container>
      <Wrapper>
        <NameSection>Peter's Game</NameSection>
        <RowSection>
          <RowWrapper>
            <BoxSection>{picker}</BoxSection>
            <Number>
              <DisplayBox
                onClick={() => {
                  setPicker(1);
                  console.log(picker);
                }}
              >
                1{" "}
              </DisplayBox>
              <DisplayBox
                onClick={() => {
                  setPicker(2);
                  console.log(picker);
                }}
              >
                2{" "}
              </DisplayBox>
              <DisplayBox
                onClick={() => {
                  setPicker(3);
                  console.log(picker);
                }}
              >
                3{" "}
              </DisplayBox>
              <DisplayBox
                onClick={() => {
                  setPicker(4);
                  console.log(picker);
                }}
              >
                4{" "}
              </DisplayBox>
              <DisplayBox
                onClick={() => {
                  setPicker(5);
                  console.log(picker);
                }}
              >
                5{" "}
              </DisplayBox>
            </Number>
            <BoxNameSection>me</BoxNameSection>
          </RowWrapper>
          <RowWrapper>
            <BoxSection>{}</BoxSection>
            <BoxNameSection>Computer</BoxNameSection>
          </RowWrapper>
        </RowSection>
        <ResultSection>
          <DisplayResult>Result</DisplayResult>
          <DisplayResult>
            {picker === computer ? (
              <span>You won </span>
            ) : (
              <span> You Lost</span>
            )}
          </DisplayResult>
        </ResultSection>
      </Wrapper>
    </Container>
  );
};

export default GameScreen;

const DisplayResult = styled.div``;
const Number = styled.div`
  display: flex;
`;
const DisplayBox = styled.div`
  margin: 20px 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: teal;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
const BoxSection = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
`;
const BoxNameSection = styled.div`
  margin-top: 10px;
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultSection = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;
const RowSection = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
`;
const NameSection = styled.div`
  font-size: 70px;
  font-weight: bold;
`;
const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  width: 100%;
  flex: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
