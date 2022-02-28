import React from 'react';
import { Item } from './item';
import { Title } from '../../shared/title';
import { SkillWrapper } from './styles';

const data = {
  title: 'My Skills',
  skill: {
    title: "Web Development",
    icon: "website",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id quam at enim eleifend venenatis in nec tortor. Duis consequat vitae purus in imperdiet."
  },
}

export const Skill: React.FC<{}> = () => (
  <>
    <Title value={data.title} />
    <SkillWrapper>
      <Item title={data.skill.title} icon={data.skill.icon} value={data.skill.value} />
      <Item title="Responsive Website" icon="responsive" value={data.skill.value} />
      <Item title="Problem Solver" icon="idea" value={data.skill.value} />
    </SkillWrapper>
  </>
)
