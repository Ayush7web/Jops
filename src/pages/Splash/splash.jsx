import React from "react";
import Image from "../../Image/textImage.jpg";
import Zigzag from "../../Image/zigzagImage.jpg"
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Splash = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed">
    
      <div className="w-[270px] h-[535px] bg-white flex justify-center items-center rounded-xl cursor-pointer  ">
        <img src={Image} alt="" />
        <img
          src={Zigzag}
          alt=""
          className="absolute bottom-6.5 h-[108px] w-[270px] rounded-xl mb-0.5"
        />
      </div>
      <Link to={"welcome"}>
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

export default Splash;
