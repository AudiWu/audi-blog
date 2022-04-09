import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Wrapper,
  ProfileContainer,
  Information,
  IntroductionText,
  Name,
  Title,
  About,
  ProfilePhoto,
} from "./styles"

export const Profile: React.FC<{}> = () => {
  return (
    <Wrapper
      id="profile"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <ProfileContainer>
        <Information>
          <IntroductionText>Hello, my name is </IntroductionText>
          <Name>Audi Putera Mulia.</Name>
          <Title>I build things for the web.</Title>
          <About>
            I'm a web developer that enjoys creating things that live on the
            internet. I have a big passion for Front-end Development and love
            create intuitive, dynamic user experiences.
          </About>
        </Information>
        <ProfilePhoto>
          <StaticImage
            src="../../images/profile-1.jpg"
            alt="Profile Image"
            width={300}
          />
        </ProfilePhoto>
      </ProfileContainer>
    </Wrapper>
  )
}
