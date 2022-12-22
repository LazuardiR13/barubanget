import React, { useState, useEffect } from 'react'
import api from "../../../services/api";
import { useNavigate} from "react-router-dom";



const CardSyariah = ({
  onClick,

}) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
 
  const getCardKJiwa = async () => {
    try { 
      const url =(`/api/category/1`);
      const response = await api.get(url);
      console.log(response.data);

      setUsers(response.data)
    } catch {
      console.log("error");
    }
  }
  useEffect(() => {
    getCardKJiwa();
  }, [])

  return (
    <>
      <div className='grid grid-rows-auto grid-cols-3 gap-4'>
        {users.map(product => (
          <div key={product.productId}>
            <div onClick={() => navigate(`/detailproduct/`+product.productId)}>
            <div className='md:w-72 w-28 md:h-80 h-48 rounded-lg border shadow-xl bg-orange-500 border-slate-500 scale-100 hover:scale-105'>
              <img src={require('./old.png')} className='md:w-40 w-16 ml-6 md:ml-14' alt='child'></img>
              <div className=' w-full md:h-32 h-12 '>
                  <a className='md:text-lg text-sm text-white' >{product?.productName} </a>
                  <p className='md:text-xs text-xs text-white'>{product?.productCode}</p>
                  <p className='mt-2 text-sm font-semibold text-white'>Rp.{product?.minimumBuy}</p>
                </div>
            </div>
          </div>
      </div>
        ))}
      </div>
    </>
  )
};
export default CardSyariah