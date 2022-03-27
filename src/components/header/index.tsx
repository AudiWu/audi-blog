import React from "react"
import { Navbar, Menu } from "./styles"
import { LinkItem } from "./link"

const datas = [
  {
    url: "/",
    title: "About",
  },
  {
    url: "/Project",
    title: "Project",
  },
  {
    url: "/Blog",
    title: "Blog",
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
