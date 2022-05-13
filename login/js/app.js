let loginForm = document.querySelector(".login");
let _username = "Admin";
let _password = "pakistan123";

// check credentials
function checkCredential()
{
    // get user data
    let user = loginForm.username.value.trim();
    let pass = loginForm.password.value.trim();
    if(user == _username && pass == _password)
    {
        window.location.replace("home.html");
    }
}

//prevent reload

function preventReload(event)
{
    event.preventDefault();
}

loginForm.addEventListener('submit', preventReload);
