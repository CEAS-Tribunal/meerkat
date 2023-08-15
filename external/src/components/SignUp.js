import React from "react";

function ContactInfo() {
  return (
    <div className="contact-info">
      <form>
        <h2>Contact Information</h2>
        <input type="text" id="name" name="name" placeholder="Name" autocomplete="off" />
        <input type="text" id="mId" name="mId" placeholder="M# (Include the M)" autocomplete="off" />
        <input type="text" id="email" name="email" placeholder="Email" autocomplete="off" />
        <input type="text" id="phoneNum" name="phoneNum" placeholder="Phone Number" autocomplete="off" />
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="container">
      <div className="title">
        <h1> [Event Name] Sign Up Form</h1>
      </div>
      <div className="page-info">
        <p>
          This is placeholder text for the description of the event. We will probably have a variable (passed in as a prop) that contains the entire description
          of the event. This way, we'll ideally have a different description for each event. The description is decided by the user filling out the internal
          site.
        </p>
        <ContactInfo />
      </div>
    </div>
  );
}
export default SignUp;
