const React = require("react")
const Lang = require("./src/components/lang").default

// exports.wrapRootElement = ({ element }) => {
//   return element
// }

exports.wrapPageElement = ({ element, props }) => {
  // init i18n
  require("./src/services/i18n")
  return <Lang {...props}>{element}</Lang>
}
