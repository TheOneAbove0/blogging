import React from 'react'

const Contact = () => {
  return (  
    <div>
        <div className='px-[450px] py-44'>
            <h1 className='text-[40px] font-bold font-sans '>Contact</h1>
            <p className='text-[18px] w-[900px] text-[#DDDDDD] mt-7 font-semibold'>If you have any questions or feedback about BlogEngine or our themes, please <strong className='text-[#04D772] text-[18px]'>visit our webiste</strong>. We value your feedback and would love to hear from you.</p>
            <div className=''>
            <h1 className='text-[#DDDDDD] text-[18px] mt-6 font-semibold'>Name</h1>
            <div className=' mt-4'>
                <input type='text' placeholder='' className='w-[900px] h-[35px] bg-[#111111] rounded-sm hover:bg-black outline-none'></input>
            </div> 
 
            <h1 className='text-[#DDDDDD] text-[18px] mt-4 font-semibold'>E-mail</h1>
            <div className=' mt-4'>
            <input type='text' placeholder='' className='w-[900px] h-[35px] bg-[#111111] rounded-sm  hover:bg-black outline-none'></input>
            </div>

            <h1 className='text-[#DDDDDD] text-[18px] mt-4 font-semibold'>Subject</h1>
            <div className=' mt-4'>
            <input type='text' placeholder='' className='w-[900px] h-[35px] bg-[#111111] rounded-sm  hover:bg-black outline-none'></input>
            </div>

            <h1 className='text-[#DDDDDD] text-[18px] mt-4 font-semibold'>Message</h1>
            <div className='mt-4'>
            <textarea type='text' placeholder='' className='w-[900px] h-[200px] bg-[#111111] rounded-sm  hover:bg-black outline-none'></textarea>
            </div>
             </div>
            <button className='w-[60px] h-[40px]  rounded-md text-[14px] font-bold bg-[#028E62] hover:bg-black mt-3 ml-[838px] text-black'>Send</button>
        </div>
    </div>    
  )
}  

export default Contact