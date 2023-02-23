const React = require('react');

module.exports = function Header({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
         Голосование за инициативы 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" data-type="main-link" href="/">
               Страница инициатив
              </a>
            </li>
            {user ? (
              <>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-type="#"
                    href="#"
                  >
                    Профиль
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-type="logout-link"
                    href="/auth/logout"
                  >
                  Выйти
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-type="login-link"
                    href="/auth/login"
                  >
                    Авторизоваться
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-type="register-link"
                    href="/auth/register"
                  >
                  Зарегестрироваться
                  </a>
                </li>
              </>
            )}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};
