import { Link, Outlet } from "react-router-dom";

export default function Dashboard1() {
  return (
    <div>
      <Link to="user">User</Link>
      <Link to="setting">Setting</Link>
    </div>
  );
}
