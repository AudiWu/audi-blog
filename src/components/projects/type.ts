 export type ProjectProps = {
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
