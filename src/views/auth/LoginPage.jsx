const React = require('react');
const Layout = require('../Layout');

module.exports = function LoginPage() {
  return (
    <Layout>
    
       <main className="main">
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
      </main>
    </Layout>
  );
};
