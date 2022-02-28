import React, { useState, useEffect } from "react"
import { Chrono } from "react-chrono"
import data from "./data"
import { TimelineWrapper } from "./styles"
import { Color } from "../../enums/color"

export const Timeline: React.FC<{}> = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 425) {
      setIsMobile(true)
    }
  }, [])

  return (
    <TimelineWrapper>
      <Chrono
        items={data}
        mode="VERTICAL"
        slideShow={!isMobile}
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
}
