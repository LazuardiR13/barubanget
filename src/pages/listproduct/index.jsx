import React from 'react'
import { NavbarDua, Footer, TabList, } from '@components'
import { Carousel } from 'antd'


const ListProduct = () => {
  return (
    <>
      <NavbarDua />
      <Carousel autoplay className='m-8'>
        <div>
          <img src={require("./img/iklan1.png")} alt='logo' className='rounded-xl'></img>
        </div>
        <div>
          <img src={require("./img/iklan2.png")} alt='logo' className='rounded-xl'></img>
        </div>
        <div>
          <img src={require("./img/iklan3.png")} alt='logo' className='rounded-xl'></img>
        </div>
      </Carousel>
      <div className='text-xl text-center font-bold md:text-3xl shadow-md'>
        <h2>Pilih Produk Sesuai Kebutuhan Kamu</h2>
      </div>
      <TabList />
      <Footer />

    </>
  )
}

export default ListProduct