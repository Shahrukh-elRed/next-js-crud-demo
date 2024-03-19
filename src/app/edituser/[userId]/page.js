"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateUser = ({ params }) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonLoader, setButtonLoader] = useState(false);

  const fetchUser = async () => {
    let response = await fetch(`/api/users/${params.userId}`);
    response = await response.json();
    if (!response.success) router.push("/");
    else {
      setFirstName(response.result.firstName);
      setLastName(response.result.lastName);
      setPhoneNumber(response.result.phoneNumber);
      setEmail(response.result.email);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
    if (hasErrors) setButtonLoader(false);

    if (!hasErrors) updateUser();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonLoader) return false;
    setButtonLoader(true);
    validateAllInputs();
  };

  const updateUser = async () => {
    let data = await fetch(`/api/users/${params.userId}`, {
      method: "PUT",
      body: JSON.stringify({ firstName, lastName, phoneNumber, email }),
    });
    data = await data.json();
    if (data.success) {
      setButtonLoader(false);
      alert("user has been updated");
      router.push("/");
    } else {
      alert("Something went wrong! please try again");
      setButtonLoader(false);
    }
  };

  return (
    <div className="user-details-page-container">
      <div className="user-table-header margin-left-header">Update User</div>
      {loading ? (
        <div className="update-user-loader-spinner-container">
          <div className="loader-spinner"></div>
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)} className="add-user-form">
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
          {emailError ? (
            <div className="error-message">{emailError}</div>
          ) : null}
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
              {buttonLoader ? (
                <span className="update-btn-loader-container">
                  <span className="btn-loader-spinner"></span>
                </span>
              ) : (
                <>Update User</>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateUser;
