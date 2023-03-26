import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setError(false);
        setMessage(true);
      })
      .catch((error) => {
        setError(true);
        setMessage(false);
      });
  };

  return (
    <div className="login mt-14">
      <form onSubmit={handleLogin} className="card bg-warning" style={{width: "18em" , marginTop: "1em"}}>
        <label>EMAIL:</label>
        <input
          placeholder="ENTER YOUR EMAIL "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>PASSWORD:</label>
        <input
          placeholder="ENTER YOUR PASSWORD"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{message}</p>}
        <br />
        <button>LOGIN</button>
      </form>
    </div>
  );
}
