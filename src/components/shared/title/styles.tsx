import styled from "styled-components"
import { Color } from "../../../enums/color"
import { pxToRem } from "../../../helpers/pxToRem"
import { media } from "../../../helpers/media"

export const TitleWrapper = styled.div`
  width: 100%;
  padding-bottom: 7px;
`

export const Text = styled.h1`
  width: 100%;
  text-align: left;
  border-bottom: 1px solid ${Color.MALACHITE};
  line-height: 0.1em;

  span {
    font-size: ${pxToRem(32)};
    color: ${Color.MALACHITE};
    background-color: #14171a;
    padding: 0 10px 0px 0px;

    ${media.mobile`
    font-size: ${pxToRem(26)};
    `}
  }
`
