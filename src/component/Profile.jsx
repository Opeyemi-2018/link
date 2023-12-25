import React, { useState, useEffect } from 'react';

function Profile({ firstName, setfirstName, secondName, setsecondName,
  email, setEmail, userDetails, setUserDetails }) {

  let submitProfile = (e) => {
    e.preventDefault()
    if (firstName && secondName && email && image) {
      setUserDetails([...userDetails, { image: image, firstName: firstName, secondName: secondName, email: email, id: new Date().getTime().toString() }])
      // console.log(typeof userDetails);
    }
    setfirstName('')
    setsecondName('')
    setEmail('')

  }

  // State to manage the selected image
  const [image, setImage] = useState(null);

  // Function to handle the change in the file input
  const handleImageChange = (event) => {
    // Access the selected file from the input
    const selectedFile = event.target.files[0];

    // Check if a file is selected
    if (selectedFile) {
      // Create a new FileReader object
      const reader = new FileReader();

      // Event handler for when the file reading is completed
      reader.onload = (e) => {
        // Set the image data to the state
        setImage(e.target.result);

        // Save the image data to local storage
        localStorage.setItem('profileImage', e.target.result);
      };

      // Read the contents of the selected file as a Data URL
      reader.readAsDataURL(selectedFile);
    }
  };

  // useEffect hook to run once on component mount
  useEffect(() => {
    // Retrieve the image data from local storage on component mount
    const storedImage = localStorage.getItem('profileImage');

    // Check if there's a stored image
    if (storedImage) {
      // Set the stored image as the initial image state
      setImage(storedImage);
    }
  }, []); // Run this effect only on component mount

  return (
    <div className='profile'>
      <div className="profile-header">
        <h2>Profile Details</h2>
        <p>Add your details to create a personal touch to your profile</p>
      </div>

      <div className='prifile-image'>
        <input type="file" onChange={handleImageChange} />
        {/* Display the selected image as a preview */}
        {image && (
          <div className="image-preview">
            <h3>Profile picture</h3>
            {/* Show the selected image */}
            <img src={image} alt="Selected" />
          </div>
        )}
      </div>

      <div className="profile-second-input">
        <form onSubmit={submitProfile}>
          <div>
            <label>First name*</label>
            <input onChange={(e) => setfirstName(e.target.value)} value={firstName} type="text" />
          </div>

          <div>
            <label>Second name*</label>
            <input onChange={(e) => setsecondName(e.target.value)} value={secondName} type="text" />
          </div>

          <div>
            <label>Email*</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" />
          </div>
          <div className="profile-btn">
            <button type='submit'>Save</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Profile;
