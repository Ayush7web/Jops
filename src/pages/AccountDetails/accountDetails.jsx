import React from 'react'
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";



const accountDetails = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative top-16">
      <Link to={"/profile"}>
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
          <h3 className="font-semibold text-xl">Account Details</h3>
        </div>
        {/* =================================================================== */}

        <div className="flex flex-col space-y-4 p-8">
          {/* Account details */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Bank Of Queensland
            </label>
            <input
              type="text"
              placeholder="***********0355"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <DeleteOutlineIcon sx={{color:"blue" , position:'relative', right:"-200px" , bottom:"47px"}}/>
          {/* ============================================================== */}

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              National Australia Bank
            </label>
            <input
              type="text"
              placeholder="***********0066"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <DeleteOutlineIcon sx={{color:"blue" , position:'relative', right:"-200px" , bottom:"47px"}}/>
          {/* ============================================================== */}
        </div>
      </div>

      <Link to={"/addNew"}>
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
}

export default accountDetails