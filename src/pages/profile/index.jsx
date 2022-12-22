import { NavbarDua,DataProfile, Footer, IklanProfile, Watchlist,Transaksi } from "@components";
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import api from "../../services/api";

const Profile = () => {
  const [profileData, setProfileData] = useState([])
  Aos.init();
  
  const user = 
    JSON.parse(localStorage.getItem(`user`));

  const getData = async () => {
    try{
      const response = await api.get(`api/user/${user.user.userId}`)
      const payload = {...response.data}
      setProfileData(payload)
    }catch(alert){

    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <NavbarDua />
      {/* <DataProfile /> */}
      <div className="flex">
        <div className="bg-orange-500 mx-6 mt-7  rounded-lg md:h-96 w-2/3">
          <div className="grid place-items-center ">
            <img className=" w-48 h-48 rounded-full border mt-9 "
              src="http://placeimg.com/640/360/any" alt="#" />
              <label>My Wallet</label>
          <a className=" text-white text-xl"
            >{profileData.wallet}</a>
          </div>
  
          {/* Full Name */}
            <label className="text-sm text-white ">
              Nama Lengkap :
            </label>
            <a className=" text-white text-xl"
            >{user?.user?.fullName}</a>


          {/* Phone Number */}
          <label className="form-label text-md inline-block text-white">
            Phone Number (+62)
          </label>
          <li className="list-none">
            <a
              className=" text-white text-md"
            >{user?.user?.phoneNumber}</a>
          </li>
          
        </div>
        {/* <IklanProfile /> */}
      </div>
      <Watchlist />
      <Transaksi/>
      <Footer />
    </>
  );
};

export default Profile;