import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// require("dotenv").config();

function App() {
  const [longitude, setLongitude] = useState(69.3451);
  const [latitude, setLatitude] = useState(30.3753);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  };
  useEffect(() => {
    getLocation();
    //eslint-disable-next-line
  }, [longitude, latitude]);
  return (
    <>
      <ToastContainer
        autoClose={3000}
        position="top-right"
        pauseOnHover={true}
        draggable={true}
        theme="dark"
      />
      <TopBar />
      <Header
        latitude={latitude}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        longitude={longitude}
      />
    </>
  );
}

export default App;
