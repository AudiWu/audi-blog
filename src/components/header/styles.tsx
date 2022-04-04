import styled, { css } from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"
import { pxToRem } from "../../helpers/pxToRem"

type NavbarProps = {
  show: boolean
}

const Navbar = styled.nav<NavbarProps>`
  width: 100%;
  position: fixed;
  line-height: 50px;
  text-align: center;
  z-index: 9999;
  transition: top 0.4s ease-in;
  top: -5rem;

  ${({ show = false }) => show && css`
    top: 0;
  `}
`

const Menu = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 0 100px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    gap: 20px;

    li {
      font-size: ${pxToRem(22)};
      text-decoration: none;
      color: ${Color.WHITE};
      cursor: pointer;
      line-height: 100px;

      ${media.tablet`
        line-height: 50px;
      `}

      ${media.mobile`
        font-size: ${pxToRem(16)}
      `}

      transition: color 0.4s;
    }

    li:hover {
      color: ${Color.MALACHITE};
    }

    ${media.tablet`
      height: 50px;
    `}

    ${media.mobile`
      justify-content: center;
    `}
  }

  ${media.tablet`
    padding: 0px 50px;
    background-color: ${Color.DARK}
  `}
`

const ProjectMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  transition: color 0.4s;

  p {
    font-size: ${pxToRem(20)};
  }

  svg {
    padding-top: 10px;
  }

  &:hover {
    p {
      color: ${Color.MALACHITE};
    }

    svg {
      fill: ${Color.MALACHITE};
    }
  }

  ${media.tablet`
    background-color: ${Color.DARK}
  `}
`

export { Navbar, Menu, ProjectMenu }
