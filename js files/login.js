





var mail, userName, passWord

function savemail() {
    mail = document.getElementById('email').value
}
function saveUserName() {
    userName = document.getElementById('username').value
}
function savePassword() {
    passWord = document.getElementById('password').value
}

function signIn() {


    fetch(`https://dummyjson.com/users/search?q=${mail}&select=email,username,password`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {

            if (data.users[0].email === mail && data.users[0].username === userName && data.users[0].password === passWord) {
                // Handle the successful response here
                window.location('./login.html')
            }

        })
        .catch(error => {
            // Handle errors here

            var ele = `<div class="alert alert-warning m-0 mx-2 alert-dismissible fade show" role="alert">
            <strong>Warning</strong> There was an Error , Please try again
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`
            createelement(ele, "alert");
        });


}





function createelement(src, id) {
    $(document).ready(function () {
        const element = document.getElementById(id);

        element.innerHTML = src
    })
}