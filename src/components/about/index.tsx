import React from "react"
import { AboutContainer, Model, ModelAndSkill } from "./styles"
import { Biography } from "./biography"
import { Skill } from "./skill"

export const About: React.FC<{}> = () => (
  <AboutContainer>
    <ModelAndSkill>
      <Model src="/ryu.gif" />
      <Skill />
    </ModelAndSkill>
    <Biography />
  </AboutContainer>
)
