import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Title } from "../shared/title"
import { ProjectProps } from "./type"
import { Wrapper, ProjectsWrapper } from "./style"

export const Project: React.FC<{}> = () => {
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
    <Wrapper id="project">
      <Title value="Projects" />
      <ProjectsWrapper>
        {projects.map((project: ProjectProps) => (
          <div key={project.id}>
            <GatsbyImage
              image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
              alt={project.frontmatter.slug}
            />
            <h1>{project.frontmatter.title}</h1>
            <h2>{project.frontmatter.stack}</h2>
            <Link to={"/markdown/project/" + project.frontmatter.slug}>
              Documentation
            </Link>
          </div>
        ))}
      </ProjectsWrapper>
    </Wrapper>
  )
}
