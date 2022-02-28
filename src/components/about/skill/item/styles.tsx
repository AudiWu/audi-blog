import styled from "styled-components";
import { pxToRem } from "../../../../helpers/pxToRem";
import { media } from "../../../../helpers/media";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${media.tablet`
    flex-direction: row;
    align-items: flex-start;
    svg {
      width: 300px;
    }
  `}

  ${media.mobile`
    flex-direction: column;
    align-items: center;

    svg {
      width: 100%;
    }
  `}
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  ${media.tablet`
    align-items: flex-start;
  `}

  ${media.mobile`
    align-items: center;
  `}
`;

export const ItemTitle = styled.h1`
  font-size: ${pxToRem(20)};
`

export const ItemDescription = styled.h2`
  font-size: ${pxToRem(16)};
  text-align: justify;
`


