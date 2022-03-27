import React from "react"
import styled from "styled-components"
import { Layout } from "../../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"

const ProjectsWrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;
  text-align: center;

  h3 {
    text-align: center;
    margin: 20px auto 0px;
    font-weight: 500;
    color: ${Color.SUVA_GRAY};
  }

  p {
    color: ${Color.WHITE};
    margin-top: 4px;
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
  `}

  ${media.mobile`
    display: flex;
    padding-top: 50px;
    flex-direction: column;
    gap: 20px;
  `}
`

type ProjectProps = {
  frontmatter: {
    slug: string
    thumb: { childImageSharp: any }
    title:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
    stack:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
  }
  id: React.Key | null | undefined
}

const Project: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query ProjectsPage {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/markdown/project/" } }
      ) {
        nodes {
          frontmatter {
            slug
            stack
            title
            thumb {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          id
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <ProjectsWrapper>
        {projects.map((project: ProjectProps) => (
          <Link
            to={"/markdown/project/" + project.frontmatter.slug}
            key={project.id}
          >
            <div>
              <GatsbyImage
                image={
                  project.frontmatter.thumb.childImageSharp.gatsbyImageData
                }
                alt=""
              />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </ProjectsWrapper>
    </Layout>
  )
}

export default Project
