import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../services/api";
import Popup from 'reactjs-popup';
import axios from "axios";

const ProductDesc = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem(`user`));

  const fetchProduct = async (id) => {
    try {
      const url = `api/product/${id}`;
      const response = await api.get(url);
      const payload = { ...response?.data };
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error.message);
    }
  };
  const addItems= async () => {
    const response = await api.post(`api/watchlist`, {
      userId: user.user.userId,
      productId: product.productId
      
    })
  }
  console.log(product.productId + " ini produk id")
  console.log(user.user.userId + " ini user id")
  


  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);


  return (
    <>
      <div className="py-8 px-16 m-32 rounded-lg text-white mx-14 shadow-md bg-orange-500">
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
        <div className="grid grid-cols-2 mx-auto">
          <div className="m-3 py-5 font-normal">
            <h1 className="text-3xl uppercase font-serif py-2 ">{product?.productName}.</h1>
            <h1 className="text-lg font-normal">Rp.{product?.minimumBuyAmount}</h1>
            <div className="py-3 h-24">
              <p className="text-justify">
                {product?.productDescription}
              </p>
            </div>
            {/* information popup*/}
            <div className=" grid grid-cols-3 grid-rows-2 mt-12">
              <button className="h-16 border-l-2 border-y-2 border-white bg-orange-800">
                <div className="flex justify-between">
                  <h5 className="ml-14">Code</h5>
                  <Popup trigger={<img className="w-5 h-5 m-1" src={require("./img/infodata.png")}></img>} position="top center">
                    <div className="bg-white rounded-md">
                      <p>Compound Annual Growth Rate 1 year adalah</p>
                      <p> tingkat pertumbuhan tahunan rata-rata suatu saham</p>
                      <p>selama jangka waktu 1 tahun terakhir</p>
                    </div>
                  </Popup>
                </div>
                <a className="text-green-600 font-bold">+2.32%</a>
              </button>

              <button className="h-16 border-l-2 border-y-2 border-white bg-orange-800">
                <div className="flex justify-between">
                  <h5 className="ml-8">Dawndown 1Y</h5>
                  <Popup trigger={<img className="w-5 h-5 m-1" src={require("./img/infodata.png")}></img>} position="top center">
                    <div className="bg-white rounded-md">
                      <p>Max Drawndown adalah penurunan maksimum suatu</p>
                      <p>saham dari titik puncak ke titik rendah.</p>
                      <p>Max Drawndown adalah indikator risiko penurunan</p>
                    </div>
                  </Popup>
                </div>
                <a className="text-red-600 font-bold">+0.00%</a>
              </button>

              <button className="h-16 border-x-2 border-y-2 border-white bg-orange-800">
                <div className="flex justify-between">
                  <h5 className="ml-8">Expense Ratio</h5>
                  <Popup trigger={<img className="w-5 h-5 m-1" src={require("./img/infodata.png")}></img>} position="top center">
                    <div className="bg-white rounded-md">
                      <p>Expense Ratio mengukur seberapa besar biaya yang</p>
                      <p>dikeluarkan untuk mengelola saham. Lebih kecil</p>
                      <p>nilainya mencerminkan kepiawaian Manajer Investasi</p>
                    </div>
                  </Popup>
                </div>
                <a className="text-white-600 font-bold">+1.99%</a>
              </button>
            </div>

            <div className="flex">
              <button className="w-96 border bg-green-500 text-white mx-auto px-16 py-3 rounded-lg hover:bg-green-700 hover:scale-105"
                type="button"
                onClick={() => navigate('/payment/' + product.productId)}
              >
                Buy Product
              </button>
              <div>
              <button type="button" className=" font-medium text-sm  hover:cursor-pointer hover:bg-slate-900 ml-5 hover:scale-105 w-28 h4 bg-yellow-700 rounded-xl"
              onClick={addItems}
                >Save
              </button>
                </div>

            </div>
            <br />
          </div>
          <div className="m-3 ">
            <img className="mx-auto max-w-sm" src={require("./img/Lo-fi concept-bro.png")} />
          </div>
        </div>
      </div>
    </>
  );

};

export default ProductDesc;
