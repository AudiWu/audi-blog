import styled from "styled-components";
import { media } from "../../../helpers/media";

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ProgressWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;

  ${media.mobile`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `}
`;

