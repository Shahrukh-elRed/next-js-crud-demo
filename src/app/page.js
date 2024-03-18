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

  return (
    <main>
      <div className="user-table-header">Users List</div>
      <table className="user-data-table">
        <thead>
          <tr>
            <td>Sr. no.</td>
            <td>Name</td>
            <td>Phone Number</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.firstName + " " + user.lastName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
