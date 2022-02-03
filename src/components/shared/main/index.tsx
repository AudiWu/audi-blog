import React from 'react'
import { MainWrapper, Text } from './styles'

type MainProps = {
  value: string;
}

export const Main: React.FC<MainProps> = ({ value }) => (
  <MainWrapper>
    <Text>{value}</Text>
  </MainWrapper>
);