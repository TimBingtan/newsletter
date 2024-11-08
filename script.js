document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    document.getElementById('submittedEmail').textContent = email;
    
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






