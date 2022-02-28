import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Details, Banner, Content } from "./styles"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Details>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <Banner>
          <GatsbyImage
            image={featuredImg.childImageSharp.gatsbyImageData}
            alt={title}
          />
        </Banner>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Details>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
