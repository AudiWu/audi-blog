import React from "react";
import styled from "styled-components";
import { Profile } from "./profile";
import { About } from "./about";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const Home:React.FC<{}> = () => (
  <HomeContainer>
    <Profile />
    <About />
  </HomeContainer>  
);
