// JavaScript code for form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const aadhar = document.getElementById("aadhar").value.trim();
    const membershipType = document.getElementById("membershipType").value;
    const membershipYear = document.getElementById("membershipYear").value.trim();
    const memberEarlier = document.querySelector('input[name="memberEarlier"]:checked');
    const services = document.getElementById("services").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return false;
    }
    if (!aadhar) {
        alert("Please enter your Aadhar number.");
        return false;
    }
    if (!membershipType) {
        alert("Please select the type of membership.");
        return false;
    }
    if (!membershipYear) {
        alert("Please enter the year of membership.");
        return false;
    }
    if (!memberEarlier) {
        alert("Please indicate if you were a member earlier.");
        return false;
    }
    if (!services) {
        alert("Please describe the services you expect from the library.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
