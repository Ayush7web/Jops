import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TuneIcon from "@mui/icons-material/Tune";
import PersonPinIcon from "@mui/icons-material/PersonPin";


const walletPin = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative top-16">
      <Link to={"/walletPin"}>
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
        <div className="flex p-8 ">
          <KeyboardBackspaceIcon
            sx={{
              fontSize: 24,
              color: "black",
              position: "relative",
              right: "15px",
              top: "2px",
            }}
          />
          <h3 className="font-semibold text-xl ">Transaction History</h3>
          <TuneIcon
            sx={{
              color: "blue",
              fontSize: "30px",
              position: "relative",
              bottom: "-5px",
              left: "20px",
            }}
          />
        </div>
        {/* =================================================================== */}

        {/* for middle part of history page */}
        <div className="max-w-md mx-auto border-t border-b border-gray-300 flex items-center justify-between py-4 px-6">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <PersonPinIcon sx={{ fontSize: 30, color: "blue" }} />
            </div>

            {/* Text */}
            <div>
              <p className="text-gray-800 font-semibold">Paid To Ms Abhay</p>
              <p className="text-gray-500 text-sm">Today, 1:56 PM</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-right">
            <p className="text-gray-800 font-semibold">+$12</p>
            <p className="text-green-500 text-sm font-medium">Success</p>
          </div>
          {/* ======================================================================================= */}
        </div>
        <div className="max-w-md mx-auto border-t border-b border-gray-300 flex items-center justify-between py-4 px-6">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <PersonPinIcon sx={{ fontSize: 30, color: "blue" }} />
            </div>

            {/* Text */}
            <div>
              <p className="text-gray-800 font-semibold">Paid To Ms Abhay</p>
              <p className="text-gray-500 text-sm">Today, 1:56 PM</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-right">
            <p className="text-gray-800 font-semibold">-$1002</p>
            <p className="text-red-500 text-sm font-medium">Failed</p>
          </div>
          {/* ======================================================================================= */}
        </div>
        {/* ================================================================================================= */}

        <div className="max-w-md mx-auto border-t border-b border-gray-300 flex items-center justify-between py-4 px-6">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <PersonPinIcon sx={{ fontSize: 30, color: "blue" }} />
            </div>

            {/* Text */}
            <div>
              <p className="text-gray-800 font-semibold">Paid To Ms Abhay</p>
              <p className="text-gray-500 text-sm">Today, 1:56 PM</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-right">
            <p className="text-gray-800 font-semibold">-$999</p>
            <p className="text-green-500 text-sm font-medium">Success</p>
          </div>
        </div>
        {/* ======================================================================================= */}
      </div>

      <Link to={"/filter"}>
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
