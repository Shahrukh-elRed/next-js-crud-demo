"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ViewUser = ({ params }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  const fetchUser = async () => {
    let response = await fetch(`/api/users/${params.userId}`);
    response = await response.json();
    if (!response.success) setApiError(true);
    setUserData(response.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="user-details-page-container">
      <div className="user-table-header margin-left-header">User Details</div>
      {!userData?.firstName && !loading && apiError ? (
        <div className="loader-spinner-container">
          <div>User not found</div>
        </div>
      ) : loading && !apiError ? (
        <div className="loader-spinner-container">
          <div className="loader-spinner"></div>
        </div>
      ) : (
        <div className="user-detail-container">
          <div className="user-detail-row">
            <span className="user-detail-left-heading">User Id : </span>
            <span className="user-detail-right">{userData._id}</span>
          </div>
          <div className="user-detail-row">
            <span className="user-detail-left-heading">First Name : </span>
            <span className="user-detail-right">{userData.firstName}</span>
          </div>
          <div className="user-detail-row">
            <span className="user-detail-left-heading">Last Name : </span>
            <span className="user-detail-right">
              {userData.lastName ? userData.lastName : "N/A"}
            </span>
          </div>
          <div className="user-detail-row">
            <span className="user-detail-left-heading">Phone Number : </span>
            <span className="user-detail-right">{userData.phoneNumber}</span>
          </div>
          <div className="user-detail-row">
            <span className="user-detail-left-heading">Email : </span>
            <span className="user-detail-right">{userData.email}</span>
          </div>
        </div>
      )}
      <div className="home-link-container">
        <Link href="/" className="home-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ViewUser;
