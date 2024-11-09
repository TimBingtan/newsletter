document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    document.getElementById('confirmationMessage').innerHTML = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
    
    document.getElementById('email').value = "";

    const elements = document.querySelectorAll(".initial");
    elements.forEach(element => {
        element.style.display = "none";
    });

    document.getElementById("successMessage").style.display = "block";
});


document.getElementById("dismiss-btn").addEventListener("click", function(event){
    event.preventDefault();

    document.getElementById("successMessage").style.display = "none";

    const elements = document.querySelectorAll(".initial");
    elements.forEach(element => {
        element.style.display = "flex";
    });
});






