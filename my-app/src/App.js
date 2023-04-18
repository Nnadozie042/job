import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaAddressCard, FaCog } from 'react-icons/fa';
import Home from './Componenets/Home';
import Market from './Componenets/Market';
import Create from './Componenets/Create';
import drip from './Componenets/Images/drip.png';
import { FaBars } from 'react-icons/fa';
import Detail from './Componenets/Detail';
import Wallet from './Componenets/Wallet';
import Contact from './Componenets/Contact'






function App() {
  const items = [

    {
      id: 1,
      image: 'Frame/yam.jpg',
      name: "cute cat",
      icon: "Frame/lot2.jpg",
      price: "$0123"

    },
    {
      id: 2,
      image: "Frame/rice.jpg",
      name: "eragon d' dragon",
      icon: "Frame/lot4.jpg",
      price: "$023454",

    },
    {
      id: 3,
      image: "Frame/monkey.jpg",
      name: "monkey framer",
      icon: "Frame/lot5.jpg",
      price: "$2345"

    },
    {
      id: 4,
      image: "Frame/beans.jpg",
      name: "self made",
      icon: "Frame/lot7.jpg",
      price: "2345"
    },
    {
      id: 5,
      image: "Frame/head.jpg",
      name: "head",
      icon: "Frame/avata.jpg",
      price: "$4056",
    },

    {
      id: 6,
      image: "Frame/face.jpg",
      name: "monkey framer",
      icon: "Frame/lot.jpg",
      price: "$2345"

    },
    {
      id: 7,
      image: "Frame/hat.jpg",
      name: "self made",
      icon: "Frame/avata.jpg",
      price: "2345"
    },
    {
      id: 8,
      image: "Frame/cat.jpg",
      name: "head",
      icon: "Frame/avata3.jpg",
      price: "$4056",
    }
  ]





  return (
    <BrowserRouter>
      <div className="App">
        <div className="fixed h-[4em] w-full bg-[#1a001a] border-b-2 border-solid border-violet-950 z-[1] ">
          <div className='flex flex-row justify-between pt-[0.7em]'>
            <div className="flex flex-row pl-[1em] pt-[em]">
              <p><img className='h-[2.5em] w-[2.5em] bg-violet-900 font-extrabold ' src={drip} alt="" /></p>
              <p className="text-2xl font-extrabold text-violet-800">NFTs</p>
            </div>
            <div className="flex flex-end">
              <div className=" lg:hidden">

                <FaBars className="text-white" />
              </div>
              <div className=" md:flex lg:flex md:mt-[0em]">
                <ul className="md:flex md:flex-row md:list-none md:space-x-[5em] md:text-gray-400 md:text-[0.8em] md:font-light ">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Market">Market</Link>
                  </li>
                  <li>
                    <Link to="/create">Create</Link>
                  </li>

                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>


              </div>


            </div>

            <div>
              <Link to="/Wallet">
                <button className="flex flex-row text-gray-400 border-2 border-solid border-gray-400 w-[11em] h-[2.4em] pt-[0.2em] rounded-full pl-[0.8em] mr-[4em]">
                  <p className="pt-[0.2em] "><FaAddressCard /></p>
                  <p className="whitespace-nowrap pl-[0.5em] ">Connect wallet</p>

                </button>
              </Link>

            </div>
          </div>
        </div>
        <div className="pt-[5em] bg-[#1a001a] w-full">
          <Routes>
            <Route exact path="/" element={<Home items={items} />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Market" element={<Market items={items} />} />
            <Route path="/Market/:id" element={<Detail />} />
            <Route path="/Wallet"element={<Wallet/>}/>
            <Route path="/Contact"element={<Contact/>}/>
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
