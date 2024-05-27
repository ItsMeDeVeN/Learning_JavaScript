function userUserdeatils(){
      //event.preventDefault()

        // Get form values
        let name = document.getElementById("name").value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let birthday = document.getElementById("birthday").value;
        let address = document.getElementById("address").value;
        
        // Get existing data from local storage
        let existingData = JSON.parse(localStorage.getItem('userDetails')) || [];       //Parsing & Converting the UserDetails string to JSON type object.
        
        // Add new data to existing data
        let newData = {
          "Name": name,
          "Gender": gender,
          "Birthdate": birthday,
          "Phone Number": phone,
          "Email": email,
          "Address": address,
          
        };
        existingData.push(newData);
        
        // Save data to local storage
        localStorage.setItem('userDetails', JSON.stringify(existingData));
        
        // Display data on the page
        // displayUserDetails(existingData);
      };
      
      function displayUserDetails(data) {
        let userDetailsDiv = document.getElementById('userDetails');
        userDetailsDiv.innerHTML = '';
    
        data.forEach(function(item, index) {
          let userDiv = document.createElement('div');
          userDiv.id = "Result_" + index;
          userDiv.innerHTML = `
            <hr>
            <h3>User ${index + 1}</h3>
            <p><strong>Name:</strong> ${item.Name}</p>
            <p><strong>Gender:</strong> ${item.Gender}</p>
            <p><strong>Phone Number:</strong> ${item["Phone Number"]}</p>
            <p><strong>Birthdate:</strong> ${item.Birthdate}</p>
            <p><strong>Email:</strong> ${item.Email}</p>
            <p><strong>Address:</strong> ${item.Address}</p>
            <button type="button" style="margin-left: 30%" onclick="deletedata(${index})"><b>Delete</b></button>
            <button type="button" style="margin-left: 10%" onclick="updatedata(${index})"><b>Update Data</b></button>
            <hr>
          `;
          userDetailsDiv.appendChild(userDiv);
        });
      }


        function deletedata(index) {
        let existingData = JSON.parse(localStorage.getItem('userDetails')) || [];
        existingData.splice(index, 1);          //removing data as per index
        localStorage.setItem('userDetails', JSON.stringify(existingData));
        const element = document.getElementById("Result_" + index);
        element.remove();               //Removing the element from html and display
      }


        function updatedata(index) {
        if(confirm("Want to Update details??")){
        let existingData = JSON.parse(localStorage.getItem('userDetails')) || [];
        let userToUpdate = existingData[index]; // Get the user object to update
        if (userToUpdate) {
                // Ask for new values to update
                let newName = prompt("Enter new name:", userToUpdate.Name);
                let newGender = prompt("Enter new gender (Male, Female, or Other):", userToUpdate.Gender);
                // Validate the input gender
                while (!["Male", "Female", "Other"].includes(newGender)) {
                newGender = prompt("Invalid input! Please enter Male, Female, or Other:", userToUpdate.Gender);
        }
                let newPhone = prompt("Enter new phone number:", userToUpdate["Phone Number"]);
                let newEmail = prompt("Enter new email:", userToUpdate.Email);
                let newAddress = prompt("Enter new address:", userToUpdate.Address);

                // Update the user object with new values
                userToUpdate.Name = newName;
                userToUpdate.Gender = newGender;
                userToUpdate["Phone Number"] = newPhone;
                userToUpdate.Email = newEmail;
                userToUpdate.Address = newAddress;

                // Update the data array in local storage
                existingData[index] = userToUpdate;
                localStorage.setItem('userDetails', JSON.stringify(existingData));
                // Refresh the displayed user details
                showdata();
        } 
                }
        }

      function showdata(){
        let existingData = JSON.parse(localStorage.getItem('userDetails')) || [];
        displayUserDetails(existingData);
}