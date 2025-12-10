const form = document.getElementById("feedbackForm");
const formmessage = document.getElementById("formMessage");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!name){
        formmessage.textContent = "Please enter your name.";
        formmessage.style.color = "red"; 
    }else if(! email || !emailRegex.test(email)) {
        formmessage.textContent = "Please enter a valid email.";
        formmessage.style.color = "red";
    }else if(!message || message.length<10){
        formmessage.textContent = "Message must be at least 10 characters.";
        formmessage.style.color = "red";

    }else{
        localStorage.setItem('feedback', JSON.stringify({name, email, message}));
        formmessage.textContent = "Thank you for your feedback!";
        formmessage.style.color = "green";

        form.reset();
    }
});