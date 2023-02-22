const React = require('react');
const Layout = require('./Layout');

module.exports = function RegisterPage() {
  return (
    <Layout>
      <h2>Страница регистрации нового пользователя</h2>
       <link rel="stylesheet" href="/styles/form.css" />
      <div className="login container registration">
        <form id="form-reg">
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="firstName"
            />
            <label className="form-label" htmlFor="form2Example1">
              Имя
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="lastName"
            />
            <label className="form-label" htmlFor="form2Example1">
              Фамилия
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="email"
            />
            <label className="form-label" htmlFor="form2Example1">
              Email
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              name="password"
            />
            <label className="form-label" htmlFor="form2Example2">
              Пароль
            </label>
          </div>
          <button
            type="button"
            data-type="register-button"
            data-url=""
            className="btn btn-primary btn-block mb-4"
          >
            Register
          </button>
          <div className="message" />
        </form>
      </div>
    </Layout>
  );
};
