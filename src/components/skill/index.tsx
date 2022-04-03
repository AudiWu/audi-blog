import React from "react"
import { Item } from "./item"
import { Title } from "../shared/title"
import { Wrapper, SkillWrapper, FrameworkWrapper, Subtitle } from "./styles"
import { Icon } from "../icon"
import { Color } from "../../enums/color"

const data = {
  title: "Skills & Frameworks",
  subtitle: {
    skill: "Skills that I acquired on my journey becoming a web developer",
    framework: "Some tools and technologies that I used in the development",
  },
  skills: [
    {
      title: "Web Development",
      icon: "website",
      value:
        "2 years of experience on designing and developing web applications. Using various web technologies to develop and testing multiple web-based applications.",
    },
    {
      title: "Responsive Website",
      icon: "responsive",
      value:
        "Creating a responsive design website that can be accessible to all user regardless of their device.",
    },
    {
      title: "Problem Solver",
      icon: "idea",
      value:
        "Using the power of 🧋 to solving development problem. And love to teaching and helping other people by reviewing other people code and provide some feedback.",
    },
  ],
}

export const Skill: React.FC<{}> = () => (
  <Wrapper id="skill">
    <Title value={data.title} />
    <Subtitle>{data.subtitle.skill}</Subtitle>
    <SkillWrapper>
      {data.skills.map((skill, index) => (
        <Item
          key={`${skill.title}-${index}`}
          title={skill.title}
          icon={skill.icon}
          value={skill.value}
        />
      ))}
    </SkillWrapper>
    <Subtitle>{data.subtitle.framework}</Subtitle>
    <FrameworkWrapper>
      <Icon
        name="reactjs"
        size={75}
        color={Color.WHITE}
        attachLink="https://reactjs.org/"
      />
      <Icon
        name="nextjs"
        size={75}
        color={Color.WHITE}
        attachLink="https://nextjs.org/"
      />
      <Icon
        name="gatsbyjs"
        size={75}
        color={Color.WHITE}
        attachLink="https://www.gatsbyjs.com/"
      />
      <Icon
        name="nodejs"
        size={75}
        color={Color.WHITE}
        attachLink="https://nodejs.org/en/"
      />
      <Icon
        name="springboot"
        size={75}
        color={Color.WHITE}
        attachLink="https://spring.io/"
      />
      <Icon
        name="flask"
        size={75}
        color={Color.WHITE}
        attachLink="https://palletsprojects.com/p/flask/"
      />
      <Icon
        name="github"
        size={75}
        color={Color.WHITE}
        attachLink="https://github.com/"
      />
      <Icon
        name="gitlab"
        size={75}
        color={Color.WHITE}
        attachLink="https://gitlab.com/gitlab-org/gitlab/"
      />
      <Icon
        name="vscode"
        size={75}
        color={Color.WHITE}
        attachLink="https://code.visualstudio.com/"
      />
    </FrameworkWrapper>
  </Wrapper>
)
