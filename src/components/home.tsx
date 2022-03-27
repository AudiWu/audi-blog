import React from "react"
import { Profile } from "./profile"
import { Skill } from "./skill"
import { Timeline } from "./timeline"

export const Home: React.FC<{}> = () => (
  <>
    <Profile />
    <Skill />
    <Timeline />
  </>
)
