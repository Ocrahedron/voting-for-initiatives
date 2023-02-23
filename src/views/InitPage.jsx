const React = require('react');
const Layout = require('./Layout');

module.exports = function InitPage({ username }) {
  return (
    <Layout username={username}>
      <div>
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          <section>
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <small>Инициатива №</small>
                  <small
                    style={{
                      marginLeft: "5px",
                      marginRight: "30px",
                      background: "#1539ba",
                      color: "rgb(255,255,255)",
                    }}
                  >
                    50Ф25204
                  </small>
                </div>
                <div>
                  <small>Уровень инициативы:</small>
                  <small
                    style={{
                      paddingRight: "0px",
                      marginBottom: "0px",
                      marginLeft: "5px",
                    }}
                  >
                    Федеральный
                  </small>
                </div>
              </div>
              <h1>
                Обеспечить население Российской Федерации бесплатной
                стоматологической помощью
              </h1>
              <div
                style={{
                  paddingTop: "20px",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  paddingBottom: "40px",
                  // background: "var(--bs-gray-400)",
                  marginBottom: "5px",
                }}
              >
                <div>
                  <p style={{ fontWeight: "bold", paddingBottom: "1px" }}>
                    Голосование закончится
                  </p>
                </div>
                <div
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginTop: "-4px",
                    marginBottom: "9px",
                  }}
                >
                  <p>22-02-2024</p>
                </div>
                <div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <p>За инициативу подано:</p>
                    <span
                      style={{ marginLeft: "5px", color: "var(--bs-success)" }}
                    >
                      115 голосов
                    </span>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <p>Против инициативы подано:</p>
                    <span style={{ marginLeft: "5px", color: "var(--bs-red)" }}>
                      23 голоса
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    <a href="#">Все инициативы автора</a>
                  </div>
                </div>
              </div>
              <div
                style={{
                  // background: "var(--bs-gray-400)",
                  paddingTop: "20px",
                  paddingRight: "20px",
                  paddingBottom: "40px",
                  paddingLeft: "20px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <p style={{ paddingBottom: "20px" }}>
                    За последние десятилетия поражаемость населения Российской
                    Федерации кариесом зубов резко повысилась, особенно у детей.
                    На долю кариеса зубов и его осложнений (пульпит,
                    периодонтит, периостит и др.) приходится более 60% объёма
                    стоматологической помощи, требующей существенных трудовых
                    затрат и материально-технических ресурсов. При
                    несвоевременной профилактике и лечении кариеса зубов
                    (включая временный прикус - временные зубы) возникают
                    осложнения: пульпит, периодонтит, периостит вплоть до
                    одонтогенных воспалительных процессов, в итоге может иметь
                    место выпадание зубов, требующее их протезирования,
                    связанного со значительными материальными расходами.
                    Заболевание слизистой оболочки рта (особенно пародонтиты)
                    приводят к расшатыванию.
                  </p>
                </div>
                <h2 style={{ paddingBottom: "20px" }}>
                  Практический результат
                </h2>
                <div>
                  <p style={{ paddingBottom: "20px" }}>
                    Диспансеризация, профилактика и комплексное лечение
                    стоматологических заболеваний должны дать снижение обращений
                    граждан за стоматологической помощью.&nbsp,Вложение в
                    профилактику стоматологических фоновых и "вторичных"
                    заболеваний, даёт 12-кратный экономический профилактический
                    эффект, включая экономию на лечение "вторичных" заболеваний
                    организма.
                  </p>
                </div>
              </div>
              <h1 style={{ paddingBottom: "20px" }}>Решение</h1>
              <div
                style={{
                  borderRadius: "5px",
                  borderStyle: "solid",
                  borderColor: "var(--bs-gray-700)",
                  marginBottom:'50px'
                }}
              >
                <div>
                  <div
                    style={{
                      paddingTop: "20px",
                      paddingRight: "20px",
                      paddingBottom: "40px",
                      paddingLeft: "20px",
                      marginLeft: "0px",
                      marginBottom: "20px",
                    }}
                  >
                    <p
                      style={{
                        // background: "var(--bs-gray-400)",
                        paddingBottom: "20px",
                      }}
                    >
                      Обеспечить население Российской Федерации бесплатной
                      стоматологической помощью
                      <br />
                    </p>
                  </div>
                </div>
                <div style={{ margin: "0 20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "unset",
                    }}
                  >
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{ background: "var(--bs-green)", width: "36px" }}
                    >
                      +
                    </button>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "5px",
                      }}
                    >
                      <p style={{ marginTop: "revert" }}>
                        Голосовать за решение
                      </p>
                      <span>(879 голосов)</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "unset",
                    }}
                  >
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        background: "var(--bs-red)",
                        width: "36px",
                        height: "36px",
                      }}
                    >
                      -
                    </button>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "5px",
                      }}
                    >
                      <p style={{ marginTop: "revert" }}>
                        Голосовать против решения
                      </p>
                      <span>(30 голосов)</span>
                    </div>
                  </div>
                  <div className="alert alert-success" role="alert">
                    <span>
                      <strong>Внимание!</strong>
                      &nbsp;Отозвать голос можно только один раз в течение 2
                      часов с момента голосования
                    </span>
                  </div>
                  <p>
                    Для рассмотрения решения на федеральном уровне осталось 99
                    121 голос
                  </p>
                  <div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "50%" }}
                      >
                        50%
                      </div>
                    </div>
                  </div>
                  <p>Против решения: 30 голосов</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
