import React, { useState } from "react";
import "../../styles/Login.css"; // Import your custom CSS file
import "../../styles/LoginSlideIn.css"; // Import your custom CSS file
import log from "../../assets/images/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import { FaPencilAlt } from "react-icons/fa"; // Import the pencil icon
import "../../styles/ProfilePic.css"; // Import your custom CSS file

const Account = ({ isOpen, onClose, setShowSignUp, showSignUp }) => {
  const [profilePic, setProfilePic] = useState(null); // Store the selected profile picture

  // Function to handle profile picture selection
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };

  return (
    <>
      <div className={`login-container ${isOpen ? "open" : ""}`}>
        <div className="login-form">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
              <div className="flex flex-col justify-center items-center h-screen">
                <img
                  src={log}
                  width="50"
                  height="50"
                  className="d-inline-block logo-img align-top"
                  alt="Your Logo"
                  style={{
                    backgroundColor: "#cb9a9a", // Set background color
                    clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)", // Add a custom shape
                    zIndex: -1, // Set z-index property
                  }}
                />

                {/* Profile picture input */}
                {showSignUp && (
                  <label
                    htmlFor="profile-pic-input"
                    className="profile-pic-container"
                  >
                    <div className="profile-pic">
                      {profilePic ? (
                        <img src={profilePic} alt="Profile" />
                      ) : (
                        <div className="default-profile-pic">
                          <FaPencilAlt className="pencil-icon" />
                          <span>Upload Picture</span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      id="profile-pic-input"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                      style={{ display: "none" }}
                    />
                  </label>
                )}

                <h1 className="text-2xl textColor font-bold mb-1">Welcome</h1>
                <p className="font-bold mb-4 mutedColor">
                  Discover the perfect attire to make every moment memorable.
                </p>
                {showSignUp && <SignUpForm setShowSignUp={setShowSignUp} />}
                {!showSignUp && <LogInForm setShowSignUp={setShowSignUp} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
