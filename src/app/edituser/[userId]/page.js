"use client";
import { useState } from "react";

const UpdateUser = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [phoneNumber, setPhoneNumber] = useState("9810101010");
  const [email, setEmail] = useState("john@test.com");
  const [firstNameError, setFirstNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateAllInputs = () => {
    if (firstName === "" || firstName.length <= 3)
      setFirstNameError("First Name should be atleast 4 characters long");
    if (phoneNumber.length !== 10)
      setPhoneNumberError("Phone number should be of 10 digits");
    if (email === "") setEmailError("Email cannot be empty");
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validateEmail) setEmailError("Invalid email");
  };

  const updateUser = (e) => {
    e.preventDefault();
    validateAllInputs();

    if (firstNameError || phoneNumberError || emailError) return false;
    console.log("clicked");
  };

  return (
    <div className="user-details-page-container">
      <div className="user-table-header margin-left-header">Update User</div>
      <form onSubmit={(e) => updateUser(e)} className="add-user-form">
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstNameError("");
            setFirstName(e.target.value);
          }}
          placeholder="Enter first name"
          className={firstNameError ? "text-input-field-error" : ""}
        ></input>
        {firstNameError ? (
          <div className="error-message">{firstNameError}</div>
        ) : null}
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name (optional)"
        ></input>
        <input
          type="number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumberError("");
            setPhoneNumber(e.target.value);
          }}
          onWheel={(e) => e.currentTarget.blur()}
          placeholder="Enter 10 digit phone number"
          className={phoneNumberError ? "text-input-field-error" : ""}
        ></input>
        {phoneNumberError ? (
          <div className="error-message">{phoneNumberError}</div>
        ) : null}
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmailError("");
            setEmail(e.target.value);
          }}
          placeholder="Enter email"
          className={emailError ? "text-input-field-error" : ""}
        ></input>
        {emailError ? <div className="error-message">{emailError}</div> : null}
        <div className="add-user-btn-container">
          <button type="submit" className="add-user-btn">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;