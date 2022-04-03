import styled from "styled-components"
import { media } from "../../helpers/media"
import { Color } from "../../enums/color"
import { pxToRem } from "../../helpers/pxToRem"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0px;

  ${media.mobile`
    padding: 60px 0px;
  `}
`

export const SkillWrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 50px;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `}

  ${media.mobile`
    margin-top: 60px;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 30px;
  `}
`

export const Subtitle = styled.h2`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${Color.SUVA_GRAY};
  font-size: ${pxToRem(32)};
  text-align: center;

  ${media.mobile`
    margin-top: 60px;
  `}
`

export const FrameworkWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 20px;
  `}

  ${media.mobile`
    margin-top: 60px;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
  `}

  svg {
    &:hover {
      fill: ${Color.SUVA_GRAY};
    }
  }
`
