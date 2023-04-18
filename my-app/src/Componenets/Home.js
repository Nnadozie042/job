import React,{useState} from 'react';
import { FaBaby, FaUser, FaFile, FaTimesCircle } from 'react-icons/fa';
import dozie from '../Componenets/Images/dozie.jpg';
import { Link } from 'react-router-dom';
import avata from '../Componenets/Images/avata.jpg';
import avata1 from '../Componenets/Images/avata1.jpg';
import avata2 from '../Componenets/Images/avata2.jpg';
import avata3 from '../Componenets/Images/avata3.jpg';
import avata4 from '../Componenets/Images/avata4.jpg';
import avata5 from '../Componenets/Images/avata5.jpg';
import avata6 from '../Componenets/Images/avata6.jpg';
import avata7 from '../Componenets/Images/avata7.jpg';
import lot1 from '../Componenets/Images/lot1.jpg';
import lot2 from '../Componenets/Images/lot2.jpg';
import lot7 from '../Componenets/Images/lot7.jpg';
import lot4 from '../Componenets/Images/lot4.jpg';
import Footer from '../Componenets/Footer'





const Home = ({items}) => {



    
    const[open,setOpen]=useState(false)
    const[close,setClose]=useState(false)
   

    return (
        <div className="pt-[5em] bg-[#1a001a] w-full ">
            <div className="pt-[10em] md:pt-[7em] md:flex md:flex-row md:justify-evenly lg:pt-[7em] lg:flex lg:flex-row 
            lg:justify-evenly">
                <div className="pl-[1em] space-y-[0.8em] md:space-y-[0.5em]">
                    <div className="text-gray-400 text-2xl">Discover rare digital art and collect</div>
                    <div className="flex flex-row space-x-[0.1em]">
                        <span className="text-gray-400 text-2xl">collect</span>
                        <span className="text-[#b300b3] text-2xl">sell extraordinary </span>
                        <span className="text-gray-400 text-2xl">NFTs</span>
                    </div>
                    <div className="text-[0.7em] whitespace-nowrap md:text-[0.8em] md:text-white">
                        <p className="text-gray-400">What kind of digital art would you most like to own as an NFT</p>
                        <p className="text-gray-400">the choice is yours to make</p>
                        <p className="text-gray-400">make a bid now</p>
                    </div>
                    <div className="flex justify-center md:justify-start md:flex  md:flex row">
                        <div className="">
                        <Link to="/Market"> <button className="flex flex-row text-gray-400 border-2 border-solid border-gray-400 w-[6em] h-[2em] rounded-full">
                                <p><FaBaby /></p>
                                <p>Explorer</p>
                            </button>
                            </Link>
                        </div>
                        <div className="ml-[2em] ">
                        <Link to="/Create
                        ">
                            <button className="flex flex-row text-gray-400 border-2 border-solid border-gray-400
                             w-[6em] h-[2em] rounded-full pl-[0.3em]">
                                <p><FaBaby /></p>
                                <p>Create</p>
                            </button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="mt-[0.2em]">
                    <img className="h-[16em] w-[25em]" src={dozie} alt='' />
                </div>

            </div> 
            <div className=" grid grid-cols-2 place-items-center gap-[8em] text-[1.3em] text-gray-400 mt-[10em] text-xl">
                    <div className="">Live Action</div>
                    <div className=" "><Link to="/Market">Explore More</Link></div>
                </div>  
           


            <div className="  mt-[2em] md:mt-0 flex justify-center">
           


                <div className="space-y-[2em] md:space-y-0 md:grid grid-cols-4 md:gap-x-16 md:gap-y-[4em] md:mt-[3em] md:flex
                 md:justify-center
                   ">

                    {
                        items.map((item, index) => (
                            <div key={index} className="h-[30em]  md:h-[20em] bg-neutral-800 md:bg-neutral-800 md:h-[20em] md:rounded-[0.5em]  ">
                                <div className=""><img className="h-[21em] w-[22em] border-8 border-solid border-gray-800 rounded-2xl
                                md:h-[13em] md:w-[13em] md:border-8 md:border-solid md:border-gray-800 md:rounded-2xl 
                                bg-gray-800" src={item.image} alt="" /></div>
                                <div className="text-gray-500 flex justify-center">{item.name}</div>
                                <div className=""><img className="h-[1.2em] w-[1.2em] rounded-full" src={item.icon} alt="" /></div>
                                <div className="text-gray-500 text-[0.7em]">{item.price}</div>
                                <div className="flex flex-row justify-between mt-[1em]">
                                    <div className="text-gray-500 ml-[0.2em]">
                                        <Link to="/">
                                            <button className="flex flex-row space-x-[0.5em] h-[1.8em] w-[6em] 
                                             bg-violet-950 pt-[0.4em] pl-[0.5em] rounded-full hover:bg-gray-300"onClick={()=>setOpen(true)}>
                                                <p className="text-[0.6em] text-gray  pt-[0.2em] "><FaUser /></p>
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
         {open &&(<div className="absolute top-0 mt-[68em] grid ml-[30em]  gap-y-[2em]">
         <div className="h-[23em] w-[24em] bg-neutral-900 rounded-[0.3em] ">

                    <div className="space-y-[0.8em] text-gray-400 grid place-items-center pt-[1em] text-[0.9em] ">
                        <div className="pl-[24em] text-violet-900"onClick={()=>setOpen(false)}><FaTimesCircle/></div>
                        <div>Place a bid</div>
                        <div className="whitespace-nowrap">You must at least bid 5.89ETH</div>
                        <form className="space-y-[1em]">
                            <div><input className="h-[2em] w-[24em] bg-neutral-800  rounded-full hover:bg-neutral-500" type="text" /></div>
                            <div><input className="h-[2em] w-[24em] bg-neutral-800  rounded-full hover:bg-neutral-500" type="text" /></div>
                        </form>

                        <div className="grid grid-cols-2 gap-[6em] place-items-center">
                            <div className='whitespace-nowrap'>You must atleast bid </div>
                            <div className="">5.89ETH</div>
                        </div>

                        <div className="grid grid-cols-2 gap-[8.5em] place-items-center">
                            <div>Service Charge </div>
                            <div className="">0.89ETH</div>
                        </div>

                        <div className="grid grid-cols-2 gap-[6em] place-items-center">
                            <div className="whitespace-nowrap"> You must atleast bid </div>
                            <div className="">5.89ETH</div>
                        </div>

                        <div><button className="h-[2em] w-[8em] bg-violet-950 rounded-full hover:bg-neutral-200 hover:text-neutral-600">Place a bid</button></div>
                    </div>

                </div>
            
             

            </div>)}


            <div className="pt-[5em] text-gray-400"><p className="relative flex justify-center">Top Seller</p></div>
            <div className="  mt-[3em] flex justify-center ">

                <div className="grid grid-cols-2  gap-x-[3em] md:mt-[3em] md:grid-cols-6  md:gap-x-16 flex justify-center gap-y-4">

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={avata} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={avata1} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em] ">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={avata2} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={avata3} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row ">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={avata4} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row" >
                        <div><img className="h-[3em] w-[3em] rounded-full " src={avata5} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={avata6} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={avata7} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>
                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={lot7} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={lot4} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full" src={lot1} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em]">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div><img className="h-[3em] w-[3em] rounded-full " src={lot2} alt="" /></div>
                        <div className="text-gray-400 text-[0.6em] ">
                            <p>Brayan cardner</p>
                            <p>5678 Etherium</p>
                        </div>

                    </div>

                </div>

                <div className="">
                </div>
            </div>

            <div className="  mt-[2em] md:mt-0 flex justify-center">
                <div className="space-y-[2em] md:space-y-0 gap-[2em] md:grid grid-cols-4 md:gap-x-16 md:gap-y-[4em] md:mt-[13em] md:flex
                 md:justify-center
                   ">

                    {
                        items.map((item, index) => (
                            <div key={index} className=" h-[35em] bg-neutral-800 md:bg-neutral-800 md:h-[21em] md:rounded-[0.5em]  ">
                                <div className=""><img className="h-[22em] w-[22em] border-8 border-solid border-gray-800 rounded-2xl
                                md:h-[13em] md:w-[13em] md:border-8 md:border-solid md:border-gray-800 md:rounded-2xl 
                                bg-gray-800" src={item.image} alt="" /></div>
                                <div className="text-gray-500 flex justify-center">{item.name}</div>
                                
                                <div className=""><img className="h-[1.2em] w-[1.2em] rounded-full" src={item.icon} alt="" /></div>
                                <div className="text-gray-500 text-[0.7em]">{item.price}</div>
                                <div className="flex flex-row justify-between mt-[1em]">
                                    <div className="text-gray-500 ml-[0.2em]">
                                        <Link to="/">
                                            <button className="flex flex-row space-x-[0.5em] h-[2em] w-[6em] 
                                             bg-violet-950 pt-[0.4em] pl-[0.5em] rounded-full hover:bg-gray-300"onClick={()=>setClose(true)}>
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
                {close &&(<div className="absolute top-0 mt-[145em] grid ml-[0.5em]  gap-y-[2em]">
         <div className="h-[23em] w-[24em] bg-neutral-900 rounded-[0.3em] ">

                    <div className="space-y-[0.8em] text-gray-400 grid place-items-center pt-[1em] text-[0.9em] ">
                        <div className="pl-[23em] text-violet-900"onClick={()=>setClose(false)}><FaTimesCircle/></div>
                        <div>Place a bid</div>
                        <div className="whitespace-nowrap">You must at least bid 5.89ETH</div>
                        <form className="space-y-[1em]">
                            <div><input className="h-[2em] w-[24em] bg-neutral-800  rounded-full hover:bg-neutral-500" type="text" /></div>
                            <div><input className="h-[2em] w-[24em] bg-neutral-800  rounded-full hover:bg-neutral-500" type="text" /></div>
                        </form>

                        <div className="grid grid-cols-2 gap-[6em] place-items-center">
                            <div className='whitespace-nowrap'>You must atleast bid </div>
                            <div className="">5.89ETH</div>
                        </div>

                        <div className="grid grid-cols-2 gap-[8.5em] place-items-center">
                            <div>Service Charge </div>
                            <div className="">0.89ETH</div>
                        </div>

                        <div className="grid grid-cols-2 gap-[6em] place-items-center">
                            <div className="whitespace-nowrap"> You must atleast bid </div>
                            <div className="">5.89ETH</div>
                        </div>

                        <div><button className="h-[2em] w-[8em] bg-violet-950 rounded-full hover:bg-neutral-200 hover:text-neutral-600">Place a bid</button></div>
                    </div>

                </div>
            
             

            </div>)}


            </div>
            <div className="mt-[10em] ">
                <div className="text-gray-400 text-[1.3em] text-center">Create and sell your NFTs</div>
                <div className=" mt-[3em] grid place-items-center gap-y-[2em] md:flex md:flex-row md:justify-center md:space-x-[2em] md:pt-[3em]">
                    <div className="bg-neutral-900 p-4 rounded-md shadow-md rounded-[0.2em] space-y-[2em]" style={{ width: '16em', height: '16em' }}>
                        <div className="h-[3em] w-[3em] bg-violet-950 "><p className="text-gray-400 pt-[0.8em] pl-[1em]"><FaFile /></p></div>
                        <div className="text-gray-400">SetUp Your Wallet</div>
                        <div className="text-gray-400 text-[0.7em] space-y-[1em]">
                            <p>Once you have a MetaMask wallet created</p>
                            <p>you'll be able to create your own NFTs</p>
                            <p>Navigate to opensea.io and click</p>
                            <p>the Create button in the menu bar</p>
                        </div>
                    </div>
                    <div className="bg-neutral-900 p-4 rounded-md shadow-md rounded-[0.2em] space-y-[2em]" style={{ width: '16em', height: '16em' }}>
                        <div className="h-[3em] w-[3em] bg-violet-950 "><p className="text-gray-400 pt-[1em] pl-[1em]"><FaFile /></p></div>
                        <div className="text-gray-400">Create Your Collection</div>
                        <div className="text-gray-400 text-[0.7em] space-y-[1em]">
                            <p>Once you have a MetaMask wallet created</p>
                            <p>you'll be able to create your own NFTs</p>
                            <p>Navigate to opensea.io and click</p>
                            <p>the Create button in the menu bar</p>
                        </div>
                    </div>
                    <div className="bg-neutral-900 p-4 rounded-md shadow-md rounded-[0.2em] space-y-[2em]" style={{ width: '16em', height: '16em' }}>
                        <div className="h-[3em] w-[3em] bg-violet-950 "><p className="text-gray-400 pt-[1em] pl-[1em]"><FaFile /></p></div>
                        <div className="text-gray-400">Add your NFTs</div>
                        <div className="text-gray-400 text-[0.7em] space-y-[1em]">
                            <p>Once you have a MetaMask wallet created</p>
                            <p>you'll be able to create your own NFTs</p>
                            <p>Navigate to opensea.io and click</p>
                            <p>the Create button in the menu bar</p>
                        </div>
                    </div>
                    <div className="bg-neutral-900 p-4 rounded-md shadow-md rounded-[0.2em] space-y-[2em]" style={{ width: '16em', height: '16em' }}>
                        <div className="h-[3em] w-[3em] bg-violet-950 "><p className="text-gray-400 pt-[1em] pl-[1em]"><FaFile /></p></div>
                        <div className="text-gray-400">list them for sell</div>
                        <div className="text-gray-400 text-[0.7em] space-y-[1em]">
                            <p>Once you have a MetaMask wallet created</p>
                            <p>you'll be able to create your own NFTs</p>
                            <p>Navigate to opensea.io and click</p>
                            <p>the Create button in the menu bar</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="">
                <Footer />
            </div>
        </div >
    )
}
export default Home;