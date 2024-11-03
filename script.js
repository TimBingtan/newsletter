document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    document.getElementById('successMessageText').textContent = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`

    const elements = document.querySelectorAll(".initial");
    elements.forEach(element => {
        element.style.display = "none";
    });

    document.getElementById("successMessage").style.display = "block";
});





