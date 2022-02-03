import React from 'react'
import { TitleWrapper, Text } from './styles'

type TitleProps = {
  value: string;
}

export const Title: React.FC<TitleProps> = ({ value }) => (
  <TitleWrapper>
    <Text>{value}</Text>
  </TitleWrapper>
);
