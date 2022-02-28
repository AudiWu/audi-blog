import styled from "styled-components"
import { media } from "../../../helpers/media"

export const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 25px;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    gap: 25px;
  `}

  ${media.mobile`
    display: grid;
    grid-template-columns: auto;
    grid-gap: 25px;
  `}
`
