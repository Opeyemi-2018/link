

function Footer() {
    return (
        <div className="footer">
            <p> &copy; devlink {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer

// let editProfile = () => {
//     // Assuming you have an index to identify which user detail to edit
//     const indexToEdit = 0; // You'll replace this with the correct index

//     // Get the user detail based on the index
//     const userToEdit = userDetails[indexToEdit];

//     // Check if the user detail exists
//     if (userToEdit) {
//       // Populate the input fields with the existing values for editing
//       setfirstName(userToEdit.firstName);
//       setsecondName(userToEdit.secondName);
//       setEmail(userToEdit.email);
//       // You can also set the image here if required
//       setImage(userToEdit.image);
//     }
//   };
