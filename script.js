document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validEmail)){
        document.getElementById('email').style.color = "#FF6155";
        document.getElementById('email').style.borderColor = "#FF6155";
        document.getElementById('email').style.backgroundColor = "hsla(0, 100%, 50%, 0.15)";
        document.getElementById('email').style.outline = 0;
        document.getElementById('email').style.opacity = "100%";
        document.getElementById('errorMessage').style.visibility = "visible";
    } else { 
        document.getElementById('submittedEmail').innerHTML = email;
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

    document.getElementById('email').style.color = "initial";
    document.getElementById('email').style.borderColor = "initial";
    document.getElementById('email').style.backgroundColor = "initial";
    document.getElementById('email').style.outline = "initial";
    document.getElementById('email').style.opacity = "40%";
    document.getElementById('errorMessage').style.visibility = "hidden";

    document.getElementById("successMessage").style.display = "none";

    const elements = document.querySelectorAll(".initial");
    elements.forEach(element => {
        element.style.display = "flex";
    });

    const email = document.getElementById('email');
});







