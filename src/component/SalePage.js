import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const SalePage = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="main_dashboard_bg mt-2 me-2 px-3 fs-5 py-3 rounded  w-100">
            Sale Page
        </div>
      </div>
    </>
  )
}

export default SalePage
