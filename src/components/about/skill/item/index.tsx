import React from "react"
import { Icon } from "../../../icon"
import {
  ItemWrapper,
  DescriptionWrapper,
  ItemTitle,
  ItemDescription,
} from "./styles"

type ItemProps = {
  title: string
  icon: string
  value: string
}

export const Item: React.FC<ItemProps> = ({ title, icon, value }) => (
  <ItemWrapper>
    <Icon name={icon} size={80} />
    <DescriptionWrapper>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{value}</ItemDescription>
    </DescriptionWrapper>
  </ItemWrapper>
)
