const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Roboto.css" />
        <link rel="stylesheet" href="/css/Roboto%20Slab.css" />
        <link rel="stylesheet" href="/css/Banner-Heading-Image-images.css" />
        <link rel="stylesheet" href="/css/Black-Navbar.css" />
        <link rel="stylesheet" href="/css/Login-with-overlay-image.css" />
        <link
          rel="stylesheet"
          href="/css/Navbar-Centered-Brand-Dark-icons.css"
        />
        <script defer src="/js/bootstrap.min.js" />
        <title>Document</title>
      </head>
      <body style={{ background: 'var(--bs-gray-600)' }}>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/addInit">
              <span>Голосование за инициативы</span>
            </a>
            <button
              dataBsToggle="collapse"
              className="navbar-toggler"
              dataBsToggle="#navcol-6"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse flex-grow-0 order-md-first"
              id="navcol-6"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item" />
                <li className="nav-item" />
              </ul>
              <div className="d-md-none my-2">
                <button className="btn btn-light me-2" type="button">
                  Button
                </button>
                <button className="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
            <div className="d-none d-md-block">
              <a className="btn btn-light me-2" role="button" href="#">
                Личный кабинет
              </a>
              <a className="btn btn-primary" role="button" href="#">
                Выход
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
};
