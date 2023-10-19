import React from 'react';
import "../assets/styles/index.css";

const EventModal = ({ onClose, data }) => 
{
    return (
        <div className = "eventModal">
            <div className = "modal-content">
                <span className = "close" onClick = {onClose}>&times; </span>
                    <h1 className = "modal">{data.title}</h1>
                    <hr className = "rounded"></hr>
            </div>
        </div>
    )
};
export default EventModal; 