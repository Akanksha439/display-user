import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faHeart,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import EditModal from "./Modal";

const Card = ({ user, handleDelete, setIsOpen, isOpen, handleEdit }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div className="card">
      <div className="card-content">
        <img
          className="profile-pic"
          src="https://avatars.dicebear.com/v2/male/9d60c0620cb6a49219a31c4dca7d6f2e.svg"
          alt="Profile"
        />
        <div className="user-details">
          <h3>{user?.name}</h3>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> {user?.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> {user?.phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faGlobe} />
            {user?.website}
          </p>
        </div>
      </div>
      <div className="card-actions">
        <button className="action-button" onClick={() => handleLike()}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: like ? "red" : "" }}
          />
        </button>
        <button className="action-button" onClick={() => setIsOpen(user)}>
          <FontAwesomeIcon icon={faEdit} />{" "}
        </button>
        <button
          className="action-button"
          onClick={() => handleDelete(user?.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <EditModal
        user={isOpen}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Card;
