import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="main_side_bar m-2 rounded tarang_media" id="sidebar">
      <div className="main_logo py-5">
        <div
          className="text-white fw-bolder fs-3 text-center py-5 tarang2_media "
          id="id_kartavya"
        >
          Kartavya
        </div>
      </div>
      <div className="main_menu ps-4 position-fixed  ">
        <ul className="text-white ">
          <li className="py-3">
            <Link to="/">
            <div className="d-flex text-white">
              <div className="span_icon me-4 ">
                <i class="fa-solid fa-house text-center"></i>{" "}
              </div>
              <div className="tarang3_media" id="id_menu_text">
                Dashboard{" "}
              </div>{" "}
            </div>{" "}
            </Link>
          </li>
          <li className="py-3">
            <Link to="/salePage">
            <div className="d-flex text-white">
              <div className="span_icon me-4 ">
                <i class="fa-brands fa-shopify text-center"></i>{" "}
              </div>
              <div className="tarang3_media" id="id_menu_text2">
                Sale Page{" "}
              </div>{" "}
            </div>{" "}
            </Link>
          </li>
          <li className="py-3">
            <Link to="/paymentPage">
            <div className="d-flex text-white">
              <div className="span_icon me-4 ">
                <i class="fa-solid fa-file-invoice-dollar text-center"></i>
              </div>
              <div className="tarang3_media" id="id_menu_text3">
                Payment Page{" "}
              </div>{" "}
            </div>{" "}
            </Link>
          </li>
          <li className="py-3">
            <Link to="/inventoryPage">
            <div className="d-flex text-white">
              <div className="span_icon me-4 ">
                <i class="fa-solid fa-cart-flatbed text-center"></i>{" "}
              </div>
              <div className="tarang3_media" id="id_menu_text4">
                Inventory Page
              </div>{" "}
            </div>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
