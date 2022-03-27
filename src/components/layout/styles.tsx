import styled from "styled-components"
import { media } from "../../helpers/media"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  padding: 0px 100px;

  ${media.tablet`
    padding: 0px 50px;
  `}

  ${media.mobile`
    width: 100%;
    padding: 2.5vh 25px 0px;
  `}
`
