const React = require('react');
const Layout = require('../Layout');

module.exports = function LoginPage() {
  return (
    <Layout>
      <div className="containerAuthBody">
        <main className="mainAut">
          <div className="containerAuth">
            <div className="commonBody">
              <h3 className="authH3">Вход в аккаунт</h3>
              <form name="signinForm" action="/auth/signin" method="post">
                <div className="authInput">
                  <input
                    name="name"
                    className="inputexample"
                    type="text"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Логин"
                    required
                  ></input>
                </div>
                <div className="authInput">
                  <input
                    name="password"
                    className="inputexample"
                    type="password"
                    id="exampleInputPassword1"
                    placeholder="Пароль"
                    required
                  ></input>
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <span className='spanText'>или</span>
                </div> */}
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
                  Вход
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
              <h1 className="text text-large">Авторизируйтесь</h1>
            </div>     
        <form>
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
              Password
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
            data-type="login-button"
            className="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>
          <div className="message" />
          <div className="text-center">
            <p>
              Нет аккаунта?{' '}
              <a href="/auth/register" data-type="register-link">
                Создать аккаунт
              </a>
            </p>
          </div>
        </form>
     
      </section>
      </div>
      </main> */}
    </Layout>
  );
};
