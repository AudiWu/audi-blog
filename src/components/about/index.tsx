import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber";
import { AboutContainer, Model, ModelAndSkill } from "./styles"
import { Biography } from "./biography"
import { Skill } from "./skill"

export const About: React.FC<{}> = () => (
  <AboutContainer>
    <ModelAndSkill>
      {/* <Canvas>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas> */}
      <Model src="/ryu.gif" />
      <Skill />
    </ModelAndSkill>
    <Biography />
  </AboutContainer>
)
