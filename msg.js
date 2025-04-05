<<<<<<< HEAD
function p(){
    alert("Data Sumit Successfully");
=======
function showSuccessMessage() {
    alert("Data submitted successfully!");
    return true;
}

function validateForm() {
    // Add form validation logic here
    const name = document.getElementById('name').value;
    if (name === "") {
        alert("Please enter your name");
        return false;
    }
    return true;
>>>>>>> upstream/master
}