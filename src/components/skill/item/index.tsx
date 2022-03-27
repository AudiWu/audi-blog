import React from "react"
import { Icon } from "../../icon"
import {
  ItemWrapper,
  DescriptionWrapper,
  ItemTitle,
  ItemDescription,
} from "./styles"
import { Color } from "../../../enums/color"

type ItemProps = {
  title: string
  icon: string
  value: string
}

export const Item: React.FC<ItemProps> = ({ title, icon, value }) => (
  <ItemWrapper>
    <Icon name={icon} size={70} color={Color.WHITE} />
    <DescriptionWrapper>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{value}</ItemDescription>
    </DescriptionWrapper>
  </ItemWrapper>
)
