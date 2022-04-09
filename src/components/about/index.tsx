import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Wrapper,
  ProfileContainer,
  Information,
  ProfilePhoto,
  Text,
  Contact,
  ContactText,
  ResumeWrapper,
  Resume,
  ContactWrapper,
} from "./styles"
import { Icon } from "../icon"
import { Color } from "../../enums/color"
import { Title } from "../shared/title"

export const About: React.FC<{}> = () => (
  <Wrapper
    id="about"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <Title value="About" />
    <ProfileContainer>
      <ProfilePhoto>
        <StaticImage
          src="../../images/profile-2.jpg"
          alt="Profile Image"
          width={300}
        />
      </ProfilePhoto>
      <Information>
        <Text>
          Thanks for scrolling until this section!!! 🥳 I'm Audi, an Indonesian
          overseas student that currently in Taiwan. Recently graduated from{" "}
          <span>
            <a
              href="https://www.ntut.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Taipei University of Technology
            </a>
          </span>{" "}
          with a bachelor of CSIE.
        </Text>
        <Text>
          For me, coding is like play some 🧩 using computer language, and it
          feels so satisfying when I can solve or connect the solution to the
          problem. Right now I still learning to create eye-catching,
          accessible, and user-friendly websites.
        </Text>
        <Text>
          Besides coding, I usually spend my time hanging out with my friend or
          playing video games. I’m excited to make the leap and continue
          refining my skills with the right team or company. ✨
        </Text>
        <ContactWrapper>
          <ContactText>Feel free to connect or check me at:</ContactText>
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
          <ResumeWrapper>
            <Resume
              href="./english.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume
            </Resume>
            <Resume
              href="./chinese.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              履歷
            </Resume>


          </ResumeWrapper>
        </ContactWrapper>
      </Information>
    </ProfileContainer>
  </Wrapper>
)
