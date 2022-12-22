// import React, { useState, useEffect } from 'react'
// import { useNavigate } from "react-router-dom";
// import api from "../../../services/api";

// const Watchlist= () => {
//     const [users, setUsers] = useState([])

//   const navigate = useNavigate();
//   const getWatchlist = async () => {
//     try {
//       const url = (`/api/v1/watchlist`);
//       const response = await api.get(url);
//       console.log(response.data);
//       setUsers(response.data)
//     } catch {
//       console.log("error");
//     }
//   }
//   useEffect(() => {
//     getWatchlist();
//   }, [])
  
//   return
//     <>
//       <div className=' grid grid-rows-auto grid-cols-3 gap-4'>
//         {users.map(produk => (
//           <div key={produk.id}>
//             <div onClick={() => navigate(`/detailproduct/`+produk.id)}>
//             <div className='w-72 h-80 rounded-lg border shadow-xl bg-sky-400 border-slate-500 '>
//               <div className=' w-full h-32'>
//                 <a className='text-lg'>{produk.namaProduk}</a>
//                 <p className='text-xs'>{produk.deskripsi}</p>
//                 <p className='mt-2 font-semibold'>Rp.{produk.harga}</p>
//               </div>
//             </div>
//           </div>
//           </div>
//         ))}
//       </div>
//     </>   </div>
//           </div>
//         ))}
//       </div>