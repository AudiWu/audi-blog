import styled from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"

export const AboutContainer = styled.div`
  width: 70%;
  padding: 1% 2%;
  height: 590px;
  background-color: ${Color.WHITE};
  border: solid 1px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow-y: scroll;

  ${media.tablet`
    width: 60%;
    padding: 2% 2%;
  `}

  ${media.mobile`
    width: 100%;
    height: 100%;
    padding: 2% 3%;
  `}
`

export const Model = styled.div`
  border-radius: 10px;
  background-color: ${Color.MINE_SHAFT};

  ${media.mobile`
    width: 100%;
    height: 100px;
  `}
`;

export const ModelAndSkill = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  grid-gap: 15px;

  ${media.mobile`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `}
`;
