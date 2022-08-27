import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LocationState from "./context/locationState";
import UserState from "./context/userState";
import DealState from "./context/dealState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/commons/Footer";
import Product from "./pages/Product";
import Header from "./components/commons/Header";
import TopBar from "./components/commons/TopBar";
import Login from "./pages/Login";
import MyKfc from "./pages/MyKfc";
import OrderHistory from "./pages/OrderHistory";
import CategoryPage from "./pages/CategoryPage";
import AddonState from "./context/addonState";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentState from "./context/paymentState";
import SoftDrinkState from "./context/softDrinkState";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <LocationState>
            <DealState>
              <AddonState>
                <UserState>
                  <PaymentState>
                    <SoftDrinkState>
                      <ToastContainer
                        autoClose={2000}
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
                          <Route
                            path="/orderHistory"
                            element={<OrderHistory />}
                          />
                          <Route path="/cat/:id" element={<CategoryPage />} />
                          <Route path="/cart" element={<Cart />} />
                          <Route path="/delivery" element={<Checkout />} />
                        </Routes>
                        <Footer />
                      </Router>
                    </SoftDrinkState>
                  </PaymentState>
                </UserState>
              </AddonState>
            </DealState>
          </LocationState>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
