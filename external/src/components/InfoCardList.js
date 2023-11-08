import React, { useState } from 'react';
import event_img from '../assets/images/tribunal_logo_large.png';
//import {Link} from 'react-router-dom'
import EventModal from './EventModal';

// We will need to create dynamic InfoCards. Every piece of information will be stored in a variable
const InfoCard = ({ onClick }) => {
  const eventName = 'CEAS Luau';
  const date = '07/27/2023';
  const time = '12p - 5p';
  let description =
    "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! ";
  const location = 'Coney Island';

  if (description.length > 100) {
    description = description.substring(0, 100) + '...';
  }

  function SignUpButton() {
    window.location.href = 'https://www.google.com';
  }

  return (
    <article className="infocard" onClick={onClick}>
      <h1 className="event-name">{eventName}</h1>
      <hr class="rounded" />
      <img src={event_img} alt="test img" />
      <br />
      <div>
        <button className="signup-button" onClick={SignUpButton}>
          Sign Up Here
        </button>
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
};

function InfoCardList() {
  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState(null);

  const handleCardClick = (data) => {
    const sendData = {
      title: 'CEAS Luau',
      date: '07/27/2023',
      time: '12p - 5p',
      description:
        "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow!",
      location: 'Coney Island',
    };
    setCardData(sendData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="infocard-list">
      <InfoCard onClick={() => handleCardClick({ title: 'New Title', description: 'New Description' })} />
      {showModal && <EventModal onClose={handleCloseModal} data={cardData} />}
      <InfoCard onClick={() => handleCardClick()} />
      {showModal && <EventModal onClose={handleCloseModal} data={cardData} />}

      <InfoCard />
    </section>
  );
}
export default InfoCardList;
