import React from "react"
import Link from "../components/link"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => {
  return (
    <Layout {...props}>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
