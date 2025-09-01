import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Link } from "react-router-dom";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import face from "../../Image/face.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import QrCode from "../../Image/qrCode.jpg";


function Account() {
  const menuItems = [
    "Profile",
    "Manage Cards",
    "Account Details",
    "Setting",
    "Transaction History",
    "Help",
  ];

  return (
    <div className="bg-gray-800 flex justify-center items-center min-h-screen">
      <Link to={"/homePage"}>
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
      {/* Main Container */}
      <div className="w-[300px] max-w-sm h-auto bg-white rounded-3xl overflow-hidden shadow-lg">
        {/* Top Status Bar */}
        <div className="flex justify-between items-center p-4 text-sm font-bold bg-white z-10">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            {/* TODO: Add your cellular signal icon component here */}
            <SignalCellularAltIcon sx={{ fontSize: 18, color: "black" }} />
            {/* TODO: Add your Wi-Fi icon component here */}
            <WifiIcon sx={{ fontSize: 18, color: "black" }} />
            {/* TODO: Add your battery icon component here */}
            <BatteryChargingFullIcon sx={{ fontSize: 18, color: "black" }} />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col p-4">
          {/* Header Section */}
          <div className="flex items-center p-2 mb-4">
            {/* TODO: Add your back arrow icon component here */}
            <KeyboardBackspaceIcon sx={{ fontSize: 24, color: "black" }} />
            <div className="flex items-center space-x-3">
              <img
                src={face}
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-white shadow-md"
              />
              {/* TODO: Set the image source in the 'src' attribute above */}
              <div>
                <div className="flex items-center text-lg font-bold">
                  <span>Alice Park</span>
                  {/* TODO: Add your verified checkmark icon component here */}
                </div>
                <p className="text-xs text-gray-500">+1-989898989</p>
                <p className="text-xs text-gray-500">alicepark@spendzz.in</p>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-green-50 p-6 rounded-3xl text-center shadow-inner">
            <div className="font-extrabold text-3xl mb-2">
              <span className="text-blue-600">JO</span>
              <span className="text-green-500">PS</span>
            </div>
            <p className="text-sm tracking-widest text-gray-500 mb-6">
              JOY OF PAYMENT SYSTEM
            </p>
            <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
              <img src={QrCode} alt="QR Code" className="w-48 h-48" />
              {/* TODO: Set the QR code image source in the 'src' attribute above */}
            </div>
            <button className="flex items-center justify-center mx-auto mt-6 text-blue-600 font-semibold text-sm">
              {/* TODO: Add your share icon component here */}
              Share
            </button>
          </div>

          {/* Spacer */}
          <div className="h-8"></div>

          {/* Menu Section */}
          <div className="w-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 rounded-xl transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-gray-500">
                    {/* TODO: Add your menu icon component here */}
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
                {/* TODO: Add your right arrow icon component here */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to={"/profile"}>
        <KeyboardDoubleArrowRightIcon
          sx={{
            color: "white",
            cursor: "pointer",
            position: "relative",
            left: "20px",
            fontSize: "40px",
          }}
        />
      </Link>
    </div>
  );
    }


export default Account;
