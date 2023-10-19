 import React from "react"; 
 import event_img from "../assets/images/tribunal_logo_large.png"; // use in Infocard component file. add a comment to use this image IF an image is not provided by the
 //import {Link} from 'react-router-dom'
 

 // We will need to create dynamic InfoCards. Every piece of information will be stored in a variable
  function InfoCard() {
    const eventName = "CEAS Luau";
    const date = "07/27/2023";
    const time = "12p - 5p";
    let description =
      "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! ";
    const location = "Coney Island";
  
    if (description.length > 100) {
      description = description.substring(0, 100) + "...";
    }

  
    function SignUpButton()
    {
      window.location.href = "https://www.google.com"
    }
    return (
      <article className="infocard">
        <h1 className = "title">{eventName}</h1>
        <img src={event_img} alt="test img" />
        <br />
        <div>
      <button className="signup-button infocard" onClick={SignUpButton}>Sign Up Here</button>
      </div>
        <h2>
          <b>Date/Time:</b> {date} from {time}
        </h2>
        <h2>
          <b>Location:</b> {location}
        </h2>
        <h4>
          <b>Event Description:</b> {description}
        </h4>
      </article>
    );
  }

  function InfoCardList() {
    return (
      <section className="infocard-list">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </section>
    );
  };
  export default InfoCardList;

