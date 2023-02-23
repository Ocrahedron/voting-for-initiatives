const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Black-Navbar.css" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
          integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
          crossOrigin="anonymous"
        />
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
        {/* <script defer src="assets/bootstrap/js/bootstrap.min.js" /> */}
      </body>
    </html>
  );
};
