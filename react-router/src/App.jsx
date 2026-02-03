import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/dashboard/User";
import Setting from "./pages/dashboard/Setting";
import Contact from "./pages/Contact";
import Navbar1 from "./components/Navbar1";
import Home1 from "./pages/Home1";
import Product1 from "./pages/Product1";
import Contact1 from "./pages/Contact1";
import Dashboard1 from "./pages/dushboard1.jsx/Dashboard1";
function App() {
  return (
    <div>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="user" element={<User />}></Route>
          <Route path="setting" element={<Setting />}></Route>
        </Route>
      </Routes> */}
      <Navbar1 />
      <Routes>
        <Route path="/" index element={<Home1 />}></Route>
        <Route path="/contact" element={<Contact1 />}></Route>
        <Route path="/product" element={<Product1 />}></Route>
        <Route path="dashboard" element={<Dashboard1 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
