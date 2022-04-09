import styled from 'styled-components'
import { Color } from '../enums/color'
import { media } from '../helpers/media'
import { pxToRem } from '../helpers/pxToRem'

export const Details = styled.div`
  padding-top: 100px;

  ${media.mobile`
    padding-top: 60px;
  `}

  h1 {
    font-size: 3.5em;
    color: ${Color.SUVA_GRAY};
  }

  h2 {
    font-size: 2em;
    font-weight: 400;
    color: ${Color.WHITE};
  }
`

export const Banner = styled.div`
  margin-top: 40px;
`

export const Content =styled.div`
  padding: 40px 0px;

  h1 {
    margin-top: 40px;
    margin-bottom: 12px;
  }

  h1:first-of-type {
    margin-top: 0px;
  }

  hr {
    margin-bottom: 18px;
  }

  p {
    font-size: ${pxToRem(28)};
  }

  ul {
    padding-left: 20px;
  }

  li {
    font-size: ${pxToRem(28)};
    color: ${Color.WHITE};
    margin-bottom: 12px;
  }

  a {
    font-size: ${pxToRem(28)};
    color: ${Color.MALACHITE};
  }

  th {
    border: solid 1px ${Color.WHITE};
    font-size: ${pxToRem(28)};
    color: ${Color.MINE_SHAFT};
    background-color: ${Color.WHITE};
    border-radius: 10px 10px 0 0;
    padding: 8px 10px;
  }

  td {
    font-size: ${pxToRem(28)};
    border: solid 1px ${Color.WHITE};
    font-size: ${pxToRem(28)};
    color: ${Color.SUVA_GRAY};
    background-color: ${Color.WHITE};
    padding: 8px 10px;
  }

  ${media.mobile`
    h1 {
      font-size: ${pxToRem(38)};
    }
  `}
` 
