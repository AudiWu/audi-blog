import React from "react"
import { Header } from "../header"
import { Particle } from "../particle"
import { LayoutWrapper, Content } from "./styles"

type LayoutProps = {
  children: React.ReactChild
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <LayoutWrapper>
    <Particle />
    <Header />
    <Content>{children}</Content>
  </LayoutWrapper>
)
