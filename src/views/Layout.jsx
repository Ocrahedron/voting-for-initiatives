const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="\css\Black-Navbar.css" rel="stylesheet" />
        <link href="\css\bootstrap.min.css" rel="stylesheet" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        /> */}
        {/* <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        /> */}
        <script defer src="/js/myRedirect.js" />
        <script defer src="/js/mySubmit.js" />
        <script defer src="/js/application.js" />
        <title>Votes</title>
      </head>
      <body style={{ background: "var(--bs-gray-600)" }}>
        <Navbar user={user} />
        <main>{children}</main>
      </body>
    </html>
  );
};
