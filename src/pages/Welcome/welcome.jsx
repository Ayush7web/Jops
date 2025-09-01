import React from "react";
import Image from "../../Image/textImage.jpg";
import { Link } from "react-router-dom";
import Zigzag from "../../Image/zigzagImage.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Welcome = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center  ">
      <Link to={"/"}>
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

      <div className="w-[270px] h-[585px] bg-white flex justify-center items-center rounded-xl  ">
        <div className="relative bottom-50 left-20 text-xl font-medium ">
          Welcome!
        </div>
        <img src={Image} alt="" className=" absolute top-40" />

        <div className="mt-9 mr-20  ">
          <div className="font-normal relative ">Phone Number </div>
          <div className="font-normal relative  ">+61 4xxx xxx xxxx</div>
          <div className="relative bottom-4">
            _________________________________
          </div>
        </div>

        <div className="fixed">
          <button className="font-medium bg-blue-700 text-white w-35 h-12 rounded-sm mt-60 ">
            Continue
          </button>
        </div>
        <img
          src={Zigzag}
          alt=""
          className="absolute bottom-1 h-[108px] w-[270px] rounded-xl mt-0.5"
        />
      </div>
      <Link to={"/signUp"}>
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

export default Welcome;
