import React from "react"
import { Navbar, Menu } from "./styles"
import { LinkItem } from "./link"

const datas = [
  {
    url: "#profile",
    title: "About",
  },
  {
    url: "#skill",
    title: "Skill",
  },
  {
    url: "#experience",
    title: "Experience",
  },
  {
    url: "#project",
    title: "Project",
  },
]

export const Header: React.FC<{}> = () => (
  <Navbar>
    <Menu>
      <ul>
        {datas.map((data, index) => (
          <LinkItem key={index} url={data.url} title={data.title} />
        ))}
      </ul>
    </Menu>
  </Navbar>
)
