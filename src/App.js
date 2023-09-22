import React from "react";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify"; 

const App = () => {
  return (
    <>
      <Layout />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
