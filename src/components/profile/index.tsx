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
  HashTags,
  Tag,
  Contact,
  ProfilePhoto,
} from "./styles"
import { Icon } from "../icon"
import { Color } from "../../enums/color"

export const Profile: React.FC<{}> = () => {
  return (
    <Wrapper id="profile">
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
          <HashTags>
            <Tag>#WebDev</Tag>
            <Tag>#MemeIsLife</Tag>
            <Tag>#MilkTeaForIdea</Tag>
          </HashTags>
          <Contact>
            <Icon
              name="email"
              size={30}
              attachLink="mailto:audiwu321@gmail.com"
            />
            <Icon
              name="github"
              size={30}
              attachLink="https://github.com/AudiWu"
              color={Color.WHITE}
            />
            <Icon
              name="linkedin"
              size={30}
              attachLink="https://www.linkedin.com/in/audi-putera"
            />
            <Icon
              name="twitter"
              size={30}
              attachLink="https://twitter.com/AudiPm1998"
            />
            <Icon
              name="instagram"
              size={30}
              attachLink="https://www.instagram.com/audipm98/"
            />
            <Icon
              name="facebook"
              size={30}
              attachLink="https://www.facebook.com/audi.putera.7"
            />
          </Contact>
        </Information>
        <ProfilePhoto>
          <StaticImage
            src="../../images/profile.png"
            alt="Profile Image"
            width={300}
          />
        </ProfilePhoto>
      </ProfileContainer>
    </Wrapper>
  )
}
