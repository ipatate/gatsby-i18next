const fs = require("fs-extra")
const path = require("path")
const config = require("./gatsby-config")

// copy the locales dir to public dir
exports.onPostBootstrap = () => {
  console.log("Copying locales")
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}

// create page version for all languages
exports.onCreatePage = props => {
  const { page } = props
  // site meta data
  const { defaultLang, languages } = config.siteMetadata
  const { createPage, deletePage } = props.actions

  const oldPage = Object.assign({}, page)
  // delete original page
  deletePage(oldPage)
  // create same page but add lang in context
  createPage({
    ...page,
    context: {
      ...page.context,
      lang: defaultLang,
    },
  })
  const _id = (+new Date()).toString(36)
  // map languages and create page for each language
  languages.map(lang => {
    const newPage = Object.assign({}, page)
    // add local in path
    newPage.path = `${lang}${page.path}`
    // create new page with local
    createPage({
      ...newPage,
      context: {
        ...newPage.context,
        lang,
        _id,
      },
    })
  })
}
