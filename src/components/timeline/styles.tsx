import styled from "styled-components";
import { Color } from '../../enums/color';
import { media } from "../../helpers/media";

export const TimelineWrapper = styled.div`
  height: 82vh;

  .timeline-item-title {
    color: ${Color.WHITE} !important;
  }

  .timeline-item-title.active {
    color: ${Color.DARK} !important;
  }

  ${media.tablet`
    height: 90vh;
  `}

  ${media.mobile`
    height: 100%;

    .timeline-controls {
      display: none !important;
    }
  `}
`