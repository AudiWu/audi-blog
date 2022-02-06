import styled from "styled-components"
import { media } from "../../helpers/media";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  padding: 7% 6% 2%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-evenly;

  ${media.tablet`
    padding: 7% 5% 5%;
    gap: 30px;
  `}

  ${media.mobile`
    padding: 20% 6% 5%;
    flex-direction: column;
    gap: 20px;
  `}
`;
