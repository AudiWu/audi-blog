import React from "react"
import {
  ProfileContainer,
  ProfilePhoto,
  NameAndTitleWrapper,
  Name,
  Title,
  SocialMedia,
  ResumeAndContactWrapper,
  Resume,
  Contact,
} from "./styles"
import { Icon } from "../icon"

export const Profile: React.FC<{}> = () => (
  <ProfileContainer>
    <ProfilePhoto src="/Screenshot_116.png" />
    <NameAndTitleWrapper>
      <Name>Audi</Name>
      <Title>Developer</Title>
    </NameAndTitleWrapper>
    <SocialMedia>
      <Icon name="email" size={30} />
      <Icon name="phone" size={30} />
      <Icon name="linkedin" size={30} />
      <Icon name="instagram" size={30} />
      <Icon name="facebook" size={30} />
    </SocialMedia>
    <ResumeAndContactWrapper>
      <Resume href="#">Download CV</Resume>
      <Contact href="mailto:audiwu321@gmail.com">Contact Me</Contact>
    </ResumeAndContactWrapper>
  </ProfileContainer>
)
