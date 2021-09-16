import React from "react";
import GithubCenter from "./GithubCenter";
import img from "../githubImage/co-authoring.png";
import img1 from "../githubImage/pr-checks.png";
import img2 from "../githubImage/syntax-highlighting.png";

const CenterBuild = () => {
  return (
    <div>
      <GithubCenter
        chn
        img={img}
        text="Checkout branches with pull requests and view CI statuses"
      />
      <GithubCenter
        img={img1}
        text="Attribute commits with collaborators easily"
      />
      <GithubCenter img={img2} chn text="Syntax highlighted diffs" />
    </div>
  );
};

export default CenterBuild;
