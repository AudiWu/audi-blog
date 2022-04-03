import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll";
import { Color } from "../../../enums/color"
import { LinkProps } from "./type"


export const LinkItem: React.FC<LinkProps> = ({ url, title }) => {
  const buttonHandler = () => {
    scrollTo(url);
  }

  return (
    <li onClick={buttonHandler}>
      {title}
    </li>
  )
  }
