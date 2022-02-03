import React from 'react';
import { Title } from '../../shared/title'
import { Progress } from '../../shared/progress';
import { SkillWrapper, ProgressWrapper } from './styles';
import { Color } from '../../../enums/color';

const data = {
  title: 'Skill',
  skills: [
    {
      title: 'JavaScript',
      value: 80,
      color: Color.CURIOUS_BLUE,
    },
    {
      title: 'TypeScript',
      value: 70,
      color: Color.ROYAL,
    },
    {
      title: 'Python',
      value: 65,
      color: Color.SCARLET,
    },
    {
      title: 'Java',
      value: 65,
      color: Color.LIGHT_SALMON,
    },
    {
      title: 'C++',
      value: 50,
      color: Color.PEANUT,
    },
    {
      title: 'Go',
      value: 60,
      color: Color.TANGERINE,
    },
  ],
}

export const Skill: React.FC<{}> = () => (
  <SkillWrapper>
    {data.skills.map((skill, index) => (
      <Progress key={index} title={skill.title} value={skill.value} color={skill.color} />
    ))}
  </SkillWrapper>
)
