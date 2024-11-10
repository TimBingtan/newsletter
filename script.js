document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validEmail)){
        console.log('got here');
        document.getElementById('email').color = "#FF6155";
        document.getElementById('email').borderColor = "#FF6155";
        document.getElementById('email').backgroundColor = "hsla(0, 100%, 50%, 0.15)";
        document.getElementById('email').outline = 0;
        document.getElementById('errorMessage').visibility = "visible";
        console.log('got here as well');
    } else { 
        document.getElementById('confirmationMessage').innerHTML = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
        
        document.getElementById('email').value = "";
    
        const elements = document.querySelectorAll(".initial");
        elements.forEach(element => {
            element.style.display = "none";
        });
    
        document.getElementById("successMessage").style.display = "block";
    }
});


document.getElementById("dismiss-btn").addEventListener("click", function(event){
    event.preventDefault();

    document.getElementById("successMessage").style.display = "none";

    const elements = document.querySelectorAll(".initial");
    elements.forEach(element => {
        element.style.display = "flex";
    });
});






