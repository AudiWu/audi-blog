import styled from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"
import { pxToRem } from "../../helpers/pxToRem";

export const Wrapper = styled.div`
  padding: 80px 0px;

  ${media.mobile`
    padding: 60px 0px;
  `}
`;

export const ProjectsWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;
  text-align: center;

  h1 {
    text-align: center;
    margin: 20px auto 0px;
    font-weight: 500;
    color: ${Color.SUVA_GRAY};
  }

  h2 {
    color: ${Color.WHITE};
    margin-top: 8px;
    margin-bottom: 20px;
  }

  a {
    margin-top: 8px;
    border: solid 1px ${Color.MALACHITE};
    border-radius: 10px;
    padding: 4px 8px;
    font-size: ${pxToRem(16)};
    color: ${Color.MALACHITE};
  }

  a:hover {
    opacity: 0.75;
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
  `}

  ${media.mobile`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  `}
`