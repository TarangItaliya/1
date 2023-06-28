import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import "./assets/css/Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import SalePage from "./component/SalePage";
import PaymentPage from "./component/PaymentPage";
import InventoryPage from "./component/InventoryPage";


function App() {
  return (
    <>

     {/* <Login /> */}
      {/* <SignUp /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/salePage" element={<SalePage />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
          <Route path="/inventoryPage" element={<InventoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
