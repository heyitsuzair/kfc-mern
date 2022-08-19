import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LocationState from "./context/locationState";
import DealState from "./context/dealState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Login from "./pages/Login";
import MyKfc from "./pages/MyKfc";
import OrderHistory from "./pages/OrderHistory";
import CategoryPage from "./pages/CategoryPage";
import AddonState from "./context/addonState";
function App() {
  return (
    <>
      <LocationState>
        <DealState>
          <AddonState>
            <ToastContainer
              autoClose={3000}
              position="top-right"
              pauseOnHover={true}
              draggable={true}
              theme="dark"
              toastClassName="toast-custom"
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
                <Route path="/cat/:id" element={<CategoryPage />} />
              </Routes>
              <Footer />
            </Router>
          </AddonState>
        </DealState>
      </LocationState>
    </>
  );
}

export default App;
