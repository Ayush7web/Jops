import React from "react";
import Zigzag from "../../Image/zigzagImage.jpg";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


const SignIn = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative top-16">
      <Link to={"/signUpOtp"}>
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

      {/* ============================================================================== */}
      <div className="w-[280px] h-[1590px]   bg-white flex justify-center items-center rounded-xl">
        <KeyboardBackspaceIcon
          sx={{ position: "absolute", top: "-40px", marginRight: "200px" }}
        />
        {/* ------------ */}

        <div className="absolute mb-135 mr-12">
          <div className="font-semibold text-2xl ">Hey Mate !</div>
          <div className="font-serif italic relative top-2">
            Complete Your Profile{" "}
          </div>
        </div>
        {/* -------------------------------- */}

        <div className="flex flex-col relative top-40 right-2">
          <div className=" ml-5">
            <div className="text-sm relative bottom-2">Full Name</div>
            <div className="text-m font-medium">John Doe</div>
            <div className="text-gray-400 relative bottom-2">
              _______________________________
            </div>
          </div>

          {/* ********************************* */}

          <div className=" ml-5 relative top-4 ">
            <div className="text-sm relative bottom-2">Phone Number</div>
            <div className="text-m font-medium">Auto Fatch</div>
            <div className="text-gray-400 relative bottom-2">
              _______________________________
            </div>
          </div>
          {/* ********************************* */}
          <div className=" ml-5 relative top-8 ">
            <div className="text-sm relative bottom-2">Email</div>
            <div className="text-m font-medium">Enter email</div>
            <div className="text-gray-400 relative bottom-2">
              _______________________________
            </div>
          </div>
          {/* ********************************* */}
          <div className=" ml-5 relative top-12 ">
            <div className="text-sm relative bottom-2">Date Of Birth</div>
            <div className="text-m font-medium">DD/MM/YYYY</div>
            <div className="text-gray-400 relative bottom-2">
              _______________________________
            </div>
          </div>
          {/* ********************************* */}

          <div className=" ml-5 relative top-16 ">
            <div className="text-sm relative bottom-2">Address</div>
            <div className="text-m font-medium">Enter Address</div>
            <div className="text-gray-400 relative bottom-2">
              _______________________________
            </div>
          </div>

          {/* =+*********************************+*++*+*+*+*+*+*+*+*+*+*+*+* */}

          <div className="relative top-18 left-5">
            <div className="text-blue-700 font-semibold  ">
              Regs No.
              <ErrorOutlineIcon
                sx={{ width: "16px", height: "16px", margin: "7px" }}
              />
            </div>
            <div className=" ml-5 relative top-6 right-5 ">
              <div className="text-sm relative bottom-2">State</div>
              <div className="text-m font-medium">
                Select State{" "}
                <KeyboardArrowDownIcon
                  sx={{ width: "24px", height: "24px", marginLeft: "95px" }}
                />
              </div>
              <div className="text-gray-400 relative bottom-2">
                _______________________________
              </div>
            </div>
            {/* --------------------------------------------------- */}
            <div className=" ml-5 relative top-10 right-5 cursor-pointer ">
              <div className="text-sm relative bottom-2">Regs</div>
              <div className="text-m font-medium">8147384733</div>
              <div className="text-gray-400 relative bottom-2">
                _______________________________
              </div>
            </div>
            {/* --------------------------------------------------- */}

            <div className=" ml-5 relative top-14 right-5 ">
              <div className="text-sm relative bottom-2">Expiry Date</div>
              <div className="text-m font-medium">
                Select Date{" "}
                <CalendarMonthIcon
                  sx={{
                    width: "24px",
                    height: "24px",
                    marginLeft: "95px",
                    color: "gray",
                    cursor:"pointer"
                  }}
                />
              </div>
              <div className="text-gray-400 relative bottom-2">
                _______________________________
              </div>
            </div>

            <div className="relative top-16 font-semibold text-sm">
              <span className="font-bold">Tooltip</span> : we will remind you 20{" "}
              <br /> days prior to expiry
            </div>

            <div className="flex mt-22">
              <CheckBoxIcon
                sx={{ color: "blue", width: "24px", height: "24px",cursor:"pointer" }}
              />
              <div className="font-semibold text-sm">
                By Signing you agree to your <br /> to our{" "}
                <span className="text-blue-600">T&C</span> and{" "}
                <span className="text-blue-600">Privacy Policy</span>
              </div>
            </div>
          </div>
          <div className="absolute top-135">
            <button className="font-medium bg-blue-900 text-white w-35 h-12 rounded-2xl mt-75 ml-14 cursor-pointer">
              Continue
            </button>
          </div>
        </div>

        {/* ===================================== */}

        <img
          src={Zigzag}
          alt=""
          className="absolute bottom-[-504px] h-[108px] w-[280px] rounded-xl mb-0.5"
        />
        {/* ---------------------------------------------------------------------------------------------------- */}
      </div>

      <Link to={"/homePage"}>
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

export default SignIn;
