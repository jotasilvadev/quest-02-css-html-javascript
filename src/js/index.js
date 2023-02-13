const form = document.getElementById("form");
const inputs = form.querySelectorAll(".input, textarea");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let hasError = false;

    inputs.forEach((input) => {
        const errorMessage =
            input.parentElement.querySelector(".campo-obrigatorio");
        if (!input.value) {
            input.classList.add("invalid");
            errorMessage.innerText = "campo obrigatório";
            errorMessage.style.display = "block";
            hasError = true;
        } else {
            input.classList.remove("invalid");
            errorMessage.style.display = "none";
        }
    });

    if (!hasError) {
        alert("Quest completada com sucesso! +1xp");
        window.location.replace("");
    }
});

form.addEventListener("input", function (event) {
    event.preventDefault();

    inputs.forEach((input) => {        
        if (!input.value) {
            input.classList.remove("valid");            
        } else {
            input.classList.add("valid");
        }
    });
});