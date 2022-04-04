import React from "react"
import { Helmet } from "react-helmet"
import { Header } from "../header"
import { Particle } from "../particle"
import { LayoutWrapper, Content } from "./styles"

type LayoutProps = {
  children: React.ReactChild;
  isProjectPage?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, isProjectPage = false }) => (
  <LayoutWrapper>
    <Helmet 
      title={"Audi-blog"}
      meta={[
        { name: 'description', content: "This is a blog created by Audi" },
        { name: 'keywords', content: "blog" },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Particle />
    <Header isProjectPage={isProjectPage} />
    <Content>{children}</Content>
  </LayoutWrapper>
)
