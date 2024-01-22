import React, { useEffect, useState } from "react";

const EditModal = ({ user, isOpen, onClose, handleEdit }) => {
  const [editedUser, setEditedUser] = useState({});
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    setEditedUser({ ...user });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setValidationErrors({
      name: "",
      email: "",
      phone: "",
      website: "",
    });
    onClose();
  };

  const handleSave = () => {
    // Validate fields before saving
    const errors = {};
    if (!editedUser.name) {
      errors.name = "Name is required";
    }
    if (!editedUser.email) {
      errors.email = "Email is required";
    }
    if (!editedUser.phone) {
      errors.phone = "Phone is required";
    }
    if (!editedUser.website) {
      errors.website = "Website is required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      handleEdit(editedUser);
      handleClose();
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Edit User</h2>
        <div className="modal-field">
          <label>*Name</label>
          <div>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
            <div className="validation-error">{validationErrors?.name}</div>
          </div>
        </div>

        <div className="modal-field">
          <label>*Email</label>
          <div>
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
            <div className="validation-error">{validationErrors?.email}</div>
          </div>
        </div>
        <div className="modal-field">
          <label>*Phone</label>
          <div>
            <input
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleInputChange}
            />
            <div className="validation-error">{validationErrors?.phone}</div>
          </div>
        </div>
        <div className="modal-field">
          <label>*Website</label>
          <div>
            <input
              type="text"
              name="website"
              value={editedUser.website}
              onChange={handleInputChange}
            />
            <div className="validation-error">{validationErrors?.website}</div>
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={() => handleClose()}>Cancel</button>
          <button onClick={() => handleSave()}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
