import React from "react"
import styled from "styled-components"
import { Layout } from "../../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Color } from "../../enums/color"
import { media } from "../../helpers/media"

const BlogsWrapper = styled.div`
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

type BlogsProps = {
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

const Blog: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query BlogsPage {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/markdown/blog/" } }
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

  const blogs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <BlogsWrapper>
        {blogs.map((blog: BlogsProps) => (
          <Link to={"/markdown/blog/" + blog.frontmatter.slug} key={blog.id}>
            <div>
              <GatsbyImage
                image={blog.frontmatter.thumb.childImageSharp.gatsbyImageData}
                alt=""
              />
              <h3>{blog.frontmatter.title}</h3>
              <p>{blog.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </BlogsWrapper>
    </Layout>
  )
}

export default Blog
