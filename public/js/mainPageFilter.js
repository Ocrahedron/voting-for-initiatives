const {filterBox} = window.document.forms
const showAllInitsContainer = document.querySelector('#showAllInitsContainer')

filterBox?.addEventListener('submit', async (event) => {
event.preventDefault();
try {
  const response = await fetch('/showChoosedInits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      level: event.target.level.value,
      category: event.target.category.value
    })
  })
  const result = await response.json()

  if (result.isShowInitsSuccessful){

    showAllInitsContainer.innerHTML = ''

    result.allInits.forEach(el => {
      const init = document.createElement('div')
      init.classList.add('d-inline-block')
      init.innerHTML = `
      <div>
                  <div
                    class="d-inline-block"
                    style=
                      'verticalAlign: top;
                      display: inline-block;
                      zoom: 1;
                      width: 460px;
                      margin: 0'
                  >
                    <div
                      style=
                        'background: #F6F6F6;
                        margin: 0 0 10px;
                        padding: 10px 20px 60px;
                        position: relative;
                        border-radius: 4px;
                        min-height: 80px'
                    >
                      <div
                        style=
                          'background: #FFFFFF;
                          color: #403C39;
                          float: none;
                          fontSize: 18px;
                          margin: 0;
                          padding: 7px 0;
                          text-align: center;
                          position: absolute;
                          right: 20px;
                          top: 50%;
                          margin-top: -23px;
                          font-size: 16px;
                          margin-top: -31px;
                          width: 85px'
                      >
                        <span
                          style=
                            'font-size: 14px;
                            color: #8f8f8f;
                            display: block;
                            margin-bottom: 4px'
                        >
                          последний голос в
                        </span>
                        <strong style='margin-top: 0px'>13:29:00</strong>
                      </div>
                      <div
                        style=
                          'height: auto;
                          min-height: 42px;
                          font-Size: 16px;
                          line-height: 21px;
                          margin-right: 95px'
                      >
                        <a
                          href=/initPage/${el.id}
                          style=
                            'border: 0;
                            font-size: 100%;
                            font: inherit;
                            vertical-align: baseline;
                            margin: 0;
                            padding: 0'
                        >
                          ${el.title}
                        </a>
                      </div>
                      <div
                        style=
                          'margin: 0;
                          font-size: 12px;
                          position: absolute;
                          left: 20px;
                          bottom: 30px'
                      >
                        <small>Уровень инициативы: ${el.level}</small>
                      </div>
                      <div
                        style=
                          'color: #8F8F8F;
                          font-size: 14px;
                          line-height: 18px;
                          padding: 0;
                          position: absolute;
                          left: 20px;
                          bottom: 10px'
                        }}
                      >
                        <strong>
                          Всего ${el.voites_yes + el.voites_no} голоса
                        </strong>
                      </div>
                    </div>
                  </div>
      `
      showAllInitsContainer.appendChild(init)
    })
  }
} catch (error) {
  window.alert(result.message)
}
})
