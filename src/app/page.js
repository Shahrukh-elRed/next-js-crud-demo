"use client";

export default function Home() {
  const usersData = [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      phoneNumber: "9810101010",
      email: "john@test.com",
    },
    {
      id: 2,
      firstName: "Allen",
      lastName: "Walker",
      phoneNumber: "9810101234",
      email: "allen@test.com",
    },
    {
      id: 3,
      firstName: "Mark",
      lastName: "Manson",
      phoneNumber: "9812345678",
      email: "mark@test.com",
    },
  ];

  const goToAddUser = () => {
    console.log("add user clicked");
  };

  const goToUserEdit = (id) => {
    console.log("edit user id => ", id);
  };

  const deleteUser = (id) => {
    console.log("delete user id => ", id);
  };

  return (
    <main>
      <div className="user-table-header-container">
        <div className="user-table-header">
          <span>Users List</span>
          <span>
            <button onClick={goToAddUser} className="table-add-user-btn">
              Add New User
            </button>
          </span>
        </div>
      </div>
      <div className="user-data-table-container">
        <table className="user-data-table">
          <thead>
            <tr>
              <td className="user-table-header-one">Sr. no.</td>
              <td className="user-table-header-two">Name</td>
              <td className="user-table-header-three">Phone Number</td>
              <td className="user-table-header-four">Email</td>
              <td className="user-table-header-five" colSpan={2}>
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td className="user-table-name">
                  {user.firstName + " " + user.lastName}
                </td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => goToUserEdit(user.id)}
                    className="user-table-delete-btn"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="user-table-edit-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
