document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    document.getElementById('submittedEmail').textContent = email;

    const elements = document.querySelectorAll(".initial");
    elements.forEach(element => {
        element.style.display = "none";
    });

    document.getElementById("successMessage").style.display = "block";
});





