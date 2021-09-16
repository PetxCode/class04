import React from "react";
import styled from "styled-components";

const Top = () => {
  return (
    <Container>
      <Header src={"myLogo.svg"} />
      <Links>
        <Link>Home</Link>
        <Link clr>About</Link>
        <Link clr>Contact</Link>
      </Links>
    </Container>
  );
};

export default Top;

const Container = styled.div`
  width: 100%;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
`;
const Links = styled.div`
  display: flex;
`;
const Link = styled.div`
  margin: 0 20px;
  color: ${({ clr }) => (clr ? "#7457BE" : "white")};
  font-weight: bold;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
