const React = require('react');
const Layout = require('../Layout');

module.exports = function RegisterPage() {
  return (
    <Layout>
      <main className="main">
        <div className="container">
          <section className="wrapper">
            <div className="heading">
              <h1 className="text text-large">Регистрация</h1>
            </div>
            <form name="signin" className="form">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Имя
                </label>
                <input
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  name="firstName"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Фамилия
                </label>
                <input
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  name="lastName"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Отчество
                </label>
                <input
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  name="middleName"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Email
                </label>
                <input
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  name="email"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  Пароль
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  name="password"
                />
              </div>
              <button
                type="button"
                data-type="register-button"
                data-url="/auth/register"
                className="btn btn-primary btn-block mb-4"
              >
                Register
              </button>
              <br />
              <div className="heading">
                <h5 className="text text-large">Авторизуйтесь с помощью:</h5>
              </div>
              <a href="/auth/google/">
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary" type="submit">
                    Отправить
                  </button>
                </div>
              </a>
              <a href="/auth/google/">
                <div id="google" class="google">
                  Google
                  <div class="cover google">
                    <li class="fa fa-google-plus fa-2x"></li>
                  </div>
                </div>
              </a>
            </form>
          </section>
        </div>
      </main>
    </Layout>
  );
};
