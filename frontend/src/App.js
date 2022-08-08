import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LocationState from "./context/locationState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

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
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </LocationState>
    </>
  );
}

export default App;
