import styled from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"
import { pxToRem } from "../../helpers/pxToRem"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0px 32px 0px;

  ${media.mobile`
    padding: 60px 0px 32px 0px;
  `}
`

export const TimelineWrapper = styled.div`
  margin-top: 80px;

  .timeline-item-title {
    padding: 8px;
    text-align: left !important;
    font-size: ${pxToRem(18)} !important;
    color: ${Color.WHITE} !important;
  }

  .timeline-item-title.active {
    color: ${Color.DARK} !important;
  }

  .timeline-controls {
    display: none !important;
  }

  ${media.tablet`
    height: 90vh;
  `}

  ${media.mobile`
    margin-top: 60px;
    height: 100%;
  `}
`

export const CompanyName = styled.h1`
  color: ${Color.SUVA_GRAY};
  font-size: ${pxToRem(32)};
  margin-bottom: 12px;

  ${media.mobile`
    font-size: ${pxToRem(28)};
  `}
`

export const JobTitle = styled.h2`
  color: ${Color.MINE_SHAFT};
  font-size: ${pxToRem(28)};
  border-bottom: 2px solid ${Color.MALACHITE};
  padding-bottom: 10px;
  margin-bottom: 12px;

  ${media.mobile`
    font-size: ${pxToRem(24)};
  `}
`

export const Achievement = styled.ul`
  padding-left: 20px;

  li::marker {
    color: ${Color.MALACHITE};
  }

  li {
    font-size: ${pxToRem(24)};
    margin-bottom: 12px;

    ${media.mobile`
      font-size: ${pxToRem(20)};
    `}
  }
`
