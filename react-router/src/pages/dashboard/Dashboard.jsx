import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Link to="user">User</Link> || <Link to="setting">Setting</Link>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}
