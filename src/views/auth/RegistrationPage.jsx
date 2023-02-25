const React = require('react');
const Layout = require('../Layout');

module.exports = function RegisterPage() {
  return (
    <Layout>
      <div className="containerAuthBody">
        <main className="mainAut">
          <div className="containerAuth">
            <div className="commonBody">
              <h3 className="authH3">Регистрация аккаунта</h3>
              <form name="signinForm" action="/auth/signin" method="post">
                <div className="authInput">
                  <input
                    name="name"
                    className="inputexample"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Имя"
                    required
                  ></input>
                </div>
                <div className="authInput">
                  <input
                    name="name"
                    className="inputexample"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Фамилия"
                    required
                  ></input>
                </div>
                <div className="authInput">
                  <input
                    name="name"
                    className="inputexample"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Отчество"
                    required
                  ></input>
                </div>
                <div className="authInput">
                  <input
                    name="password"
                    className="inputexample"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Пароль"
                    required
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "15px 0",
                  }}
                >
                  <a href="/auth/google">
                    <img src="/img/google-logo.png"></img>
                  </a>
                </div>
                <button type="submit" className="btnAuth">
                  Регистрация
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      {/* <main className="main">
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
      </main> */}
    </Layout>
  );
};
