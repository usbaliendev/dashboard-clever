import React from "react";
import Navbar from "./Navbar";
//import Content from "./Content";

import { SectionContainer, Content } from "./style.js";

const MainContent = (isopen) => {
  return (
    <>
      <SectionContainer isopen={isopen}>
        <Navbar />
        <Content>
          <br />
          <br />
          <h1>Theme Builder</h1>
          <p>This is a theming system with a Theme Switcher</p>
        </Content>
      </SectionContainer>
    </>
  );
};

export default MainContent;
