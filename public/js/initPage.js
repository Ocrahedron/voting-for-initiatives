const container = document.getElementById('container')
const spanYes = document.getElementById('spanYes')
const spanNo = document.getElementById('spanNo')

container?.addEventListener('click', async (event) => {
try {
  if (event.target.tagName === 'BUTTON'){
    if (event.target.name === 'yesButton'){
      const response = await fetch('/addYesVoice', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: event.target.value
        })
      })
      const result = await response.json()
      if (result.isAddVoiceSuccessful) {
        spanYes.innerText= `
        ${result.voice.voites_yes} голосов
        `
      }
    }
  }
} catch (error) {
  window.alert(result.message)
}
})


container?.addEventListener('click', async (event) => {

  try {
    if (event.target.tagName === 'BUTTON'){
      if (event.target.name === 'noButton'){
        const response = await fetch('/addNoVoice', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: event.target.value
          })
        })
        const result = await response.json()
        if (result.isAddVoiceSuccessful) {
          spanNo.innerText= `
          ${result.voice.voites_no} голосов
          `
        }
      }
    }
  } catch (error) {
    window.alert(result.message)
  }
})
