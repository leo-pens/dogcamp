document.title = 'Dog Camps';

function validateEmail() {
    const emailInput = document.getElementById("input-email");
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        alert("Input is required");
        emailInput.focus();
        return false;
    }

    alert("Form submitted successfully!");
    // Proceed with form submission logic here, such as an API call
}