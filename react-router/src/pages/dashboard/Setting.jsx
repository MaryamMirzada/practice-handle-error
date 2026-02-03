import { Outlet } from "react-router-dom";

export default function Setting() {
  return (
    <div>
      <h3>Setting page</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nesciunt
        beatae magnam laudantium suscipit dicta eum officiis quis illo officia
        in autem obcaecati deleniti facilis labore quidem, numquam sapiente
        minus.
      </p>
      <Outlet />
    </div>
  );
}
