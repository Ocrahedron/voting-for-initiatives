const React = require('react');
const Layout = require('./Layout');

function MainPage({ username, allInit }) {
  return (
    <Layout username={username}>
      <div className="mx-auto" style={{ maxWidth: '940px' }}>
        <iframe
          allowfullscreen=""
          frameBorder="0"
          src="https://cdn.bootstrapstudio.io/placeholders/map.html"
          style={{ width: '100%', height: '400' }}
        />
      </div>
      <div className="mx-auto" style={{ maxWidth: '940px' }}>
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
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <input type="checkbox" />
                    &nbsp; Федеральные
                  </li>
                  <li className="dropdown-item">
                    <input type="checkbox" />
                    &nbsp; Региональные
                  </li>
                  <li className="dropdown-item">
                    <input type="checkbox" />
                    &nbsp; Муниципальные
                  </li>
                </ul>
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
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <input type="checkbox" />
                    &nbsp;Транспорт и дороги
                  </li>
                  <li className="dropdown-item">
                    <input type="checkbox" />
                    &nbsp;Природные ресурсы и экология
                  </li>
                  <li className="dropdown-item">
                    <input type="checkbox" />
                    &nbsp;Инфраструктура города
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {allInit?.map(el => (
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
                      padding: '7px 0',
                      textAlign: 'center',
                      // width: '55px',
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      marginTop: '-23px',
                      fontSize: '16px',
                      marginTop: '-31px',
                      width: '85px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '14px',
                        color: '#8f8f8f',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      последний голос в
                    </span>
                    <strong style={{ marginTop: '0px' }}>13:29:00</strong>
                  </div>
                  <div
                    style={{
                      height: 'auto',
                      minHeight: '42px',
                      fontSize: '16px',
                      lineHeight: '21px',
                      marginRight: '95px',
                    }}
                  >
                    <a
                      href={`/initPage/${el.id}`}
                      style={{
                        border: '0',
                        fontSize: '100%',
                        font: 'inherit',
                        verticalAlign: 'baseline',
                        margin: '0',
                        padding: '0',
                      }}
                    >
                      {el.title}
                    </a>
                  </div>
                  <div
                    style={{
                      margin: '0',
                      fontSize: '12px',
                      position: 'absolute',
                      left: '20px',
                      bottom: '30px',
                    }}
                  >
                    <small>Уровень инициативы: {el.level}</small>
                  </div>
                  <div
                    style={{
                      color: '#8F8F8F',
                      fontSize: '14px',
                      lineHeight: '18px',
                      padding: '0',
                      position: 'absolute',
                      left: '20px',
                      bottom: '10px',
                    }}
                  >
                    <strong>Всего {el.voites_yes + el.voites_no} голоса</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
