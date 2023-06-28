import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import imageProduct from "../assets/images/i.webp";
import { useState } from "react";
import $ from "jquery";

const InventoryPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="main_dashboard_bg mt-2 me-2 px-4 py-3 rounded diffrent_bg  w-100">
          <div className="fs-4"> Stock Inventory</div>
          <hr size="3" width="100%" align="center" className="" />

         

          {/* <div className="row">
            <div className="col-md-6">
              <div className="price_slider mt-4 ">
                <input
                  type="range"
                  min="249"
                  max="2000"
                  value={value}
                  onChange={handleChange}
                  className="slider border "
                  step={50}
                />
                <div className="text-danger">Price: {value}</div>
              </div>
            </div>
          </div> */}
          <div className="row ">
            <div className="col-xl-6 ">
              <div className="inventory_filters  ">
                <div className="row ">
                  <div className="col-xl-4 col-lg-2  col-md-3  mt-2 ">
                    <div className="fs_12px fw-medium mb-1">Categories :</div>
                    <select className=" py-1  rounded me-3  ">
                      <option className="">Wear</option>
                      <option>Watch</option>
                      <option>Sports</option>
                    </select>
                  </div>
                  <div className="col-xl-4 col-lg-2  col-md-3  mt-2">
                    <div className="fs_12px fw-medium mb-1">Product :</div>
                    <select className=" py-1  rounded me-3  ">
                      <option className="">T-shirt</option>
                      <option>Pant</option>
                      <option>Capry</option>
                    </select>
                  </div>
                  <div className="col-xl-4 col-lg-2  col-md-3  mt-2">
                    <div className="fs_12px fw-medium mb-1">Color :</div>

                    <select className=" py-1  rounded me-3  ">
                      <option className="">Gray</option>
                      <option>Black</option>
                      <option>Skin</option>
                    </select>
                  </div>
                  <div className="col-xl-4 col-lg-2  col-md-3  mt-2">
                    <div className="fs_12px fw-medium mb-1">Size :</div>

                    <select className=" py-1  rounded me-3  ">
                      <option className="">S</option>
                      <option className="">L</option>
                      <option>xl</option>
                      <option>xxl</option>
                      <option>xxxl</option>
                    </select>
                  </div>
                  <div className="col-xl-4 col-lg-2  col-md-3  mt-2">
                    <div className="fs_12px fw-medium mb-1">Quantity :</div>

                    <select className=" py-1  rounded me-3  ">
                      <option className="">1</option>
                      <option className="">2</option>
                      <option>3</option>
                      <option>5</option>
                      <option>10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-3">
              <div className="add_btn d-flex justify-content-end mt-5">
                <button className="text-white px-3 py-2 rounded mt-3 ">
                  <span className="me-2">
                    <i class="fa-solid fa-circle-plus align-middle"></i>
                  </span>
                  Add Inventory
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded px-3 mt-2 border">
            <div className="d-flex justify-content-between">
              <div className="entries mt-3">
                <span>Show</span>{" "}
                <select className=" py-1 px-1 me-1  ">
                  <option className="text-black">1</option>
                  <option className="">5</option>
                  <option className="">10</option>
                  <option className="">15</option>
                </select>
                <span>entries</span>
              </div>
              <div className="main_search_bar d-flex justify-content-end mt-3">
                <input
                  placeholder="Search"
                  className=" ps-4 pe-5 py-1 bg-white"
                />
                <div className="search_icon bg-body-secondary px-3  ">
                  <i class="fa-solid fa-magnifying-glass py-2"></i>
                </div>
              </div>
            </div>
            <table className="table text-center align-middle rounded-3  mt-4  ">
              <thead className="">
                <tr className="bg-light ">
                  <th className="fs-6">
                    CATAGORY
                    <span className="swap_icon ms-2">
                      <i class="fa-solid fa-right-left fa-rotate-90  align-middle opacity-50"></i>
                    </span>
                  </th>
                  <th className="fs-6">
                    PRODUCT{" "}
                    <span className="swap_icon ms-2">
                      <i class="fa-solid fa-right-left fa-rotate-90  align-middle opacity-50"></i>
                    </span>
                  </th>
                  <th className="fs-6">
                    COLOR{" "}
                    <span className="swap_icon ms-2">
                      <i class="fa-solid fa-right-left fa-rotate-90  align-middle opacity-50"></i>
                    </span>
                  </th>
                  <th className="fs-6">
                    SIZE{" "}
                    <span className="swap_icon ms-2">
                      <i class="fa-solid fa-right-left fa-rotate-90  align-middle opacity-50"></i>
                    </span>
                  </th>
                  <th className="fs-6">
                    QUANTITY
                    <span className="swap_icon ms-2">
                      <i class="fa-solid fa-right-left fa-rotate-90  align-middle opacity-50"></i>
                    </span>{" "}
                  </th>
                  <th className="fs-6">
                    PRICE{" "}
                    <span className="swap_icon ms-2">
                      <i class="fa-solid fa-right-left fa-rotate-90  align-middle opacity-50"></i>
                    </span>
                  </th>
                  <th className="fs-6">
                    ACTION{" "}
                    <span className="swap_icon ms-2">
                      <i class="fa-solid fa-right-left fa-rotate-90  align-middle opacity-50"></i>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="fw-bold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg  z-2 ">
                      <i class="fa-solid fa-ellipsis a_b_c"></i>

                      <div className="main_view_delete z-7">
                        <ul className="view_delete bg-light py-1 px-3 border   ">
                          <li className="d-flex justify-content-start mb-1">
                            View
                          </li>

                          <li className="d-flex justify-content-start">
                            Delete
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="fw-semibold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="fw-semibold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">WEAR</td>
                  <td className="">
                    <div className="product_image ">
                      <img src={imageProduct} className="rounded-1 border " />
                      <span className="ms-3">T-shirt</span>
                    </div>
                  </td>
                  <td>Black</td>
                  <td>
                    <span class="badge text-bg-danger">XXL</span>
                  </td>
                  <td>
                    <span class="badge text-bg-success">3</span>
                  </td>
                  <td>
                    <span class="badge text-bg-warning">$ 400</span>
                  </td>
                  <td>
                    <div className="three_dot_bg">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryPage;
