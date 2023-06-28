import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import image from "../assets/images/DASHBOARD.jpg";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="main_dashboard_bg mt-2 me-2 px-3 py-3 rounded  w-100">
          <div className="main_search_bar d-flex justify-content-end">
            <input placeholder="Search" className=" ps-4 pe-5 py-2 fs-6 bg-white" />
            <div className="search_icon bg-body-secondary px-3  ">
              <i class="fa-solid fa-magnifying-glass py-2"></i>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xxl-3 col-lg-6 my-2 ">
              <div className="main_revenue_box border border-success-subtle rounded d-flex  ps-4 pe-5 py-4">
                <div className="icon_revenue_box   text-white rounded  py-2 text-center ">
                  <i class="fa-solid fa-dollar-sign align-middle "></i>
                </div>
                <div className="me-5 main_revenue_text ms-3">
                  <div className="text-box fw-medium ">Revenue</div>
                  <div className="number">$1,23,456</div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 my-2 ">
              <div className="main_expense_box border border-danger-subtle rounded d-flex  ps-4 pe-5 py-4">
                <div className="icon_expense_box   text-white rounded   py-2 text-center">
                  <i class="fa-regular fa-credit-card align-middle "></i>
                </div>
                <div className="me-5 main_expense_text ms-3">
                  <div className="text-box fw-medium ">Expense</div>
                  <div className="number">$1,23,456</div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 my-2 ">
              <div className="main_happy_clients_box border border-warning-subtle rounded d-flex  ps-4 py-4">
                <div className="icon_happy_clients_box   text-white rounded  py-2  text-center">
                  <i class="fa-solid fa-dollar-sign align-middle"></i>
                </div>
                <div className="me-5 main_happy_clients_text ms-3">
                  <div className="text-box fw-medium ">Happy Clients</div>
                  <div className="number">$1,23,456</div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 my-2 ">
              <div className="main_since_box border border-info-subtle rounded d-flex  ps-4 pe-5 py-4">
                <div className="icon_since_box   text-white rounded  py-2  text-center">
                  <i class="fa-solid fa-dollar-sign align-middle"></i>
                </div>
                <div className="me-5 main_since_text ms-3">
                  <div className="text-box fw-medium ">Since</div>
                  <div className="number">$1,23,456</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border px-2 pb-3 pt-2 mt-2 rounded border-info">
          <div className="row mt-2 ">
            <div className="col-xxl-4 col-lg-6">
              <div className="all_dashboard_filter   rounded  d-flex justify-content-around ">
                <div className="today_filter nav-link active py-2 px-4">Today</div>
                <div className="today_filter nav-link active py-2 px-4">Week</div>
                <div className="today_filter nav-link active py-2 px-4">Month</div>
                <div className="today_filter nav-link active py-2 px-4">Year</div>
              </div>
            </div>
          </div>
          <div className="row  ">
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">
                    Customers
                  </div>
                  <div className="number_text fw-bold">104,224</div>
                </div>
                <div className="customer_icon pt-2">
                  <i class=" fa-solid fa-people-group align-middle fs-3 opacity-50 text-danger"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">Order</div>
                  <div className="number_text fw-bold">104,224</div>
                </div>
                <div className="customer_icon pt-2">
                  <i class=" fa-solid fa-cart-shopping align-middle fs-3 opacity-50 text-info"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">
                    Avg Sale
                  </div>
                  <div className="number_text fw-bold">$17224</div>
                </div>
                <div className="customer_icon pt-2 pe-1">
                  <i class=" fa-solid fa-percent align-middle fs-3 opacity-50 text-warning"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">
                    Avg Item Sale
                  </div>
                  <div className="number_text fw-bold">104</div>
                </div>
                <div className="customer_icon pt-2 pe-1">
                  <i class=" fa-solid fa-calculator align-middle fs-3 opacity-50 text-info"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">
                    Total Sale
                  </div>
                  <div className="number_text fw-bold">$1104224</div>
                </div>
                <div className="customer_icon pt-2 pe-1">
                  <i class=" fa-regular fa-calendar-plus align-middle fs-3 opacity-50 text-danger"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">
                    Visitors
                  </div>
                  <div className="number_text fw-bold">10400</div>
                </div>
                <div className="customer_icon pt-2">
                  <i class=" fa-solid fa-people-roof align-middle fs-3 opacity-50 text-success"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">
                    Total Products
                  </div>
                  <div className="number_text fw-bold">422400</div>
                </div>
                <div className="customer_icon pt-2">
                  <i class=" fa-solid fa-cart-flatbed-suitcase align-middle fs-3 opacity-50 text-danger"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">
                    Top Selling Item
                  </div>
                  <div className="number_text fw-bold">4,224</div>
                </div>
                <div className="customer_icon pt-2">
                  <i class=" fa-solid fa-star align-middle fs-3 opacity-50 text-warning"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6  mt-4">
              <div className="customer_box py-4 px-4 border bg-white rounded d-flex justify-content-between ">
                <div className="customer_and_number">
                  <div className="customer_text text-body-secondary">
                    Dealership
                  </div>
                  <div className="number_text fw-bold">42</div>
                </div>
                <div className="customer_icon pt-2">
                  <i class=" fa-solid fa-handshake-angle align-middle fs-3 opacity-50 text-danger"></i>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-xxl-4 col-lg-6 mt-5">
              <div className="all_dashboard_filter   rounded  d-flex justify-content-around ">
                <div className="today_filter py-2 px-4">Today</div>
                <div className="today_filter py-2 px-4">Week</div>
                <div className="today_filter py-2 px-4">Month</div>
                <div className="today_filter py-2 px-4">Year</div>
              </div>
            </div>
          <div className="chart_img mt-4">
            <img src={image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
