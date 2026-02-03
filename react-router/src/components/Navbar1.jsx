import { Link } from "react-router-dom";

export default function Navbar1() {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="product">Product</Link>
      <Link to="contact"> Contact</Link>
      <Link to="dashboard">Dashboard</Link>
    </div>
  );
}
