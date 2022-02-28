import React from "react"
import { Icon } from "../../icon"
import { Title } from "../../shared/title"
import { FrameworkWrapper } from "./styles"

const data = {
  title: "Frameworks & Tools That I Used",
}

export const Framework: React.FC<{}> = () => (
  <>
    <Title value={data.title} />
    <FrameworkWrapper>
      <Icon name="reactjs" size={75} />
      <Icon name="nextjs" size={75} />
      <Icon name="gatsbyjs" size={75} />
      <Icon name="nodejs" size={75} />
      <Icon name="springboot" size={75} />
      <Icon name="flask" size={75} />
      <Icon name="github" size={75} />
      <Icon name="gitlab" size={75} />
      <Icon name="vscode" size={75} />
    </FrameworkWrapper>
  </>
)
