import React from "react";
import SEO from "../components/seo";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
const BlogPost = ({ data }) => {
  const { wordpressPost } = data;
  return (
    <Layout>
      <div>
        <SEO title={wordpressPost.title} description={wordpressPost.excerpt} />
        <h1>{wordpressPost.title}</h1>
      </div>
      <div>
        {wordpressPost.featured_media === null ? (
          <h1>No featured media</h1>
        ) : (
          <Img
            fluid={wordpressPost.featured_media.localFile.childImageSharp.fluid}
          />
        )}
        Content:
        <br />
        <div>
          <div dangerouslySetInnerHTML={{ __html: wordpressPost.content }} />
        </div>
        <div>
          <Link to="/blog">Go back</Link>
        </div>
      </div>
    </Layout>
  );
};
export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "/YYYY/MM/DD/")
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
