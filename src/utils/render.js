require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const render = (reactElement, properties, response) => {
  const props = { ...properties, user: response.locals?.user };
  // properties.user = response.locals.user; // добавляем имя пользователя в пропсы, по ключу username, для компонента Layout
  const reactEl = React.createElement(reactElement, props);

  const html = ReactDOMServer.renderToStaticMarkup(reactEl);

  response.write('<!DOCTYPE html>');
  response.write(html);
  response.end();
};

module.exports = render;
