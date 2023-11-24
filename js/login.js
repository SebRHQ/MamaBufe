const apiURL = 'http://127.0.0.1:3000/';
document.addEventListener('DOMContentLoaded', function() {
    const loginF = document.getElementById('loginForm');

    loginF.addEventListener('submit', function(event){
        event.preventDefault();

        const username = document.getElementById('email').value;
        const pswd = document.getElementById('password').value;

        const data = {
            email: username,
            password: pswd,
          };

          console.log(JSON.stringify(data));
          
          fetch(apiURL + 'users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('NETWORK ERROR');
              }
              return response.json();
            })
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error('NETWORK ERROR:', error);
            });
    })
})
