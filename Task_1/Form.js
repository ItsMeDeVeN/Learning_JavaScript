function submitUserDetails() {
    // Get form values
    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("birthday").value;
    let address = document.getElementById("address").value;
    
    // Get existing data from local storage
    let existingData = JSON.parse(localStorage.getItem('userDetails')) || [];

    // Add new data to existing data
    let newData = {
        "Name": name,
        "Gender": gender,
        "Birthdate": birthday,
        "Phone": phone,
        "Email": email,
        "Address": address,
        "id": Date.now(),
    };
    existingData.push(newData);

    // Save data to local storage
    localStorage.setItem('userDetails', JSON.stringify(existingData));

    // Redirect to user.html
    window.location.href = "user.html";
}

window.onload = function() {
    let existingData = JSON.parse(localStorage.getItem('userDetails')) || [];
    displayUserDetails(existingData);
    console.log(window.location)
};