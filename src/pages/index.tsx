import React from "react";
import styled from "styled-components";

const CustomText = styled.p`
  color: blue;
  size: 20px;
`;

const Index: React.FC = () => (
  <>
    <h1>Hello Wordl!</h1>
    <p>using typescript to write the web</p>
    <CustomText>This is custom text</CustomText>
  </>
);

export default Index;
