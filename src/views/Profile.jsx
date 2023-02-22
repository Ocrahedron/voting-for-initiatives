const React = require('react');
const Layout = require('./Layout');

function Profile({ username }) {
  return (
    <Layout username={username}>
      <div className="mx-auto" style={{ marginTop: '30px' }}>
        <div
          className="m-auto"
          style={{ maxWidth: '900px', display: 'flex' }}
        >
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
              </div>
              <h4 className="text-center">
                Изменить данные о месте постоянного проживания("прописка")
              </h4>
              <form method="post">
                <div className="d-flex justify-content-between mb-3">
                  <label className="form-label">
                    Федеральный округ
                  </label>
                  <div>
                    <select
                      className="form-select"
                      style={{
                        width: '500px', height: '35px', color: 'var(--bs-black)', borderRadius: '10px', borderWidth: '1px',
                      }}
                    >
                      <optgroup label="This is a group">
                        <option value="12" selected="">
                          This is item 1
                        </option>
                        <option value="13">This is item 2</option>
                        <option value="14">This is item 3</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label className="form-label">Регион</label>
                  <div>
                    <select
                      className="form-select"
                      style={{
                        width: '500px', height: '35px', color: 'var(--bs-black)', borderRadius: '10px',
                      }}
                    >
                      <optgroup label="This is a group">
                        <option value="12" selected="">
                          This is item 1
                        </option>
                        <option value="13">This is item 2</option>
                        <option value="14">This is item 3</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label className="form-label">Муниципалитет</label>
                  <div>
                    <select
                      className="form-select"
                      style={{
                        width: '500px', height: '35px', color: 'var(--bs-black)', borderRadius: '10px',
                      }}
                    >
                      <optgroup label="This is a group">
                        <option value="12" selected="">
                          This is item 1
                        </option>
                        <option value="13">This is item 2</option>
                        <option value="14">This is item 3</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="mx-auto" style={{ width: '150px', marginLeft: '0px' }}>
                  <button
                    className="btn btn-primary mx-auto d-block w-100"
                    type="submit"
                    style={{ width: '151px', borderRadius: '20px' }}
                  >
                    Send
                    {' '}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script src="assets/bootstrap/js/bootstrap.min.js" />
    </Layout>
  );
}

module.exports = Profile;
