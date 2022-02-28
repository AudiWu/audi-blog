import styled from "styled-components";
import { Color } from "../../../enums/color";
import { pxToRem } from "../../../helpers/pxToRem";

export const TitleWrapper = styled.div`
  width: 100%;
  padding-bottom: 7px;
  border-bottom: 1px solid ${Color.MINE_SHAFT};
`

export const Text = styled.h1`
  font-size: ${pxToRem(30)};
  color: ${Color.MALACHITE};
`
