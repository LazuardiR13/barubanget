import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="md-flex justify-between items-center mx-auto shadow-lg ">
      <div className="flex justify-between p-2">
        <div className="pl-6 ">
          <img className="w-[150px]  h-auto"
            src={require("./img/logo-indivara.png")}
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex mt-3 mr-3">
            <li className="mr-5">   
            </li>
            <li className="mr-2 md:mr-7 text-base">
              <Link to={"/login"}>
              <button className="bg-orange-500 text-white w-28 h-8 rounded-md ml-5 hover:bg-orange-700">Login</button>
              </Link> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
