import React from "react";
import { Profile } from "./profile";
import { About } from "./about";

export const Home:React.FC<{}> = () => (
  <>
    <Profile />
    <About />
  </>  
);
