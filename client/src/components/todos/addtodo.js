import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function AddTod(userId) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://pet-finder-pgl9.onrender.com/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
        title,
        description,
        priority,
      }),
    });
    const data = await response.json();
    if (data.message) {
      setMessage(data.message);
      setError("");
      return <Redirect to="/home" />;
    } else {
      setMessage("");
      setError(data.error);
    }
  };

  return (
    <center className="mt-5 addpet">
      <div className="card " style={{ width: "21rem" }}>
        <div className="card-body" id="addtodo">
          <form onSubmit={handleSubmit} className="card">
            <label>TITLE:</label>
            <input
              placeholder="ENTER TITLE"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>DESCRIPTION: </label>
            <input
              placeholder="ENTER DESCRIPTION"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>PRIORITY</label>
            <input
              placeholder="ENTER PRIORITY"
              type="number"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />

            <label>STATUS: </label>
            <input
              type="number"
              placeholder="ENTER ANIMAL SPECIES"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <button type="submit" className="btn btn-dark">
              ADD TODO
            </button>
            {message && (
              <div className="alert alert-success mt-3">{message}</div>
            )}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </center>
  );
}
