const loginForm = document.forms['form-login'];

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch('/api/login', {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(new FormData(loginForm))),
  })
    .then((r) => {
      if (r.status === 200) {
        window.location.href = '/';
      }
    })
    .catch(console.error);
});

const regForm = document.forms['form-reg'];
regForm.addEventListener('submit', (event) => {
  event/preventDefault();
  
  fetch('/api/register', {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(new FormData(regForm))),
  })
  .then((r) => {
    if(r.status ===200) {
      window.location.href = '/login';
    }
  })
  .catch(console.error);
});
