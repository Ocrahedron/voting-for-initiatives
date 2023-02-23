const React = require('react');
const Layout = require('./Layout');

function Profile({ username }) {
  return (
    <Layout username={username}>
      <div
        className="mx-auto"
        style={{ maxWidth: '1200px', display: 'flex', marginTop: '30px' }}
      >
        <div className="m-auto" style={{ padding: '0 5px' }}>
          <div>
            <h3>Личная информация</h3>
            <div>
              <div style={{ marginBottom: '30px' }}>
                <div className="d-flex">
                  <span>Ф.И.О.:</span>
                  <div>
                    <strong style={{ marginLeft: '15px' }}>
                      Сергей Александрович Ш.
                    </strong>
                  </div>
                </div>
                <div className="d-flex">
                  <span>E-mail:</span>
                  <div style={{ marginRight: '0px', marginLeft: '15px' }}>
                    <strong>xpohuyc@gmail.com</strong>
                  </div>
                </div>
                <br />
                <div className="d-flex">
                  <span style={{ width: '150px' }}>Федеральный округ:</span>
                  <div>
                    <strong style={{ marginLeft: '15px' }}>
                      Центральный федеральный округ
                    </strong>
                  </div>
                </div>
                <div className="d-flex">
                  <span style={{ width: '150px' }}>Регион:</span>
                  <div>
                    <strong style={{ marginLeft: '15px' }}>
                      Тверская область
                    </strong>
                  </div>
                </div>
                <div className="d-flex">
                  <span style={{ width: '150px' }}>Муниципалитет:</span>
                  <div>
                    <strong style={{ marginLeft: '15px' }}>
                      Удомельский муниципальный район
                    </strong>
                  </div>
                </div>
              </div>
              <h4 className="text-center">
                Изменить данные о месте постоянного проживания("прописка")
              </h4>
              <form method="post" action="/profile">
                <div className="d-flex justify-content-between mb-3">
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-
                     default"
                    >
                      Федеральный округ
                    </span>
                    <input
                      name="text"
                      type="text"
                      className="form-control"
                      aria-label="Sizing
                     example input"
                      aria-describedby="inputGroup-sizing-default"
                      style={{ backgroundColor: 'var(--bs-gray-600)' }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-
                     default"
                    >
                      Регион
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing
                     example input"
                      aria-describedby="inputGroup-sizing-default"
                      style={{ backgroundColor: 'var(--bs-gray-600)' }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="input-group mb-2">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-
                     default"
                    >
                      Муниципалитет
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing
                     example input"
                      aria-describedby="inputGroup-sizing-default"
                      style={{ backgroundColor: 'var(--bs-gray-600)' }}
                    />
                  </div>
                </div>
                <div
                  className="mx-auto"
                  style={{ width: '150px', marginLeft: '0px' }}
                >
                  <button
                    className="btn btn-primary mx-auto d-block w-100"
                    type="submit"
                    style={{ width: '150px', borderRadius: '20px' }}
                  >
                    Изменить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Profile;
