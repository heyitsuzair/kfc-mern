import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LocationState from "./context/locationState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Login from "./pages/Login";
import MyKfc from "./pages/MyKfc";
import OrderHistory from "./pages/OrderHistory";
function App() {
  return (
    <>
      <LocationState>
        <ToastContainer
          autoClose={3000}
          position="top-right"
          pauseOnHover={true}
          draggable={true}
          theme="dark"
        />
        <TopBar />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myKfc" element={<MyKfc />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
          </Routes>
          <Footer />
        </Router>
      </LocationState>
    </>
  );
}

export default App;
