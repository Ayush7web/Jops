import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

const walletPin = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative top-16">
      <Link to={"/setting"}>
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
          <h3 className="font-semibold text-xl">Wallet PIN</h3>
          <ToggleOnIcon sx={{color:"blue" , fontSize:"39px" , position:"relative" , bottom:"5px" , left :"60px"}}/>
        </div>
        {/* =================================================================== */}

         <div className="flex flex-col space-y-4 p-8">
          {/* Account details */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Enter 4 Digit PIN
            </label>
            <input
              type="text"
              placeholder="3545"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* ======================-=--------------------------------- */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Confirm 4 Digit PIN
            </label>
            <input
              type="text"
              placeholder="****"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          </div>
      </div>

      <Link to={"/history"}>
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

export default walletPin;
