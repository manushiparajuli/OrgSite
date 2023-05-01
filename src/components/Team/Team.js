import React, { useState } from "react";
import Img from "../../Assets/Settings.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";



function Team() {
  const [isDownloadAllowed, setIsDownloadAllowed] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [isDeactivated, setIsDeactivated] = useState(false);

  function handleChangePassword() {
    // Logic to handle password change goes here
  }

  function handleToggleDownload() {
    setIsDownloadAllowed(!isDownloadAllowed);
  }

  function handleToggleNotification() {
    setIsNotificationEnabled(!isNotificationEnabled);
  }

  function handleToggleDeactivate() {
    setIsDeactivated(!isDeactivated);
  }

  function handleDeleteAccount() {
    // Logic to handle account deletion goes here
  }

  return (
    
    <div className="card-container">
      <div className="card">
      <p>-----------------------
          -----------------
          -------------
          --------------
          ---------------
          -----------------
          ---------------
          -----------
          ---------
          ----------------
          -
        </p>
        <img src={Img} className="settingsPic" alt="avatar" />
        
      </div>
      <div className="card">
        <p>-----------------------
          -----------------
          -------------
          --------------
          ---------------
          -----------------
          ---------------
          -----------
          ---------
          ----------------
          -
        </p>
        <div>
          <button onClick={handleChangePassword}>Change Password</button>
          <p></p>
          <button onClick={handleToggleDownload}>
            {isDownloadAllowed ? "Disallow Downloads" : "Allow Downloads"}
          </button>
          <p></p>
          <button onClick={handleToggleNotification}>
            {isNotificationEnabled ? "Disable Notifications" : "Enable Notifications"}
          </button>
          <p></p>
        </div>
        {isDeactivated ? (
          <>
            <button onClick={handleToggleDeactivate}>Reactivate Account</button>
          </>
        ) : (
          <>
            <button onClick={handleToggleDeactivate}>Deactivate Account</button>
            <p></p>
            <button onClick={handleDeleteAccount}>Delete Account</button>
            <div>
  <Button as={Link} to="/" variant="primary" size="lg">
    Go Back
  </Button>
</div>

            <p> 
            </p>
            <p> 
            </p>
            <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> <p> 
            </p> 

          </>
          
          
        )}
      </div>
      
    </div>
  );
}

export default Team;
