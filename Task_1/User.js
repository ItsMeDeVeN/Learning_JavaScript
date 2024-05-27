let existingData = JSON.parse(localStorage.getItem('userDetails')) || [];

function displayUserDetails(data) {
    let userDetailsTable = document.getElementById('userDetailsBody');
    userDetailsTable.innerHTML = '';

    data.forEach(function (item, id) {
        let row = document.createElement('tr');
        row.innerHTML = `
        <style>
        button{
            margin: 10px 10px 10px 10px;
        }
        </style>
            <td>${id + 1}</td>
            <td>${item.Name}</td>
            <td>
                <button type="button" class="btn btn-primary" data-toggle="modal" onclick="viewUserDetails(${item?.id})" data-target="#exampleModal">View</button>
                <button type="button" class="btn btn-primary" data-toggle="modal" onclick="updateUserData(${item?.id})" data-target="#exampleModal">Update</button>
                <button type="button" class="btn btn-primary" data-toggle="modal" onclick="deleteUserData(${id})" data-target="#exampleModal">Delete</button>
            </td>
        `;
        userDetailsTable.appendChild(row);
    });
}

function viewUserDetails(id) {
 
    console.log(existingData);
    for (let data of existingData)
        if (data?.id === id) {
            document.getElementById("table").innerHTML = `
      <a href ="user.html" >Back TO Details </a>
      <p><strong>Name:</strong> ${data.Name}</p>
      <p><strong>Gender:</strong> ${data.Gender}</p>
      <p><strong>Phone Number:</strong> ${data.Phone}</p>
      <p><strong>Birthdate:</strong> ${data.Birthdate}</p>
      <p><strong>Email:</strong> ${data.Email}</p>
      <p><strong>Address:</strong> ${data.Address}</p>
      `;
        }
};



function deleteUserData(index) {
    existingData.splice(index, 1);
    localStorage.setItem('userDetails', JSON.stringify(existingData));
    location.reload(); // refresh page to update the table
}

function updateUserData(id) {
    for (let data of existingData)
        if (data?.id === id) {
    console.log(data.id);
    
    window.location.href = "Form.html";
    
    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("birthday").value;
    let address = document.getElementById("address").value;

    data.Name = name;
    data.Gender = gender;
    data.Phone = phone;
    data.Email = email;
    data.Birthdate = birthday;
    data.Address = address;
    

    localStorage.setItem('userDetails', JSON.stringify(existingData));
}
}
window.onload = function () {
    let existingData = JSON.parse(localStorage.getItem('userDetails')) || [];
    displayUserDetails(existingData);
};