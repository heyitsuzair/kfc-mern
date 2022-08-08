import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LocationState from "./context/locationState";
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
        <Header />
      </LocationState>
    </>
  );
}

export default App;
