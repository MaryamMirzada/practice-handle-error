import { Outlet } from "react-router-dom";

export default function User1() {
  const Users = [
    { id: 1, name: "Ahmad", position: "Teacher" },
    { id: 2, name: "Ali", position: "Doctor" },
    { id: 3, name: "Monir", position: "Cleaner" },
  ];
  return (
    <div>
      <ul>
        {Users.map((user) => (
          <li key={user.id}>
            {user.name} | {user.position}
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
