import React from 'react'
import Image from "../../Image/textImage.jpg";
import { Link } from "react-router-dom";
import Zigzag from "../../Image/zigzagImage.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";


const SignUpOtp = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center  ">
      <Link to={"/signUp"}>
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
      {/* ------------------------------------------------------------------------------- */}

      <div className="w-[270px] h-[535px] bg-white flex justify-center items-center rounded-xl  ">
        <KeyboardBackspaceIcon
          sx={{
            color: "black",
            position: "absolute",
            top: "45px",
            marginRight: "210px",
          }}
        />
        <div className="relative bottom-50 left-20 text-xl font-medium  ">
          Welcome!
        </div>
        <img src={Image} alt="" className=" absolute top-35 " />

        <div className="mt-9 mr-20">
          <div className="font-normal relative ">Phone Number </div>
          <div className="font-normal relative  ">+61 4xxx xxx xxxx</div>
          <div className="relative bottom-4">
            _________________________________
          </div>

          <div className="font-semibold text-xs">OTP </div>
          <div className="font-normal relative flex ">
            Enter OTP
            <div className="text-blue-700 flex text-sm font-semibold ml-25">
              Resend
            </div>
          </div>
          <div className="relative bottom-4">
            _________________________________
          </div>
          <div className='text-blue-700 font-semibold text-sm ml-45 relative bottom-4'>00:59</div>
        </div>

        {/* ====================== */}

        <div className="fixed">
          <button className="font-medium bg-blue-700 text-white w-35 h-12 rounded-sm mt-65 ">
            Continue
          </button>
        </div>
        <img
          src={Zigzag}
          alt=""
          className="absolute bottom-6.5 h-[108px] w-[270px] rounded-xl mb-0.5"
        />
      </div>
      <Link to={"/signIn"}>
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

export default SignUpOtp