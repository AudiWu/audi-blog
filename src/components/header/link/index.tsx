import React from "react"
import { Link } from "gatsby"
import { Color } from "../../../enums/color"
import { LinkProps } from "./type"
import { Icon } from "../../icon"

export const LinkItem: React.FC<LinkProps> = ({ url, title }) => (
  <li>
    <Link to={url} activeStyle={{ color: Color.MALACHITE }}>
      {title}
    </Link>
  </li>
)
