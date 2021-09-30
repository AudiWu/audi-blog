import React from "react"
import styled from "styled-components"
import { Header } from "../header"

const LayoutWrapper = styled.div`
  width: 100%;
  margin: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 65px;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 0;
  text-align: center;
  color: whitesmoke;
`;

type LayoutProps = {
  children: React.ReactChild
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Content>{children}</Content>
    <Footer>Copyright 2021 Audi's Blog</Footer>
  </LayoutWrapper>
)
