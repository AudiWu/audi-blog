import styled from "styled-components"
import { Color } from "../../enums/color"
import { pxToRem } from "../../helpers/pxToRem"

export const Footer = styled.footer`
  width: 100%;
  height: 20px;
  margin: 20px 0px;
  text-align: center;
  color: ${Color.WHITE};
  font-size: ${pxToRem(18)};
`;