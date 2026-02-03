import { Outlet } from "react-router-dom";

export default function Setting1() {
  return (
    <div>
      <ul>
        <li>your Info</li>
        <li>your profile</li>
        <li>Score</li>
      </ul>
      <Outlet />
    </div>
  );
}
