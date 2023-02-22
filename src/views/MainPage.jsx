const React = require('react');
const Layout = require('./Layout');

function MainPage({ username }) {
  return (
    <Layout username={username}>
      <div className="mx-auto" style={{ width: '1200px' }}>
        <section>
          <div className="d-flex">
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  Уровень
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    First Item
                  </a>
                  <a className="dropdown-item" href="#">
                    Second Item
                  </a>
                  <a className="dropdown-item" href="#">
                    Third Item
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  Фильтр по разделам
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    First Item
                  </a>
                  <a className="dropdown-item" href="#">
                    Second Item
                  </a>
                  <a className="dropdown-item" href="#">
                    Third Item
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-inline-block">
            <div>
              <div
                className="d-inline-block"
                style={{
                  verticalAlign: 'top',
                  display: 'inline-block',
                  zoom: '1',
                  width: '460px',
                  margin: '0',
                }}
              >
                <div
                  style={{
                    background: '#F6F6F6',
                    margin: '0 0 10px',
                    padding: '10px 20px 60px',
                    position: 'relative',
                    borderRadius: '4px',
                    minHeight: '80px',
                  }}
                >
                  <div
                    style={{
                      background: '#FFFFFF',
                      color: '#403C39',
                      float: 'none',
                      fontSize: '18px',
                      margin: '0',
                      padding: '7px',
                      textAlign: 'center',
                      width: '55px',
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      marginTop: '-23px',
                      // fontSize: '16px',
                      // marginTop: '-31px',
                      // width: '85px',
                    }}
                  >
                    <span style={{
                      fontSize: '14px', color: '#8f8f8f', display: 'block', marginBottom: '4px',
                    }}
                    >
                      последний голос в
                    </span>
                    <strong style={{ marginTop: '0px' }}>13:29:00</strong>
                  </div>
                  <div style={{
                    height: 'auto', minHeight: '42px', fontSize: '16px', lineHeight: '21px', marginRight: '95px',
                  }}
                  >
                    <a
                      href="#"
                      style={{
                        border: '0', fontSize: '100%', font: 'inherit', verticalAlign: 'baseline', margin: '0', padding: '0',
                      }}
                    >
                      Уголовная ответственность за похищение ребенка бывшим
                      супругом отдельно проживающим
                    </a>
                  </div>
                  <div style={{
                    margin: '0', fontSize: '12px', position: 'absolute', left: '20px', bottom: '30px',
                  }}
                  >
                    <small>Уровень инициативы: Федеральный</small>
                  </div>
                  <div style={{
                    color: '#8F8F8F', fontSize: '14px', lineHeight: '18px', padding: '0', position: 'absolute', left: '20px', bottom: '10px',
                  }}
                  >
                    <strong>Всего 1435 голоса</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <script src="assets/bootstrap/js/bootstrap.min.js" />
    </Layout>
  );
}

module.exports = MainPage;
