const path= require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages=({actions,graphql})=>{
    const {createPage}= actions
    return graphql(`
        {
            allWordpressPost(sort:{fields:[date], order:DESC}) {
                edges {
                    node {
                        id
                        date( formatString: "/YYYY/MM/DD/" )
                        featured_media {
                            localFile{
                                childImageSharp {
                                    id
                                }
                            }
                        }
                        slug
                        title
                    }
                }
            }
        }
    `).then(result=>{
        if (result.errors){
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
        }
  
        const postTemplate = path.resolve(`./src/templates/post.js`)
        const allPosts = result.data.allWordpressPost.edges

        allPosts.forEach(element=>{
            createPage({
                path:`/blog/${element.node.slug}`,
                component:postTemplate,
                context:{
                    id:element.node.id
                }
            })
        })
    })
}
