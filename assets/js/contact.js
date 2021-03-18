function sendMail(){
    let fullName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userMessage = document.getElementById("message").value;

    var contactParams = {
        from_name: fullName,
        from_email: userEmail,
        message: userMessage
    };

    emailjs.send('Suffolk-Coast','SuffolkCoastMail', contactParams)
    .then(function(response) {
       alert('Email has succesfully sent', response.status, response.text);
    }, function(error) {
       alert('EMAIL FAILED TO SEND...', error);
    });
    return false;
}

