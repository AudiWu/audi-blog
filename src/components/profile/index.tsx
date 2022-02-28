import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "styled-components"
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
import { graphql, useStaticQuery } from "gatsby"

export const Profile: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query Profile {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const image = data.file.childImageSharp.gatsbyImageData;

  const imageStyle = {
    borderRadius: 10
  }

  return (
    <ProfileContainer>
      <ProfilePhoto>
        <GatsbyImage image={image} alt="Profile Image" style={imageStyle} />
      </ProfilePhoto>
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
}
