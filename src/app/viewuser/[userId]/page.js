import Link from "next/link";

const ViewUser = () => {
  const userData = {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    phoneNumber: "9810101010",
    email: "john@test.com",
  };

  return (
    <div className="user-details-page-container">
      <div className="user-table-header margin-left-header">User Details</div>
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
      <div className="home-link-container">
        <Link href="/" className="home-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ViewUser;
