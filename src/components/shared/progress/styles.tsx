import styled from "styled-components"
import { Color } from "../../../enums/color"
import { FontWeight } from "../../../enums/fontWeigth"
import { pxToRem } from "../../../helpers/pxToRem"

type FillerProps = {
  value: number
  color: string
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.div`
  font-size: ${pxToRem(18)};
  color: ${Color.DARK};
`

export const BarContainer = styled.div`
  height:  ${pxToRem(20)};
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
`

export const Filler = styled.div<FillerProps>`
  height: 100%;
  width: ${(props) => props.value}%;
  background-color: ${(props) => props.color};
  border-radius: inherit;
  text-align: right;
  transition: width 1s ease-in-out;
`

export const Label = styled.span`
  padding: 5px;
  color: ${Color.WHITE};
  font-weight: ${FontWeight.normalBold};
`
