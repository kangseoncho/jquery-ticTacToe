//function initialize() {
//}
$('#signup').on('click', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8888/register',
        data: JSON.stringify({
            username: $('#newUsername').val(),
            password: $('#newPassword').val()
        }),
        dataType: 'json',
        contentType: 'application/json',
        success: (data) => window.location.href = './../game/index.html'
    })
})



function verify() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8888/verify',
        data: JSON.stringify({
            username: $('#existingUsername').val(),
            password: $('#existingPassword').val()
        }),
        dataType: 'json',
        contentType: 'application/json',
        success: (data) => console.log("i am data", data)
    })
}

// $(document).ready(initialize)