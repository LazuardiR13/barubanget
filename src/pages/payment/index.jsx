
import React, { useEffect, useState } from "react";
import { NavbarDua, Footer } from "@components";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const Payment = () => {
  const [openTab, setOpenTab] = React.useState();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const [harga, setHarga] = useState(0)
  // const [wallet, setWallet] = useState({})

  const userLocal =
    JSON.parse(localStorage.getItem(`user`));
    const user=userLocal.user.wallet
    console.log(user)
  
const fetchProduct = async (id) => {
    try {
      const url = `api/product/${id}`;
      const response = await api.get(url);
      const payload = { ...response?.data };
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error);
    }
  };

  //butuh data amount si user 
  // const getMinAmount = async ()=>{
  //   try{
  //     const response = await api.get(`api/user/${user}`)
  //     const payload = {...response.data}
      
  //     console.log(payload)
  //     setWallet(payload)
      
  //     // console.log(payload)
  //   }catch(alert){

  //   }
  // }
  
  const buyProduct = async ()=>{ 
    if(user > harga && user > product.minimumBuyAmount){
    const response = await api.post(`api/transaction`,{
      userId: userLocal.user.userId,
      productId: product.productId,
      amount: harga
    })
    //masih error buat sudah beli dia pindah ke list
    window.location.href = ('/listproduct')
   }else{
    console.log("Sialhkan Topup Lebih Dulu Uang Anda Tidak Mencukupi")
  }
  }
   
  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);


  return (
    <>
      <NavbarDua />
      <div className="text-center rounded-md my-6 shadow-lg">
        <p className="text-3xl font-bold text-orange-500">Your Payment</p>
      <p className="text-sm text-orange-500">Complete The Payment And Get Your Investment Product{user}</p>
        </div>
      <div className="flex">
        <div className="bg-orange-500 w-1/2 rounded-md h-52 ml-24 ">
        <p className="text-center font-semibold text-2xl shadow-lg text-white">Price Calculation</p>
          <li className="list-none justify-between flex m-4">
            <p className="text-white mt-8">Minimum Pembelian :</p>
            <a className="text-green-500 font-black mt-8">Rp.{product.minimumBuyAmount}</a>
          </li>
          <li className="list-none justify-between flex text-white m-4">
            <p>Komisi Pembelian :</p>
            <a className="font-black">Gratis</a>
          </li>
          <li className="list-none justify-between flex text-white m-4">
            <p>Biaya Penjualan :</p>
            <a className="font-black">Gratis</a>
          </li>
        </div>
        <div className="w-full mx-12 bg-orange-500 rounded-md ">
          <p className="text-center font-semibold text-2xl shadow-lg text-white">Product Confirmation</p>
          <div className='ml-48 text-white'>
            <li className="list-none my-3">
              <a>Product Name Investment : </a>
              <a>{product.namaProduk}</a>
            </li>
            <li className="list-none  my-3">
              <a>Product Code : </a>
              <a>{product.namaProduk}</a>
            </li>
            <li className="list-none  my-3">
              <a>Product Category : </a>
              <a>{product.namaProduk}</a>
            </li>
            <li className="list-none  my-3">
              <a>Product Description : </a>
              <a>{product.namaProduk}</a>
            </li>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center font-semibold text-2xl mt-9 shadow-lg">Invest Your Nominal</p>
        <div className="bg-orange-500 h-28 grid place-items-center  my-3 mx-12 rounded-lg">
          <p className="text-center w-96 rounded-md  focus:outline-none  h-9 font-semibold text-xl">{harga}</p>
          <br/>
          <div className="flex justify-center">
            <li className="list-none ">
              <button onClick={()=>setHarga(100000)} className="rounded-xl bg-white hover:bg-orange-600 w-28 font-bold text-orange-600 hover:text-white mx-3 border-orange-600 hover:border-white">Rp.100.000</button>
            </li>
            <li className="list-none ">
              <button onClick={()=>setHarga(500000)} className="rounded-xl bg-white hover:bg-orange-600 w-28 font-bold text-orange-600 hover:text-white mx-3 border-orange-600 hover:border-white">Rp.500.000</button>
            </li>
            <li className="list-none ">
              <button onClick={()=>setHarga(1000000)} className="rounded-xl bg-white hover:bg-orange-600 w-28 font-bold text-orange-600 hover:text-white mx-3 border-orange-600 hover:border-white">Rp.1.000.000</button>
            </li>
            <li className="list-none ">
              <button onClick={()=>setHarga(5000000)} className="rounded-xl bg-white hover:bg-orange-600 w-28 font-bold text-orange-600 hover:text-white mx-3 border-orange-600 hover:border-white">Rp.5.000.000</button>
            </li>
            <li className="list-none ">
              <button onClick={()=>setHarga(10000000)} className="rounded-xl bg-white hover:bg-orange-600 w-28 font-bold text-orange-600 hover:text-white mx-3 border-orange-600 hover:border-white">Rp.10.000.000</button>
            </li>
          </div>
        </div>
      </div>
      
      <div className="py-3 mx-auto text-center">
        <button
          className="bg-orange-500 text-white border border-orange-500 font-[poppins] active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow mx-auto hover:bg-orange-700"
          type="button"
          onClick={buyProduct}
        >
          Process
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
