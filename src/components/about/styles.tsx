import styled from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"

export const AboutContainer = styled.div`
  width: 70%;
  height: 590px;
  background-color: ${Color.WHITE};
  border: solid 1px gray;
  border-radius: 10px;

  ${media.tablet`
    width: 60%;
  `}

  ${media.mobile`
    width: 100%;
  `}
`
