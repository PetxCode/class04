import React from "react";
import styled from "styled-components";
import img from "../githubImage/co-authoring.png";

const GithubCenter = ({ chn, text, img }) => {
  return (
    <Container>
      <Wrapper chn={chn}>
        <WrapperImage src={img} />
        <WrapperContent>
          <Header>{text}</Header>
          <Para>
            See all open pull requests for your repositories and check them out
            as if they were a local branch, even if they're from upstream
            branches or forks. See which pull requests pass commit status
            checks, too!
          </Para>
        </WrapperContent>
      </Wrapper>
    </Container>
  );
};

export default GithubCenter;

const Header = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
`;
const Para = styled.div``;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ chn }) => (chn ? "row-reverse" : "row")};
  align-items: center;
`;
const WrapperImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;
const WrapperContent = styled.div`
  width: 400px;
`;
