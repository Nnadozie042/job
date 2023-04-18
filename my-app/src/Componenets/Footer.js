import React from 'react';
import drip from '../Componenets/Images/drip.png';
import { FaFacebook, FaInstagram ,FaTwitter} from 'react-icons/fa';


const Footer=()=>{
    return(
        <div className="h-[80em] bg-black md:h-[15em] md:w-full md:bg-black pt-[0.5em] mt-[5em] pl-[0.5em]">
            <div className=" md:flex md:flex-row md:justify-center md:space-x-[6em] md:mt-[2em] ">

                <div>
                    <div className="flex flex-row">
                        <p><img className="h-[2em] w-[2em] bg-violet-400
                        "src={drip}alt=""/></p>
                        <p className="text-2xl font-extrabold text-violet-900">NFTs</p>
                        </div>
                        <div className="text-gray-400 text-[0.8em] space-y-[1em]">
                            
                            <p>Once you have a MetaMask wallet</p>
                            <p>Navigate to opensea.io and click</p>
                            <p>Navigate to opensea.io and click</p>
                            <p>Navigate to opensea.io and click</p>
                        </div>
                </div>
                <div>
                    <div className="flex flex-row ">
                        <p className="text-2xl font-extrabold text-violet-900">My Account</p>
                        </div>
                        <div className="text-gray-400 text-[0.8em] space-y-[1em]">
                            
                            <p>wallet created</p>
                            <p>Navigate to </p>
                            <p>Navigate to </p>
                            <p>Navigate to  </p>
                        </div>
                </div>
                <div>
                    <div className="flex flex-row ">
                        <p className="text-2xl font-extrabold text-violet-900">Resources</p>
                        </div>
                        <div className='text-gray-400 text-[0.8em] space-y-[1em]'>
                            
                            <p> MetaMask</p>
                            <p> opensea.io</p>
                            <p> opensea.io</p>
                            <p> opensea.io </p>
                        </div>
                </div>
                <div>
                    <div className="flex flex-row ">
                        <p className="text-2xl font-extrabold text-violet-900">Company</p>
                        </div>
                        <div className="text-gray-400 text-[0.8em] space-y-[1em]">
                            
                            <p> wallet created</p>
                            <p> and click</p>
                            <p> and click</p>
                            <p> and click</p>
                        </div>
                </div>
                <div>
                    <div className="flex flex-row ">
                        <p className="text-2xl font-extrabold text-violet-900">NewsLetter</p>
                        </div>
                        <div className="pt-[1em]">
                            
                            <div className="">
                                <input className="h-[1.8em] w-[15em] bg-neutral-900 text-gray-200 pl-[1.5em] rounded-full"type="email"placeholder='Email'/>

                            </div>
                            <div className="flex flex-row space-x-[2em] text-gray-800 mt-[1em]">

                                <p><FaFacebook/></p>
                                <p><FaInstagram/></p>
                                <p><FaTwitter/></p>

                            </div>
                        </div>
                </div>
            </div>
            <div className="text-gray-300 flex justify-center text-[0.7em] pt-[2.5em]">
                copyright 2023,developed by ugwu nnadozie Ebere,Reactjs project No 10

            </div>

        </div>
    )
}
export default Footer;