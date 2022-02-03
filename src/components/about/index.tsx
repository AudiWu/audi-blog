import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber";
import { AboutContainer, ModelAndSkill } from "./styles"
import { Biography } from "./biography"
import { Model } from "./model"
import { Skill } from "./skill"

export const About: React.FC<{}> = () => (
  <AboutContainer>
    <ModelAndSkill>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Skill />
    </ModelAndSkill>
    <Biography />
  </AboutContainer>
)
