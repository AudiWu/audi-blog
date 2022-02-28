import React from "react"
import { AboutContainer } from "./styles"
import { Biography } from "./biography"
import { Skill } from "./skill"
import { Framework } from "./framework"

export const About: React.FC<{}> = () => (
  <AboutContainer>
    <Skill />
    <Framework />
    <Biography />
  </AboutContainer>
)
