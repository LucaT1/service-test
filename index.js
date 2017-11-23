const { renderToString } = require('react-dom/server')
const { createElement } = require('react')

module.exports = (req, res) => {
  res.end(renderToString(
    createElement('div', { className: 'test' }, 'Hello world')
  ))
}
