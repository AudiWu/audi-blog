import React from 'react';
import styled from 'styled-components';

const CustomText = styled.p`
  font-size: 50px;
  color: green;
`;

const Test: React.FC = () => (
  <CustomText>Test Page on projects file</CustomText>
);

export default Test;