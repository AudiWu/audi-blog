import React from "react"
import styled from "styled-components"
import { Header } from "../header"
import { Particle } from "../particle";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
`;

const Content = styled.div`
  width: 100%;
  padding: 10% 6% 5%;
`;

type LayoutProps = {
  children: React.ReactChild
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <LayoutWrapper>
    <Particle />
    <Header />
    <Content>{children}</Content>
  </LayoutWrapper>
)
