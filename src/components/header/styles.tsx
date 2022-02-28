import styled from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"
import { pxToRem } from "../../helpers/pxToRem"

const Navbar = styled.nav`
  width: 100%;
  position: fixed;
  line-height: 50px;
  text-align: center;
  z-index: 9999;
`

const Menu = styled.div`
  width: 100%;
  background-color: ${Color.DARK} ;
  padding: 0 6%;
  opacity: 0.85;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    gap: 20px;

    li {

      a {
        font-size: ${pxToRem(22)};
        text-decoration: none;
        color: ${Color.WHITE};
        text-transform: uppercase;

        ${media.mobile`
          line-height: 8vh;
          font-size: ${pxToRem(16)}
        `}
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
        height: 8vh;
        justify-content: center;
    `}
  }
`

export { Navbar, Menu }
