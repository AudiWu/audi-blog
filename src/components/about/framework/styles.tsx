import styled from "styled-components"
import { media } from "../../../helpers/media"

export const FrameworkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  ${media.tablet`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
  `}
`
