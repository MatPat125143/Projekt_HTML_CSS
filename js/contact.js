
function showOptions() {
    var selectedOption = document.getElementById("options").value;
    var radioOptions = document.getElementById("radioOptions");
    var message1 = document.getElementById("message1");
    var message2 = document.getElementById("message2");

    radioOptions.style.display = "none";
    message1.style.display = "none";
    message2.style.display = "none";

    if (selectedOption === "1") {
        radioOptions.style.display = "flex";
    } else if (selectedOption === "2") {
        message1.style.display = "block";
    } else if (selectedOption === "3") {
        message2.style.display = "block";
    }
}

function validateForm() {
    var form = document.getElementById("myForm");

    if (form.checkValidity()) {
        alert("Thank you for completing the form! We will contact you soon.");
        form.reset();
    } else {
        alert("Please correct the errors in the form.");
    }
}