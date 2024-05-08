import React from "react";
import sphere from "./Assets/sphere (2).png";
import sphere2 from "./Assets/sphere (3).png";
import star1 from "./Assets/star-img.png";
import star2 from "./Assets/star-img (1).png";
import star3 from "./Assets/star-img (2).png";
import Button from "./Button";

const Home = () => {
  return (
    <div className="w-screen relative h-screen z-50 font-grotesk font-bold text-center ">
    <img className="absolute bottom-0 left-0 z-10 " src={sphere} alt="pic1" />
    <img className="absolute top-0 right-0" src={sphere2}  alt="pic2"/>
    <img className="absolute bottom-[20%] right-[5%]" src={star1}  alt="pic3"/>
    <img className="absolute bottom-[8%] left-[20%]" src={star2} alt="pic4" />
    <img className="absolute top-[10%] left-[10%]" src={star3} alt="pic5" />
  
  <div className="flex flex-col justify-center items-center pt-10 leading-9">
            
             <div className="h-max md:w-[425px] w-fit bg-white relative z-50 flex flex-col p-7 items-start box gap-6 ">
          <div className="text-xl font-normal">
            <span className="px-5 py-2 bg-[#00FFE0] rounded-[39px]">Stake</span>
          </div>
       
          <div  className=" w-full flex  relative flex-col items-start cursor-not-allowed">
            <div>
              Stake Amount <span className="font-light">(FIL)</span>
            </div>
            <input  className="h-[43px] w-full rounded-[39px] border-[#00FFE0] flex justify-between items-center px-4 py-6 border-2 mt-2" placeholder="Staking Amount"/>
             
            
          </div>
          <div className=" w-full flex  relative cursor-not-allowed flex-col items-start">
            <div>
              Staking Period <span className="font-light">(in Months)</span>
            </div>

            <div  className="h-[43px] w-full rounded-[39px] border-[#00FFE0]  flex justify-between items-center px-10 py-6 border-2 mt-2">
                          <select 
                            
                            >
                            <option value="">Select Staking Period</option>
                                <option value="18">18 Months</option>
                          </select>
            </div>
    <Button width='h-[43px]' height='12px mx-auto w-full flex justify-center mt-7  cursor-pointer items-center' text='text-white font-grotesk text-[12px] font-bold bg-primary  rounded-[39px]' title='STAKE TOKEN'/>

          </div>
          
        </div>
        <div className="h-max md:w-[425px] w-fit bg-white relative z-50 flex flex-col p-7 items-start box gap-6 ">
          <div className="text-xl font-normal">
            <span className="px-3 py-2 bg-[#00FFE0] rounded-[39px]">Unstake</span>
          </div>
       
          <div  className=" w-full flex  relative flex-col items-start cursor-not-allowed">
            <div>
              Commitment Index <span className="font-light">(FIL)</span>
            </div>
            <input className="h-[43px] w-full rounded-[39px] border-[#00FFE0] flex justify-between items-center px-4 py-6 border-2 mt-2" placeholder="withdraw index value"/>
              
          </div>
          <div className=" w-full flex  relative cursor-not-allowed flex-col items-start">
            
    <Button width='h-[43px]' height='12px mx-auto w-full flex justify-center mt-7  cursor-pointer items-center' text='text-white font-grotesk text-[12px] font-bold bg-primary  rounded-[39px]' title='WITHDRAW TOKEN'/>

          </div>
         
        </div>
        </div>
        </div>
  );
};

export default Home;
