import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./Layout";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
