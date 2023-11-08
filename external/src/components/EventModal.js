import React from 'react';
import '../assets/styles/index.css';

const EventModal = ({ onClose, data }) => {
  return (
    <div className="eventModal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1 className="modal">{data.title}</h1>
        <hr className="rounded"></hr>
        <p>
          <br />
          <b>Event Date:</b> {data.date} <br /> <br />
          <b>Event Time:</b> {data.time} <br /> <br />
          <b>Event Description:</b> {data.description} <br /> <br />
          <b>Event Location:</b> {data.location} <br /> <br />
        </p>
      </div>
    </div>
  );
};
export default EventModal;
