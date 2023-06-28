import React from "react";
import image from "../assets/images/1.png";
import Sidebar from "./Sidebar";
import $ from 'jquery';

const Navbar = () => {
  const handleToggle = () => {
    $("#sidebar").toggleClass("tarang")
    $("#id_kartavya").toggleClass("tarang2")
    $("#id_menu_text").toggleClass("tarang3")
    $("#id_menu_text2").toggleClass("tarang3")
    $("#id_menu_text3").toggleClass("tarang3")
    $("#id_menu_text4").toggleClass("tarang3")
  }

  return (
    <>
    <div className="main_nav px-5 py-2 ">
      <div className="d-flex justify-content-between  ">
        <div className="menu_bar mt-2 ">
          <button className="menu_btn text-white" onClick={handleToggle}>
          <i className="fa-solid fa-bars-staggered fs-4 "></i>
          </button>
        </div>
        <div className="info_bell_pic d-flex text-white ">
          <div className="info pe-4  mt-2 ">
            <i className="fa-solid fa-info "></i>
          </div>
          <div className="bell pe-4 mt-2 ">
            <i className="fa-solid fa-bell "></i>
          </div>
          <div className="pic">
            <img className=" rounded-circle " src={image} />
          </div>
        </div>
      </div>
    </div>
    
      </>
  );
};

export default Navbar;
