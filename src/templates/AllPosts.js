import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const AllPosts =props=>{
    const {pageContext} = props
    const {allData}= pageContext
console.log(pageContext);
    return (
        <Layout>
            {
                allData.map(item=>{
                    return(
                        <div key={`container_${item.node.slug}`}>
                            <Link to={`/blog/${item.node.slug}`}> {item.node.title}</Link>
                        </div>
                    )
                })
            }
        </Layout>

    )
}
export default AllPosts
