import React from "react";
import styled from "styled-components";
import TopHeader from "./TopHeader";
import GithubCenter from "./GithubCenter/GithubCenter";
import CenterBuild from "./GithubCenter/CenterBuild";

const GithubApp = () => {
  return (
    <Container>
      <TopHeader />
      <CenterBuild />
    </Container>
  );
};

export default GithubApp;

const Container = styled.div``;
