import React from "react"
import { Profile } from "./profile"
import { Skill } from "./skill"
import { Timeline } from "./timeline"
import { Project } from "./projects"
import { About } from "./about";
import { Footer } from './footer';

export const Home: React.FC<{}> = () => (
  <>
    <Profile />
    <Skill />
    <Timeline />
    <Project />
    <About />
    <Footer />
  </>
)
