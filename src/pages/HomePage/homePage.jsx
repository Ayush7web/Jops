import React from "react";
import Jops from "../../Image/jops.jpg";
import Menu from "../../Image/main-menu.jpg"
import Bar from "../../Image/main.jpg"
import Contain from "../../Image/container.jpg"
import Nav from "../../Image/navbar.jpg"
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative top-16">
      <Link to={"/signIn"}>
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
      {/* ************************************* */}
      <div className="w-[280px] h-auto   bg-white  justify-center items-center rounded-xl">
        {/* upper lift */}
        <div className="h-[60px] w-full bg-blue-700 relative top-23">
          <div className="flex flex-row justify-center items-center p-0 gap-47 relative top-2 ">
            <MenuOpenIcon
              sx={{ width: "44px", height: "44px", color: "white" }}
            />
            <img src={Jops} alt="" className="w-9 h-9 rounded-full" />
          </div>
        </div>

        {/* 2nd of that upper page/ */}
        <div className=" h-[130px] bg-orange-500 relative top-23 ">
          <div className="text-center text-white text-2xl font-roboto relative top-12 ">
            Rent the ad Space
          </div>
        </div>
        {/* 3rd part of upper page */}
        <div>
          <img src={Menu} alt="" className="relative top-25 " />
        </div>
        {/* 4th part of upper image */}
        <div>
          <img src={Bar} alt="" className="relative top-20" />
        </div>
        {/* 5th part of middle image */}

        <div>
          <img src={Contain} alt="" className="relative top-25 " />
        </div>
        {/* last part of image  */}
        <div>
          <img src={Nav} alt="" className="relative top-5" />
        </div>
      </div>
      <Link to={"/account"}>
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

export default HomePage;
