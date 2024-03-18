"use client";
import { useRouter, redirect } from "next/navigation";
import { useState } from "react";

const AddNewUser = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState(false);

  success && redirect("/");

  const createNewUser = async () => {
    let result = await fetch("/api/createuser", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, phoneNumber, email }),
    });
    result = await result.json();
    if (result.success) setSuccess(true);
  };

  const validateAllInputs = () => {
    let hasErrors = false;
    if (firstName === "" || firstName.length <= 2) {
      setFirstNameError(
        (prev) => (prev = "First Name should be atleast 3 characters long")
      );
      hasErrors = true;
    }
    if (phoneNumber.length !== 10) {
      setPhoneNumberError(
        (prev) => (prev = "Phone number should be of 10 digits")
      );
      hasErrors = true;
    }
    if (email === "") {
      setEmailError((prev) => (prev = "Email cannot be empty"));
      hasErrors = true;
    }
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validateEmail) {
      setEmailError("Invalid email");
      hasErrors = true;
    }

    if (!hasErrors) createNewUser();
  };

  const addUser = (e) => {
    e.preventDefault();
    validateAllInputs();
  };

  return (
    <div className="user-details-page-container">
      <div className="user-table-header margin-left-header">Add New User</div>
      <form onSubmit={(e) => addUser(e)} className="add-user-form">
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
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            className="add-user-cancel-btn"
          >
            Cancel
          </button>
          <button type="submit" className="add-user-btn">
            Add New User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
