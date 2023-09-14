import * as React from "react";
import Box from "@mui/material/Box";
import { IconPhoneCall , IconMapPin, IconReceipt, IconTrash  } from "@tabler/icons-react";
import "./edit.scss"

const Edit = () => {
    const customer_data = [
        {
          icon: <IconPhoneCall />,
          value1: "Phone Number",
          value2: "234445686",
        },
        {
          icon: <IconReceipt  />,
          value1: "GST Number",
          value2: "29ABCDE1234TMZP",
        },
      
        {
          icon: <IconMapPin />,
          value1: "Shipping Address",
          value2: "22, 6th Cross Street, Basavanagudi, Bangalore, KARNATAKA, 560004",
        },
        {
          icon: <IconMapPin />,
          value1: "Billing Address",
          value2: "7/11, Hauz Khas, New Delhi, DELHI, 110016",
        },
      ];
  return (
    <div>
        <div>
        <Box sx={{ width: 350 }} className="w-full">
          <h1 className="text_left heading">Edit Customer</h1>
          <div className="customer-profile flex items-start px-4 py-6">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-normal text-gray-700 -mt-1">
                  Brad Adams{" "}
                </h2>
              </div>
              <p className="text-gray-500  bg-slate-200 rounded-full text-center">Customer </p>
            </div>
          </div>
          <div className="edit-section-wrapper">
            <div className="edit-section">
              {customer_data.map((item, index)=>{
                return (
              <div className="flex card-sec" key={index}>
                <div className="customer-info-icon-wrapper ">
                  {item.icon}
                </div>
                <div className="customer-info-text">
                  <h2>{item.value1}</h2>
                  <p className=" font-medium">{item.value2}</p>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </Box>
      </div>
      <div className="add-customer-btn-wrapper">
        <button className="delete-btn text-red-600 flex gap-1 justify-center" type="submit">
            <IconTrash/>
          Delete Customer
        </button>
      </div>
    </div>
  )
}

export default Edit