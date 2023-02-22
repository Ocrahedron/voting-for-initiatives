const React = require('react');
const Layout = require('./Layout');

module.exports = function Navbar({ user }) {
  return (
    <nav>
      {user && <div> HELLO,user: { user }</div>}
      <a href='/login'>LOGIN</a>
      <a href='/register'>REGISTRATION</a>
      <a href='/'>HOME</a>
      <a href='/auth/google'>GOOGLE AUTH</a>
    </nav>
  )
}
