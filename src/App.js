import { Home, ListProduct, DetailProduct, Profile, 
  Login, Register, Payment, 
  Porto, Sell } from "@pages";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listproduct' element={<ListProduct />} />
        <Route path='/detailproduct/:id' element={<DetailProduct />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/payment/:id' element={<Payment />} />
        <Route path='/sell' element={<Sell/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
