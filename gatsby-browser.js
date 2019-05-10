// const React = require("react")

exports.wrapRootElement = ({ element }) => {
  require("./src/services/i18n")
  return element
}
