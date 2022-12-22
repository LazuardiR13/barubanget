import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import Aos from "aos";
import 'aos/dist/aos.css';

const Watchlist = () => {
  const [watch, setWatch] = useState([])
  const navigate = useNavigate();
  Aos.init();

  const user =
    JSON.parse(localStorage.getItem(`user`));

  const addWatchlist = async () => {
    try {
      const response = await api.get(`api/watchlist/${user.user.userId}`)
      const payload = [...response.data]
      // console.log(payload[watch].productName)
      setWatch(payload)
    } catch (alert) {
      // console.log(error)
      alert("Error Watchlist Tidak Ada")
    }
  }

  useEffect(() => {
    addWatchlist()

  }, [])

  return (
    <>
      <h2 className='text-2xl font-semibold text-center shadow-2xl rounded-b-md justify-center'> My Watchlist </h2>
      <div className='grid grid-rows-auto grid-cols-4'
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500">
        {watch.map(product => (
          <div key={product.productCode}>
            <div onClick={() => navigate(`detailproduct/`)}>
              <div onClick={() => navigate(`/detailproduct/` + product?.productId)}>
                <div className=' ml-12 md:w-72 w-28 my-12 md:h-80 h-48 rounded-lg border shadow-xl bg-orange-500 border-slate-500 scale-100 md:hover:scale-105'>
                  <img src={require('./img/sick1.png')} className='md:w-40 w-16 ml-6 md:ml-14 ' alt='sick'></img>
                  <div className=' w-full md:h-32 h-12 '>
                    <a className='md:text-lg text-sm text-white' >{product?.productName} </a>
                    <a className='md:text-lg text-sm text-white' >{product?.productCode} </a>
                    <p className='mt-2 text-sm font-semibold text-white'>Rp.{product?.minimumBuyAmount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Watchlist