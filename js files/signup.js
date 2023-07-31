
var data = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
}
var password, password2, flag = true
function saveFirstName() {
    data.firstName = document.getElementById('firstname').value
}
function saveLastName() {
    data.lastName = document.getElementById('lastname').value
}
function savemail() {
    data.email = document.getElementById('mail').value
}
function saveUserName() {
    data.username = document.getElementById('username').value
}
function savepassword1() {
    password = document.getElementById('password').value
}
function savepassword2() {
    password2 = document.getElementById('passwordrepeat').value
    if (password === password2) {
        data.password = password
    }

}








function signUp() {


    for (let names in data) {
        if (!data[names]) {
            flag = false
        }

        if (flag) {
            fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    // Handle the successful response here
                    var ele = `<div class="alert alert-success m-0 mx-2 alert-dismissible fade show" role="alert">
                        <strong>Congratulations!</strong> You Have Signed Up Successfully
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`
                    createelement(ele, "alert");

                })
                .catch(error => {
                    // Handle errors here
                    var ele = `<div class="alert alert-warning m-0 mx-2 alert-dismissible fade show" role="alert">
                        <strong>Warning</strong> There was an Error , Please try again
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`
                    createelement(ele, "alert");
                });

        } else {
            var ele = `<div class="alert alert-warning m-0 mx-2 alert-dismissible fade show" role="alert">
            <strong>Warning</strong> Please fill all Fields
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`
            createelement(ele, "alert");

        }



    }



}





function createelement(src, id) {
    $(document).ready(function () {
        const element = document.getElementById(id);

        element.innerHTML = src
    })
}
