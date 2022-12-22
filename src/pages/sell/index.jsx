import React from 'react'
import { NavbarDua, Footer } from "@components";
import { useNavigate } from 'react-router-dom';

const Sell = () => {
  const navigate = useNavigate();

  return (
    <>
    <NavbarDua/>
      <div className="py-2 px-4 rounded text-white mx-40 shadow-md bg-orange-500">
      <div className="border bg-white text-red-500 my-2 w-40 rounded-md hover:scale-105 flex">
          <img className="my-2 ml-2 w-5" src={require('./img/back.png')}></img>
          <button className="mx-3"
            type="button"
            onClick={() => navigate(-1)}
          >
            Back To List
          </button>
        </div>
        <hr />
        <br />
        <div className="grid grid-cols-2 mx-auto">
          <div className="m-3 py-5 font-normal"> 
            <h1 className="text-3xl uppercase font-serif py-2 ">Produk Mantap Jiwa.</h1>
            <h1 className="text-lg font-normal">Rp.200.000</h1>
            <div className="py-3 h-52">
              <p className="text-justify">
                Ini penjelasan yang sangat lengkap
              </p>
            </div>

            <div className="grid grid-cols-2 mx-auto ">
              <div>
                <button className="border border-white text-white mx-auto px-16 py-3 rounded-lg hover:bg-white hover:text-black"
                type="button"
                //onClick={() => navigate('/payment'+product.id)}
                >
                  Sell
                </button>
              </div>
            </div>
            <br />
           
          </div>
          <div className="m-3 ">
            <img className="mx-auto max-w-sm" src={require("./img/Cointree.png")}  />
          </div>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Sell