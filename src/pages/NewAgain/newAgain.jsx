import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const newAgain = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative top-16">
      <Link to={"/manageCards"}>
        <KeyboardDoubleArrowLeftIcon
          sx={{
            color: "white",
            cursor: "pointer",
            position: "relative",
            right: "20px",
            fontSize: "40px",
          }}
        />
      </Link>
      <div className="w-[300px] h-[700px] max-w-sm bg-white justify-center items-center rounded-xl">
        {/* Account Details */}
        <div className="flex justify-between items-center p-4 text-sm font-bold bg-white z-10">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <SignalCellularAltIcon sx={{ fontSize: 18, color: "black" }} />
            <WifiIcon sx={{ fontSize: 18, color: "black" }} />
            <BatteryChargingFullIcon sx={{ fontSize: 18, color: "black" }} />
          </div>
        </div>

        {/* =================================================================== */}
        {/*  Header Section */}
        <div className="flex space-x-3 p-8">
          <KeyboardBackspaceIcon sx={{ fontSize: 24, color: "black" }} />
          <h3 className="font-semibold text-xl">Add New</h3>
        </div>
        {/* =================================================================== */}

        <div className="flex flex-col space-y-4 p-8">
          {/* Account details */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Card Type
            </label>
            <input
              type="text"
              placeholder="Credit Card"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <KeyboardArrowDownIcon
            sx={{
              color: "blue",
              position: "relative",
              right: "-200px",
              bottom: "47px",
            }}
          />
          {/* ============================================================== */}

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
            Card Number
            </label>
            <input
              type="text"
              placeholder="**** **** **** 5678"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* ============================================================== */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Card Expiry -- Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              CVV
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <Link to={"/setting"}>
        <KeyboardDoubleArrowRightIcon
          sx={{
            color: "white",
            cursor: "pointer",
            position: "relative",
            right: "-14px",
            fontSize: "40px",
          }}
        />
      </Link>
    </div>
  );
};

export default newAgain;
