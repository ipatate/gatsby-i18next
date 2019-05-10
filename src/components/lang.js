// import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

/**
 * set language for page from pageContext
 * use it for ssr
 * @param props
 */
const Lang = props => {
  const { i18n } = useTranslation()
  const { pageContext } = props
  if (pageContext) {
    const { lang } = pageContext
    i18n.changeLanguage(lang)
  }
  return props.children
}

Lang.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Lang
