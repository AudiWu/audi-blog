import styled from "styled-components"
import { media } from "../../helpers/media"
import { Color } from "../../enums/color"
import { motion } from "framer-motion"

export const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0px;

  ${media.mobile`
    padding: 60px 0px;
  `}
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const FrameworkWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 40px;
  column-gap: 20px;

  ${media.mobile`
    margin-top: 60px;
    display: grid;
    grid-template-columns: auto auto;
  `}

  svg {
    &:hover {
      fill: ${Color.SUVA_GRAY};
    }
  }
`

export const IconTitle = styled.h1`
  color: ${Color.SUVA_GRAY};
`;
