const React = require('react');

module.exports = function Header({ user }) {
  return (
    <nav class="navbar navbar-dark navbar-expand-md bg-dark py-3">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="/">
          <span>Голосование за инициативы</span>
        </a>
        <button
          data-bs-toggle="collapse"
          class="navbar-toggler"
          data-bs-target="#navcol-6"
        >
          <span class="visually-hidden">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-grow-0 order-md-first"
          id="navcol-6"
        >
          <ul class="navbar-nav me-auto">
            <li class="nav-item"></li>
            <li class="nav-item"></li>
          </ul>
          <div class="d-md-none my-2">
            <button class="btn btn-light me-2" type="button">
              Button
            </button>
            <button class="btn btn-primary" type="button">
              Button
            </button>
          </div>
        </div>
        {user ? (
          <div class="d-none d-md-block">
            <a class="btn btn-light me-2" role="button" href="/profile">
              Личный кабинет
            </a>
            <a class="btn btn-primary" role="button" href="/auth/logout">
              Выход
            </a>
          </div>
        ) : (
          <div class="d-none d-md-block">
            <a class="btn btn-light me-2" role="button" href="/auth/login">
              Вход
            </a>
            <a class="btn btn-primary" role="button" href="/auth/register">
              Регистрация
            </a>
          </div>
        )}
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Голосование за инициативы
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a
    //             className="nav-link active"
    //             data-type="main-link"
    //             href="/auth/google"
    //           >
    //             Страница инициатив
    //           </a>
    //         </li>
    //         {user ? (
    //           <>
    //             <li className="nav-item">
    //               <a className="nav-link" data-type="#" href="#">
    //                 Профиль
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link"
    //                 data-type="logout-link"
    //                 href="/auth/logout"
    //               >
    //                 Выйти
    //               </a>
    //             </li>
    //           </>
    //         ) : (
    //           <>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link"
    //                 data-type="login-link"
    //                 href="/auth/login"
    //               >
    //                 Авторизоваться
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link"
    //                 data-type="register-link"
    //                 href="/auth/register"
    //               >
    //                 Зарегистрироваться
    //               </a>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
