import React from 'react';
import lake from '../Componenets/Images/lake.jpg'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Footer from '../Componenets/Footer'
const Market = ({ items }) => {



    return (
        <div className="absolute top-1  bg-[#1a001a] w-full ">
            <div className="mt-[0.5em]">
                <div>
                    <p><img className="h-[17em] w-screen " src={lake} alt="" /></p>
                    <p className="absolute top-0 mt-[2em] grid place-items-center text-white text-[2em]">MarketPLace</p>
                </div>
                <div className="mt-[2em] ml-[1em]">
                    <form>
                        <div className="flex flex-row justify-between">
                            <div className=" flex flex-row ">
                                <div>
                                    <select className="bg-neutral-900 h-[2.5em] w-[9em] pl-[1em] rounded-[0.3em] text-gray-400">
                                        <option>All categories</option>
                                        <option value="Art">Art</option>
                                        <option value="music">music</option>
                                        <option value="domain">domain</option>
                                        <option value="virtual-world">virtual-world</option>
                                        <option value="trading-card">trending-card</option>
                                    </select>
                                </div>
                                <div className="ml-[1em]">
                                    <select className="bg-neutral-900 h-[2.5em] w-[7em] rounded-[0.2em] text-gray-400">
                                        <option >All item</option>
                                        <option value="Single-item">Single-item</option>
                                        <option value="Buddles">Buddles</option>

                                    </select>

                                </div>
                            </div>
                            <div>
                                <select className="bg-neutral-900 rounded-[0.2em] h-[2em] w-[6em] mr-[3em] text-gray-400">
                                    <option>sorted By</option>
                                    <option value="High-rate">High-Rates</option>
                                    <option value="Mid-rate">Mid-Rate</option>
                                    <option value="Low-rate">Low rate</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="  mt-[2em] md:mt-0 flex justify-center">
                    <div className=" space-y-[2em] md:space-y-0 md:grid grid-cols-4 md:gap-x-16 md:gap-y-[4em] md:mt-[8em] md:flex
                 md:justify-center
                   ">

                        {
                            items.map((item, index) => (
                                <div key={index} className="h-[28em] w-[22em] md:md:h-[22em] md:w-[13em]  bg-neutral-800 md:bg-neutral-800 md:rounded-[0.5em]  ">
                                    <div className=""><img className="h-[19em] w-[38em] md:h-[15em] w-[14em] border-8 border-solid border-gray-800 rounded-2xl
                             md:border-8 md:border-solid md:border-gray-800 md:rounded-2xl 
                                bg-gray-800" src={item.image} alt="" /></div>
                                    <div className="text-gray-500 flex justify-center">{item.name}</div>
                                    <div className=""><img className="h-[1.3em] w-[1.3em] rounded-full" src={item.icon} alt="" /></div>
                                    <div className="text-gray-500 text-[0.7em]">{item.price}</div>
                                    <div className="flex flex-row justify-between mt-[1em]">
                                        <div className="text-gray-500 ml-[0.2em]">
                                            <Link to="/">
                                                <button className="flex flex-row space-x-[0.5em] h-[2em] w-[6em] 
                                             bg-violet-950 pt-[0.4em] pl-[0.5em] rounded-full hover:bg-gray-300">
                                                    <p className="text-[0.6em] text-gray  "><FaUser /></p>
                                                    <p className="text-[0.7em] ">place bid</p>

                                                </button>

                                            </Link>
                                        </div>
                                        <p className="text-gray-500 text-[0.8em] pr-[1em]"><Link to="/">view history</Link></p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>


                <div>
                    <Footer />

                </div>



            </div>
        </div>
    )
}
export default Market