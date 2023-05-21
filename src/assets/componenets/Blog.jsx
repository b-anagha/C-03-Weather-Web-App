import React from 'react';
import { useState } from 'react';
import REQ from './REQ';
import Res from './Res';
import Api from './Api';
import Async from './Async';

function Cards() {
  const [link, setLink] = useState(0);
  return (
    // ${link == 1 && <Head />}`}
    <div className='w-full py-[10rem] px-4' id="blogs">
      <h1 className='mx-auto text-center flex flex-col justify-center text-4xl mb-20 text-[#e9d8fd] font-bold'>BLOGS</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          
            <h2 className='text-2xl font-bold text-center py-8'>Http Requests</h2>
          
            <button onClick={()=>{setLink(1)}} className={"my-6 mx-auto py-4 bg-[#e9d8fd] w-[200px] rounded-md font-medium text-center text-black  text-xl"}>Read Blog</button>
            
           </div>  
          
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
           
            <h2 className='text-2xl font-bold text-center py-8'>Http Response</h2>
        
            <button onClick={()=>{setLink(2)}} className={"my-6 mx-auto py-4 bg-[#e9d8fd] w-[200px] rounded-md font-medium text-center text-black  text-xl"}>Read Blog</button>
        </div>
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
           
            <h2 className='text-2xl font-bold text-center py-8'>APIs</h2>
            
            <button onClick={()=>{setLink(3)}} className={"my-6 mx-auto py-4 bg-[#e9d8fd] w-[200px] rounded-md font-medium text-center text-black text-xl"}>Read Blog</button>
        </div>
        <div className="w-full bg-primary shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            
            <h2 className='text-2xl font-bold text-center py-8'>Asynchronous JavaScript</h2>
          
            <button onClick={()=>{setLink(4)}} className={"my-6 mx-auto py-4 bg-[#e9d8fd] w-[200px] rounded-md font-medium text-center text-black  text-xl"}>Read Blog</button>
        </div>
      </div>
      <div>
     {
       link == 1 && <REQ />
     }
     {
      link == 2 && <Res />
     }
     {
      link == 3 && <Api />
     }
     {
      link == 4 && <Async />
     }
   </div>
    </div>
    
  )
  }


export default Cards