import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/commons/Spinner";

export default function Success() {
  const navigate = useNavigate();
  useEffect(() => {
    toast.error("Please Complete Payment To Proceed!");
    navigate("/");
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
}
