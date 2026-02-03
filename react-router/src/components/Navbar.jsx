import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> {' '} { ' '}
        <Link to="product">Product</Link> {' '} { ' '}
        <Link to="about">About</Link> {' '} { ' '}
        <Link to="contact">Contact</Link> {' '} { ' '}
        <Link to="dashboard">Dashboard</Link> {' '} { ' '}

      </nav>
    </div>
  );
}
