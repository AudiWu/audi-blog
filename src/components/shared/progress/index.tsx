import React, { useState, useEffect } from 'react'
import { ProgressProps } from './type';
import { 
  Wrapper,
  BarContainer,
  Filler,
  Label,
  Title,
} from './styles';

export const Progress: React.FC<ProgressProps> = ({
  title = '', 
  value, 
  color, 
}) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(value));
  }, []);

  return (
    <Wrapper>
      {title && (
        <Title>{title}</Title>
      )}
      <BarContainer>
        <Filler value={completed} color={color}>
          <Label>{`${completed}%`}</Label>
        </Filler>
      </BarContainer>
    </Wrapper>
  );
};
