const React = require('react');
const Layout = require('./Layout');

function AddInit({ username }) {
  return (
    <Layout username={username}>
      <div
        style={{
          maxWidth: '940px',
          margin: '0 auto',
          padding: '0 0 180px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        <section
          style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
        >
          <div
            style={{
              float: 'left',
              width: '620px',
              fontSize: '14px',
              lineHeight: '21px',
              color: '#2d2d2d',
            }}
          >
            <h1
              style={{
                lineHeight: '30px',
                color: '#403C39',
                fontSize: '24px',
                fontWeight: 'bold',
                padding: '0 0 19px',
                marginTop: '20px',
              }}
            >
              Публикация инициативы
            </h1>
            <div
              style={{
                border: '0',
                fontSize: '100%',
                font: 'inherit',
                verticalAlign: 'baseline',
                margin: '0',
                padding: '0',
              }}
            >
              <div />
              <p
                style={{
                  border: '0',
                  fontSize: '100%',
                  font: 'inherit',
                  verticalAlign: 'baseline',
                  margin: '0',
                  padding: '0 0 21px',
                }}
              >
                Форма подачи инициативы заполнена на&nbsp;
                <strong>60%</strong>
              </p>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #a2a2a2',
                  width: '618px',
                  margin: '0 0 16px',
                  position: 'relative',
                  '-webkit-border-radius': '12px',
                  '-moz-border-radius': '12px',
                  borderRadius: '12px',
                }}
              >
                <div className="progress">
                  <div
                    className="progress-bar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '50%' }}
                  >
                    50%
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="alert alert-success"
                  role="alert"
                  style={{
                    padding: '8px 35px 8px 14px',
                    marginBottom: '20px',
                    color: '#c09853',
                    textShadow: '0 1px 0 rgb(255 255 255 / 50%)',
                    backgroundColor: '#fcf8e3',
                    border: '1px solid #fbeed5',
                    '-webkit-border-radius': '4px',
                    '-moz-border-radius': '4px',
                    borderRadius: '4px',
                  }}
                >
                  <span>
                    Указанная Вами информация сохраняется в автоматическим
                    режиме при изменении данных инициативы или каждые 30 секунд.
                    При потере доступа к сети Интернет, Вы всегда сможете
                    открыть черновик инициативы в разделе Моя
                    активность/Черновики.
                  </span>
                </div>
              </div>
              <form action="/addInit" method="POST">

                <h3
                  style={{
                    margin: '0 0 6px',
                    color: '#403C39',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '0 0 19px',
                  }}

                >
                  Введите название инициативы
                </h3>
                <input
                  name="title"
                  className="form-control"
                  type="text"
                  style={{
                    background: '#fff',
                    height: '18px',
                    border: '1px solid #D1DAE4',
                    padding: '4px 15px 5px',
                    color: '#6B6565',
                    font: '14px/18px Trebuchet M, Arial, sansSerif',
                    outline: '0',
                    position: 'relative',
                    '-webkit-border-radius': '8px',
                    '-moz-border-radius': '8px',
                    borderRadius: '8px',
                    '-moz-box-shadow': '0px 1px 1px 0px #D9D9D9 inset',
                    '-webkit-box-shadow': '0px 1px 1px 0px #d9d9d9 inset',
                    boxShadow: '0px 1px 1px 0px #d9d9d9 inset',
                    marginBottom: '15px',
                  }}
                />

                <h3
                  style={{
                    margin: '0 0 6px',
                    color: '#403C39',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '0 0 19px',
                  }}
                >
                  Определение категории инициативы
                </h3>
                <div style={{ marginBottom: '20px' }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id="category1"
                      value="Транспорт и дороги"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Транспорт и дороги
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id="category2"
                      value="Природные ресурсы и экология"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Природные ресурсы и экология
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id="category3"
                      value="Инфраструктура города"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Инфраструктура города
                    </label>
                  </div>
                </div>
                <h3
                  style={{
                    margin: '0 0 6px',
                    color: '#403C39',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '0 0 19px',
                  }}

                >
                  Описание проблемы
                </h3>
                <textarea
                  name="body"
                  className="form-control"
                  style={{
                    width: '598px',
                    height: '238px',
                    overflow: 'auto',
                    resize: 'none',
                    padding: '3px 5px 4px 15px',
                    marginBottom: '20px',
                  }}

                />
                {/* <h3
                  style={{
                    margin: '0 0 6px',
                    color: '#403C39',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '0 0 19px',
                  }}

                >
                  Добавить файлы
                </h3> */}
                {/* <span
                  style={{
                    position: 'absolute',
                    marginTop: '-22px',
                    fontSize: '10px',
                  }}
                >
                  не более 10 страниц, форматы: doc, docx, pdf, rtf, odt
                </span> */}
                {/* <div
                  style={{
                    border: '0',
                    fontSize: '100%',
                    font: 'inherit',
                    verticalAlign: 'baseline',
                    margin: '0',
                    padding: '0',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%' }}>
                    <div
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        direction: 'ltr',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            background:
                              'url(//static.roi.ru/themes/frontend/style/clip.png) no-repeat 14px 11px',
                            padding: '12px 0 46px 33px',
                            fontSize: '14px',
                            lineHeight: '18px',
                            color: '#404040',
                          }}
                        >
                          <p>
                            Чтобы добавить файл перетащите его на эту область
                          </p>
                          <a href="/#">или выберите файлы на компьютере...</a>
                        </div>
                      </div>
                    </div> */}
                {/* <input
                      className="form-control"
                      type="file"
                      style={{
                        position: 'absolute',
                        right: '0px',
                        top: '0px',
                        fontFamily: 'Arial',
                        fontSize: '118px',
                        margin: '0px',
                        padding: '0px',
                        cursor: 'pointer',
                        opacity: '0',
                        height: '65px',
                      }}
                    />
                  </div>

                </div>
                <h3
                  style={{
                    margin: '0 0 6px',
                    color: '#403C39',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '0 0 19px',
                  }}

                >
                  Фото изображения
                </h3>
                <span
                  style={{
                    position: 'absolute',
                    marginTop: '-22px',
                    fontSize: '10px',
                  }}
                >
                  не более 5 Mb, форматы: jpeg, jpg, pdf, rtf, odt.
                </span>
                <div
                  style={{
                    border: '0',
                    fontSize: '100%',
                    font: 'inherit',
                    verticalAlign: 'baseline',
                    margin: '0',
                    padding: '0',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%' }}>
                    <div
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        direction: 'ltr',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            background:
                              'url(//static.roi.ru/themes/frontend/style/clip.png) no-repeat 14px 11px',
                            padding: '12px 0 46px 33px',
                            fontSize: '14px',
                            lineHeight: '18px',
                            color: '#404040',
                          }}
                        >
                          <p>
                            Чтобы добавить файл перетащите его на эту область
                          </p>
                          <a href="/#">или выберите файлы на компьютере...</a>
                        </div>
                      </div>
                    </div>
                    <input
                      className="form-control"
                      type="file"
                      style={{
                        position: 'absolute',
                        right: '0px',
                        top: '0px',
                        fontFamily: 'Arial',
                        fontSize: '118px',
                        margin: '0px',
                        padding: '0px',
                        cursor: 'pointer',
                        opacity: '0',
                        height: '64px',
                      }}
                    />
                  </div>
                </div> */}
                <h3
                  style={{
                    margin: '0 0 6px',
                    color: '#403C39',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '0 0 19px',
                  }}
                >
                  Выберите уровень инициативы
                </h3>
                <select
                  name="select"
                  className="form-select"
                  style={{
                    background: '#fff',
                    border: '1px solid #D1DAE4',
                    padding: '4px 15px 5px',
                    color: '#6B6565',
                    font: "14px/18px 'Trebuchet MS', Arial, sans-serif",
                    outline: '0',
                    position: 'relative',
                    '-webkit-border-radius': '8px',
                    '-moz-border-radius': '8px',
                    borderRadius: '8px',
                    '-moz-box-shadow': '0px 1px 1px 0px #D9D9D9 inset',
                    '-webkit-box-shadow': '0px 1px 1px 0px #d9d9d9 inset',
                    boxShadow: '0px 1px 1px 0px #d9d9d9 inset',
                    marginBottom: '20px',
                    width: '300px',
                  }}
                >
                  <optgroup name="option" label="This is a group">
                    <option name="level" value="Федеральный" selected="">
                      Федеральный
                    </option>
                    <option name="level" value="Региональный">Региональный</option>
                    <option name="level" value="Муниципальный">Муниципальный</option>
                  </optgroup>
                </select>
                {/* <h3
                  style={{
                    margin: '0 0 6px',
                    color: '#403C39',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '0 0 19px',
                  }}
                >
                  Решение
                </h3>
                <textarea
                  className="form-control"
                  style={{
                    width: '598px',
                    height: '238px',
                    marginBottom: '20px',
                  }}
                />
                <h3
                  style={{
                    margin: '0 0 6px',
                    color: '#403C39',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '0 0 19px',
                  }}
                >
                  Практический результат
                </h3>

                <textarea
                  className="form-control"
                  style={{
                    width: '598px',
                    height: '238px',
                    marginBottom: '20px',
                  }}
                /> */}
                <div>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">
                      Отправить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <script src="js/jquery.min.js" />
      <scrip src="js/main.js" />
    </Layout>
  );
}

module.exports = AddInit;
