import React from "react"
import { Title } from "../shared/title"
import { Wrapper, FrameworkWrapper, IconTitle, IconWrapper } from "./styles"
import { Icon } from "../icon"
import { Color } from "../../enums/color"

const data = {
  title: "Skill",
  skills: [
    {
      title: "HTML",
      icon: "html",
    },
    {
      title: "CSS",
      icon: "css",
    },
    {
      title: "Javascript",
      icon: "javascript",
    },
    {
      title: "Sass",
      icon: "sass",
    },
    {
      title: "React",
      icon: "react",
    },
    {
      title: "Git",
      icon: "git",
    },
    {
      title: "Responsive",
      icon: "responsive",
    },
    {
      title: "Accessibility",
      icon: "accessibilty",
    },
  ],
}

export const Skill: React.FC<{}> = () => (
  <Wrapper id="skill">
    <Title value={data.title} />
    <FrameworkWrapper>
      {data.skills.map((skill, index) => (
        <IconWrapper key={`${skill.title}-${index}`}>
          <Icon name={skill.icon} color={Color.WHITE} size={100} />
          <IconTitle>{skill.title}</IconTitle>
        </IconWrapper>
      ))}
    </FrameworkWrapper>
  </Wrapper>
)
