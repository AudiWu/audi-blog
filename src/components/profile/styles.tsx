import styled, { css } from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"
import { pxToRem } from "../../helpers/pxToRem"

const BigTextStyles = css`
  font-size: ${pxToRem(80)};

  ${media.tablet`
    font-size: ${pxToRem(40)};
  `}

  ${media.mobile`
  font-size: ${pxToRem(30)};
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${media.mobile`
    padding-top: 50px;
  `}
`

export const ProfileContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;

  ${media.mobile`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;
  `}
`

export const Information = styled.div`
  width: 70%;

  ${media.mobile`
    width: 100%;
  `}
`

export const IntroductionText = styled.h1`
  color: ${Color.MALACHITE};
  font-size: ${pxToRem(16)};
  margin-bottom: 20px;
  word-spacing: 5px;
`

export const Name = styled.h2`
  color: ${Color.SUVA_GRAY};
  margin-bottom: 10px;
  ${BigTextStyles};
`

export const Title = styled.h3`
  color: ${Color.GALLERY};
  margin-bottom: 20px;
  ${BigTextStyles};
`

export const About = styled.p`
  width: 80%;
  color: ${Color.GALLERY};
  font-size: ${pxToRem(20)};
  ${media.mobile`
    width: 100%;
  `}
`

export const ProfilePhoto = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.mobile`
    width: 100%;
    margin-bottom: 20px;
  `}

  img {
    border-radius: 10px;
  }
`
