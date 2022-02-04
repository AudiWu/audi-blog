import React from "react"
import { Chrono } from "react-chrono"
import data from "./data"
import { TimelineWrapper } from "./styles"
import { Color } from "../../enums/color"

export const Timeline: React.FC<{}> = () => (
  <TimelineWrapper>
    <Chrono
      items={data}
      mode="VERTICAL"
      slideShow
      slideItemDuration={4000}
      cardHeight={150}
      theme={{ 
        primary: Color.MALACHITE,
        secondary: Color.WHITE,
        cardBgColor: Color.WHITE,
        cardForeColor: Color.DARK,
        titleColor: Color.WHITE,
        textColor: Color.DARK,
      }}    
    />
  </TimelineWrapper>
)
