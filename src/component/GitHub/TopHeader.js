import React from "react";
import styled from "styled-components";
import Top from "./Top";
import TopBottom from "./TopBottom";

const TopHeader = () => {
  return (
    <Container>
      <Wrapper>
        <Top />
        <TopBottom />
      </Wrapper>
    </Container>
  );
};

export default TopHeader;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url("bg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled.div``;
