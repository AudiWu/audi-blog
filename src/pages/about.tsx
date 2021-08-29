import React from 'react';
import styled from 'styled-components';

const CustomText = styled.p`
  font-size: 50px;
  color: black;
`;

const About: React.FC<{}> = () => (
  <CustomText>About Page</CustomText>
);

export default About;