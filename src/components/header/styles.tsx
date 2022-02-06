import styled from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"
import { pxToRem } from "../../helpers/pxToRem"

const Navbar = styled.nav`
  width: 100%;
  height: 65px;
  position: fixed;
  line-height: 65px;
  text-align: center;
  z-index: 9999;
`

const Menu = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${Color.DARK};
  padding: 0 6%;

  ul {
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    gap: 20px;

    li {
      height: 65px;

      a {
        font-size: ${pxToRem(24)};
        text-decoration: none;
        color: ${Color.WHITE};
        line-height: 65px;
        text-transform: uppercase;
      }

      svg {
        fill: ${Color.WHITE};

        &:hover {
          fill: ${Color.MALACHITE};
        }

        ${media.tablet`
            fill: ${Color.MALACHITE};
        `}
      }
    }

    ${media.mobile`
        justify-content: center;
    `}
  }
`

export { Navbar, Menu }
