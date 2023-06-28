import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const PaymentPage = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="main_dashboard_bg mt-2 me-2 px-3 py-3 rounded  w-100">
            PAYMENT PAGE
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
