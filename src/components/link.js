import React from "react"
import { useTranslation } from "react-i18next"
import { Location } from "@reach/router"

import { Link } from "gatsby"

/**
 * add local to props "to" if not exist
 *
 * @return Link
 */
const LinkI18n = props => {
  const { i18n } = useTranslation()
  const { language } = i18n
  // new props and remove Location props
  const _props = { ...props }
  delete _props.navigate
  delete _props.location
  // location
  const { location } = props
  const { pathname } = location
  const { to } = props

  // regex with language used
  const maskSearch = new RegExp(`^/(${language})/`)
  // if lang is in url (not lang by default)
  const inUrl = pathname.match(maskSearch) !== null
  // not in "to" and in url
  if (to.match(maskSearch) === null && inUrl === true) {
    const _to = `/${language}${to}`
    const newProps = { ..._props, ...{ to: _to } }
    return <Link {...newProps}>{props.children}</Link>
  }
  return <Link {..._props}>{props.children}</Link>
}

// wrap with Location for keep props location in LinkI18n
export default props => (
  <Location>
    {locationprops => <LinkI18n {...locationprops} {...props} />}
  </Location>
)
