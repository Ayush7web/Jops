import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import face from "../../Image/faceIcon.jpg";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";



const Profile = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative top-16">
      <Link to={"/account"}>
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

      <div className="w-[300px] h-auto max-w-sm bg-white justify-center items-center rounded-xl">
        {/*  Top Status Bar */}
        <div className="flex justify-between items-center p-4 text-sm font-bold bg-white z-10 mt-158">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <SignalCellularAltIcon sx={{ fontSize: 18, color: "black" }} />
            <WifiIcon sx={{ fontSize: 18, color: "black" }} />
            <BatteryChargingFullIcon sx={{ fontSize: 18, color: "black" }} />
          </div>
        </div>

        {/*  Header Section */}
        <div className="flex space-x-3 p-8">
          <KeyboardBackspaceIcon sx={{ fontSize: 24, color: "black" }} />
          <h3 className="font-semibold text-xl">Profile</h3>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <img src={face} alt="face" className="w-24 h-24 rounded-full" />
        </div>

        {/*  FORM SECTION */}
        <form>
          <div className="flex flex-col space-y-4 p-8">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Phone Number Field */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+61 4xxx xxx xxxx"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <h3 className="text-green-600 font-semibold relative left-43 bottom-8   ">
                Verified
              </h3>
            </div>

            {/* date of birth */}
            <div className="flex flex-col relative bottom-6 ">
              <label className="text-sm font-semibold text-gray-600 mb-1 ">
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* address */}
            <div className="flex flex-col relative bottom-6 ">
              <label className="text-sm font-semibold text-gray-600 mb-1 ">
                Address
              </label>
              <input
                type="text"
                placeholder="123 Main St, City, Country"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* ====================================== */}
            <div className="flex flex-col relative bottom-6 ">
              <label className="text-sm font-semibold text-gray-600 mb-1 ">
                Abn(Optional)
              </label>
              <input
                type="text"
                placeholder="564884"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* ====================================== */}
            <div className="flex flex-col relative bottom-6 ">
              <label className="text-sm font-semibold text-gray-600 mb-1 ">
                License(front)
              </label>
              <input
                type="text"
                placeholder="mylicensefront.jpg"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* ====================================== */}
            <div className="flex flex-col relative bottom-6 ">
              <label className="text-sm font-semibold text-gray-600 mb-1 ">
                License(back)
              </label>
              <input
                type="text"
                placeholder="mylicenseback.jpg"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* ====================================== */}
            {/* <div className="text-blue-700 font-semibold  ">
              Regs No.
              <ErrorOutlineIcon
                sx={{ width: "16px", height: "16px", margin: "7px" }}
              />
            </div> */}
            <div className="flex flex-col relative bottom-6 ">
              <label className="text-sm font-semibold text-gray-600 mb-1 ">
                state
              </label>
              <input
                type="text"
                placeholder="select state"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* ====================================== */}
            <div className="flex flex-col relative bottom-6 ">
              <label className="text-sm font-semibold text-gray-600 mb-1 ">
                Rego
              </label>
              <input
                type="text"
                placeholder="564884"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* ====================================== */}
            <div className="flex flex-col relative bottom-6 ">
              <label className="text-sm font-semibold text-gray-600 mb-1 ">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="select date"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative bottom-6 font-semibold text-sm">
              <span className="font-bold">Tooltip</span> : we will remind you 20{" "}
              <br /> days prior to expiry
            </div>
            <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Save Changes
            </button>
          </div>
        </form>
      </div>
      {/*  Navigation Button */}
      <Link to={"/accountDetails"}>
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
};

export default Profile;  