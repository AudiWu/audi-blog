import styled from "styled-components"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"
import { pxToRem } from "../../helpers/pxToRem"
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

export const ProfileContainer = styled(motion.div)`
  margin-top: 80px;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: center;

  ${media.mobile`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `}
`

export const Text = styled.p`
  text-align: left;
  font-size: ${pxToRem(18)};
  color: ${Color.WHITE};
  margin-bottom: 20px;
  line-height: 1.5;

  span {
    color: ${Color.MALACHITE};
    
    a {
      text-decoration: none;
      cursor: pointer;
    }

    a:link{
      color: ${Color.MALACHITE};
    }
    a:visited{
      color: ${Color.MALACHITE};
    }
    a:hover{
      color: ${Color.MALACHITE};
    }
    a:focus{
      color: ${Color.MALACHITE};
    }
    a:active{
      color: ${Color.MALACHITE};
    }
  }
`;

export const Information = styled(motion.div)`
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

export const AboutWrapper = styled.p`
  width: 80%;
  color: ${Color.GALLERY};
  font-size: ${pxToRem(20)};
  ${media.mobile`
    width: 100%;
  `}
`

export const ContactText = styled.p`
  text-align: left;
  font-size: ${pxToRem(18)};
  color: ${Color.WHITE};
  line-height: 1.5;
`

export const Contact = styled(motion.div)`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const ProfilePhoto = styled(motion.div)`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobile`
    width: 100%;
    margin-bottom: 20px;
  `}

  img {
    border-radius: 10px;
  }
`

export const Resume = styled.a`
  margin-top: 20px;
  width: 100px;
  border-radius: 10px;
  padding: 8px 10px;
  border: solid 1px ${Color.MALACHITE};
  color: ${Color.MALACHITE};
  background-color: ${Color.DARK};
  font-size: ${pxToRem(20)};
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContactWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
