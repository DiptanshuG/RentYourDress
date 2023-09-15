import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ContactUs({ onClose, setShowContactUsModal, showContactUsModal }) {
  const closeModal = () => {
    setShowContactUsModal(false);
    onClose();
  };

  const linkContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Display items horizontally
    justifyContent: 'space-between', // Space evenly
    alignItems: 'center', // Center vertically
  };

  const whatsappIconStyle = {
    color: '#25d366', // Green color for WhatsApp
    marginRight: '5px', // Optional spacing between icon and text
  };

  const callIconStyle = {
    color: 'blue', // Set the color to blue
  };

  const modalContent = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  return (
      <Modal show={showContactUsModal} onHide={closeModal} centered size='sm' >
        <Modal.Body style={modalContent}> 
            <Link
              to="https://wa.me/7582974834"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              <FaWhatsapp style={whatsappIconStyle} /> WhatsApp
            </Link>
            <Link to="tel:7582974834" className="text-decoration-none text-dark">
              <FaPhone style={callIconStyle} /> Call
            </Link>
            <Link to="mailto:yashijain0312@gmail.com" className="text-decoration-none text-dark">
              <FaEnvelope /> Mail
            </Link>
        </Modal.Body>
      </Modal>
  );
}

export default ContactUs;
