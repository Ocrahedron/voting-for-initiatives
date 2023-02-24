const React = require("react");
const Layout = require("./Layout");

function MainPage({ username, allInit }) {
  return (
    <Layout username={username}>
      <div
        className="mx-auto"
        style={{ maxWidth: "940px", display: "flex", alignItems: "center" }}
      >
        <iframe
          allowfullscreen=""
          frameBorder="0"
          src="https://cdn.bootstrapstudio.io/placeholders/map.html"
          style={{ width: "100%", height: "400" }}
        />
        <div style={{ marginLeft: "5px" }}>
          <a href="/addInit">
            <button type="button" class="btn btn-success btn-lg">
              Опубликовать инициативу
            </button>
          </a>
        </div>
      </div>
      <div className="mx-auto" style={{ maxWidth: "940px" }}>
        <section>
          <div className="d-flex">
            <form name="filterBox" style={{ display: "flex" }}>
              <div id='levelBox' className="dropdown">
                <button
                  name="levelButton"
                  className="btn btn-primary dropdown-toggle"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  Уровень
                </button>
                <div id='allInputsLevel' className="dropdown-menu">
                  <div id='inputLevel1' className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="level"
                      id="level1"
                      value="Федеральный"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      &nbsp;Федеральный
                    </label>
                  </div>
                  <div className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="level"
                      id="level2"
                      value="Региональный"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      &nbsp;Региональный
                    </label>
                  </div>
                  <div className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="level"
                      id="level3"
                      value="Муниципальные"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      &nbsp;Муниципальные
                    </label>
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
                  <div className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id="category1"
                      value="Транспорт и дороги"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      &nbsp;Транспорт и дороги
                    </label>
                  </div>
                  <div className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id="category2"
                      value="Природные ресурсы и экология"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      &nbsp;Природные ресурсы и экология
                    </label>
                  </div>
                  <div className="dropdown-item">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id="category3"
                      value="Инфраструктура города"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      &nbsp;Инфраструктура города
                    </label>
                    </div>
                    </div>
                </div>
              </div>
              <button
                style={{ marginLeft: "5px" }}
                type="submit"
                class="btn btn-warning"
              >
                Фильтр
              </button>
            </form>
          </div>
          <div
            id='showAllInitsContainer'
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "940px",
              flexWrap: "wrap",
            }}
          >
            {allInit?.map((el) => (
              <div className="d-inline-block">
                <div>
                  <div
                    className="d-inline-block"
                    style={{
                      verticalAlign: "top",
                      display: "inline-block",
                      zoom: "1",
                      width: "460px",
                      margin: "0",
                    }}
                  >
                    <div
                      style={{
                        background: "#F6F6F6",
                        margin: "0 0 10px",
                        padding: "10px 20px 60px",
                        position: "relative",
                        borderRadius: "4px",
                        minHeight: "80px",
                      }}
                    >
                      <div
                        style={{
                          background: "#FFFFFF",
                          color: "#403C39",
                          float: "none",
                          fontSize: "18px",
                          margin: "0",
                          padding: "7px 0",
                          textAlign: "center",
                          // width: '55px',
                          position: "absolute",
                          right: "20px",
                          top: "50%",
                          marginTop: "-23px",
                          fontSize: "16px",
                          marginTop: "-31px",
                          width: "85px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#8f8f8f",
                            display: "block",
                            marginBottom: "4px",
                          }}
                        >
                          последний голос в
                        </span>
                        <strong style={{ marginTop: "0px" }}>13:29:00</strong>
                      </div>
                      <div
                        style={{
                          height: "auto",
                          minHeight: "42px",
                          fontSize: "16px",
                          lineHeight: "21px",
                          marginRight: "95px",
                        }}
                      >
                        <a
                          href={`/initPage/${el.id}`}
                          style={{
                            border: "0",
                            fontSize: "100%",
                            font: "inherit",
                            verticalAlign: "baseline",
                            margin: "0",
                            padding: "0",
                          }}
                        >
                          {el.title}
                        </a>
                      </div>
                      <div
                        style={{
                          margin: "0",
                          fontSize: "12px",
                          position: "absolute",
                          left: "20px",
                          bottom: "30px",
                        }}
                      >
                        <small>Уровень инициативы: {el.level}</small>
                      </div>
                      <div
                        style={{
                          color: "#8F8F8F",
                          fontSize: "14px",
                          lineHeight: "18px",
                          padding: "0",
                          position: "absolute",
                          left: "20px",
                          bottom: "10px",
                        }}
                      >
                        <strong>
                          Всего {el.voites_yes + el.voites_no} голоса
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
