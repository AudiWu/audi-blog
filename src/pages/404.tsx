import React from "react";
import styled from "styled-components";

const CustomText = styled.p`
  color: red;
  size: 20px;
`;

const Error: React.FC = () => (
  <>
    <CustomText>Error Page</CustomText>
  </>
);

export default Error;