document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const elements = document.querySelectorAll(".initial");
    elements.forEach(element => {
        element.style.display = "none";
    });

    document.getElementById("successMessage").style.display = "block";
    console.log("here");
});



