import React from "react";
import "../styles/emailSent.css";

const EmailSent = () => {
  return (
    <div className="emailSent">
      <div className="emailSentCont">
        <div>
          <p>
            A verification link has been sent to you, please click on the link
            to verify your account
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
