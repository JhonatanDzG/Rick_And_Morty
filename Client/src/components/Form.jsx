import "./Css/Form.css";
import { useState } from "react";
import validation from "../validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (

    <div className="FormContainer">
      <form onSubmit={handleSubmit}>
        <div className="InputsContainer">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="Submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
