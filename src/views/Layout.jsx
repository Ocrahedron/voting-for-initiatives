const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <script defer src="/js/application.js" />
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/styles.css" />
        <title>Voting-for-initiatives</title>
      </head>

      <body>
        <Navbar user={user} />
        {children}
      </body>

    </html>
  );
};
