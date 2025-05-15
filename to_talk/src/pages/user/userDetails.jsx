// Import necessary modules
import React, { useState } from 'react';

const UpdateUserForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    name: '',
    location: '',
    image: '',
    status: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/updateuser/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('User updated successfully:', data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Update User</h2>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            className="form-control"
            value={formData.status}
            onChange={handleChange}
            placeholder="Enter status"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio</label>
          <textarea
            id="bio"
            name="bio"
            className="form-control"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Enter bio"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
