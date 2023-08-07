function sendEmail(){
    Email.send({
        SecureToken : "d7f8722f-b23c-4127-b9cc-0a6c6c062570",
        To : 'chepkosum@gmail.com',
        From : document.getElementById("email").value,
        Subject : "MESSAGE FROM YOUR WEBSITE",
        Body : "Business Name:" +document.getElementById("business").value
              + "<br> Email:" +document.getElementById("email").value
              + "<br> Project Name:" +document.getElementById("projectName").value
              + "<br> Budget:" +document.getElementById("budget").value
              + "<br> Message:" +document.getElementById("message").value

    }).then(
      message => alert("Message sent successfully to Edwin")
    );
}
