import styled from "styled-components";
import { Color } from "../../../enums/color";
import { media } from "../../../helpers/media";

export const ModelWrapper = styled.div`
  border-radius: 10px;
  background-color: ${Color.MINE_SHAFT};

  ${media.mobile`
    width: 100%;
    height: 100px;
  `}
`;