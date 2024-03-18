"use client";
import { useState } from "react";

const AddNewUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="user-details-page-container">
      <div className="user-table-header margin-left-header">Add New User</div>
      <form onSubmit={(e) => addUser(e)} className="add-user-form">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter first name"
        ></input>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name"
        ></input>
        <input
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter 10 digit phone number"
        ></input>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        ></input>
        <div className="add-user-btn-container">
          <button type="submit" className="add-user-btn">
            Add New User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
