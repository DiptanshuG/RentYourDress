import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CustomerStoryModal = ({ show, handleClose, addCustomerStory }) => {
  const [formData, setFormData] = useState({
    imageSrc: '',
    story: '',
    customerName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Validate the form data here if needed
    // Then add it to the customerStories array
    addCustomerStory(formData);

    // Reset the form data and close the modal
    setFormData({
      imageSrc: '',
      story: '',
      customerName: '',
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Your Story</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="imageSrc">Image URL:</label>
          <input
            type="text"
            name="imageSrc"
            className="form-control"
            value={formData.imageSrc}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="story">Story:</label>
          <textarea
            name="story"
            className="form-control"
            value={formData.story}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="customerName">Your Name:</label>
          <input
            type="text"
            name="customerName"
            className="form-control"
            value={formData.customerName}
            onChange={handleChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomerStoryModal;
