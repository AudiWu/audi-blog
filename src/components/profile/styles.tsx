import styled, { css } from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"
import { pxToRem } from "../../helpers/pxToRem"

export const ProfileContainer = styled.div`
  width: 30%;
  height: 85vh;
  padding: 0;
  background-color: ${Color.WHITE};
  border: solid 1px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 3%;
  align-items: center;

  ${media.tablet`
    width: 40%;
    gap: 35px
  `}

  ${media.mobile`
    width: 100%;
    padding-bottom: 5%;
  `}
`

export const ProfilePhoto = styled.div`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`

export const NameAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Name = styled.p`
  font-size: ${pxToRem(34)};
  color: ${Color.DARK};
`

export const Title = styled.h1`
  font-size: ${pxToRem(16)};
  color: ${Color.MALACHITE};
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const ResumeAndContactWrapper = styled.div`
  padding: 0 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const linkCss = css`
  padding: 3% 5%;
  font-size: ${pxToRem(20)};
  text-decoration: none;
  border: solid 1px ${Color.MINE_SHAFT};
  color: ${Color.MINE_SHAFT};
  text-align: center;
  border-radius: 25px;
  cursor: pointer;

  ${media.mobile`
    width: 70%;
  `} 

  ${media.mobile`
    width: 50%;
  `} 

  &:hover {
    border: solid 1px ${Color.MALACHITE};
    color: ${Color.MALACHITE};
  }
`
export const Resume = styled.a`
  ${linkCss}
`

export const Contact = styled.a`
  ${linkCss}
`
