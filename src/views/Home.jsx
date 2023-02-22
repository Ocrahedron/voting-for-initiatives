const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user}>
      <div>
        <h2> Страница инициатив</h2>
      </div>
    </Layout>
  );
};
