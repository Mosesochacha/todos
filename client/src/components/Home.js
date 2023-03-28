import React, { useState } from "react";

function Home({ user, key, title, description, priority, status, id }) {
  const URL = `/todos/${id}`;

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    title: title || "",
    status: status || "",
    priority: priority || "",
    description: description || "",
  });

  const handleDelete = async () => {
    fetch(URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedData),
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  if (user) {
    return (
      <div className="card" style={{ width: "20rem" }} key={key}>
        <div className="card-body">
          {isEditing ? (
            <>
              <input
                type="text"
                name="title"
                value={editedData.title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                value={editedData.description}
                onChange={handleChange}
              />
              <input
                type="text"
                name="priority"
                value={editedData.priority}
                onChange={handleChange}
              />
              <input
                type="text"
                name="status"
                value={editedData.status}
                onChange={handleChange}
              />
              <button onClick={handleSubmit}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <h4 className="card-title">TITLE: {title}</h4>
              <h5 className="card-subtitle mb-2 text-muted">DESCRIPTION: {description}</h5 >
              <p className="card-text">PRIORITY: {priority}</p>
              <p className="card-text">STATUS: {status}</p>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <div className="home-style"></div>;
  }
}

export default Home;
