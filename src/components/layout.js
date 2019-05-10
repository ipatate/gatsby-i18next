/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import Header from "./header"
import "./layout.css"

const Layout = props => {
  const { pageContext, location } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            languages
            defaultLang
          }
        }
      }
    `
  )

  const { i18n } = useTranslation()
  const langRegex = `${site.siteMetadata.languages.join("|")}`

  const changeLanguage = lng => {
    if (!pageContext) return
    const { lang } =
      // change language
      i18n.changeLanguage(lng)
    const { pathname } = location
    // if not the lang used
    if (lang !== lng) {
      let t = `${lng}/${pathname}`
      const maskSearch = new RegExp(`^/(${langRegex})/`)
      const maskReplace = new RegExp(`^/(${langRegex})/?(.+)`)
      // search lang in url and replace
      if (pathname.match(maskSearch) !== null) {
        t = pathname.replace(maskReplace, `/${lng}/$2`)
      }
      // got to new page
      navigate(t)
    }
  }
  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <button onClick={() => changeLanguage("en")}>en</button>
      <button onClick={() => changeLanguage("fr")}>fr</button>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
