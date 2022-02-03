import styled from "styled-components";
import { Color } from "../../../enums/color";
import { pxToRem } from "../../../helpers/pxToRem";

export const MainWrapper = styled.div`
  width: 100%;
`

export const Text = styled.p`
  font-size: ${pxToRem(18)};
  color: ${Color.DARK};
  text-align: justify;
`
