const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <link rel="stylesheet" href="/styles/form.css" />
      <script defer src="/js/login.js" />
      <h2>Страница для зарегестрированных пользователей!</h2>
      <form name="login" id="form-login">
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
      
    </Layout>
  );
};
