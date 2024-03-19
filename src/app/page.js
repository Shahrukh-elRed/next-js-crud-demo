"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [usersData, setUsersData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchusers = async () => {
    let result = await fetch("/api/users");
    result = await result.json();
    setUsersData(result.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchusers();
  }, []);

  const goToAddUser = () => {
    router.push("/addnewuser");
  };

  const goToUserEdit = (id, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    router.push("/edituser/" + id);
  };

  const deleteUser = async (id, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (deleteId) return false;
    setDeleteId(id);
    let result = await fetch(`/api/users/${id}`, { method: "DELETE" });
    result = await result.json();
    if (result.success) {
      fetchusers();
      setDeleteId(null);
      alert("user deleted");
    } else {
      alert("Somethign went wrong! please try again");
      setDeleteId(null);
    }
  };

  const viewUserDetails = (id) => {
    router.push("/viewuser/" + id);
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
      {usersData.length === 0 && !loading ? (
        <div className="loader-spinner-container">
          <div>No users found</div>
        </div>
      ) : loading ? (
        <div className="loader-spinner-container">
          <div className="loader-spinner"></div>
        </div>
      ) : (
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
                <tr
                  key={user._id}
                  className="user-table-data-row"
                  onClick={() => viewUserDetails(user._id)}
                >
                  <td>{index + 1}</td>
                  <td className="user-table-name">
                    {user.firstName + " " + user.lastName}
                  </td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={(e) => goToUserEdit(user._id, e)}
                      className="user-table-delete-btn"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => deleteUser(user._id, e)}
                      className="user-table-edit-btn"
                    >
                      {user._id === deleteId ? (
                        <span className="delete-btn-loader-container">
                          <span className="btn-loader-spinner"></span>
                        </span>
                      ) : (
                        <>Delete</>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
