import styled from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"

export const AboutContainer = styled.div`
  width: 70%;
  padding: 1% 2%;
  height: 85vh;
  background-color: ${Color.WHITE};
  border: solid 1px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;

  ${media.tablet`
    width: 60%;
    padding: 2% 2%;
    gap: 25px;
  `}

  ${media.mobile`
    width: 100%;
    height: 100%;
    padding: 2% 3% 4%;
    gap: 30px;
  `}
`
