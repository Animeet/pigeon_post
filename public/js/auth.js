const registerForm = document.querySelector('#register-form')


function registerUser(e){
    e.preventDefault();

    const emailInput = document.querySelector('#email-input');
    const passwordInput = document.querySelector('#password-input');

    const formData = {
        email: emailInput.value,
        password: passwordInput.value
    }

    fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(res => res.json()) 
        .then(data => {
            console.log(data)
    });



    // Send a POST fetch request to our register route

    // Attach the form data (email & password) from our inputs to the body

    // Stringify the body object as JSON and console.log the server response
}

registerForm.addEventListener('submit', registerUser);