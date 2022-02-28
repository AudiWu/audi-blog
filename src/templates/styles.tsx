import styled from 'styled-components'
import { Color } from '../enums/color'

export const Details = styled.div`
  h2 {
    font-size: 3.5em;
    color: ${Color.WHITE};
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 40px;
    color: ${Color.SUVA_GRAY};
  }

  pre {
    background-color: ${Color.WHITE};
    border-radius: 5px;
    padding: 1%;
  }

  code {
    color: ${Color.TANGERINE};
    font-size: 2em;
  }
`

export const Banner = styled.div`
  margin-bottom: 40px;
`

export const Content =styled.div`
  margin-top: 40px;
` 
