
import Data from "./Data"
import {BiPlusMedical,BiSearch} from "react-icons/bi"
const Themes = () => {
  return (
    <div>
        <Navbar/>
        <Middlebar/>
        {/* <Footer/> */}
    </div>
  )
}

export default Themes


const Navbar = () => {
    return (
      <div>
      <div className='flex items-center justify-between border-b pb-4 ml-[240px] my-3 '>
          <div className='flex items-center gap-8 mx-6'>
            <h1 className='text-[#666666] text-[16px] text-xl'>THEMES</h1>
            <div className='flex items-center gap-3 bg-[#1C8B66] w-[90px] h-[30px] rounded-sm p-2 cursor-pointer'>
                <BiPlusMedical className=' text-white '/>
                <hr className='border-[#BEBEBE]   h-[30px] border '></hr>
                <h1 className='text-[12px] text-white'>NEW</h1>
            </div>
          </div>
          <div className='w-[30px] h-[30px] bg-[#FFFFFF] border-2 rounded-md p-1 cursor-pointer mr-10 '>
           <BiSearch className='text-lg text-gray-500'/>
           </div>
             </div>
             {/* <hr className=" border-[1px] mt-5 ml-[240px] border-[#BEBEBE]"></hr> */}
      </div>
    )
  }


  const Middlebar = () => {
    return (
      <div className="ml-[240px]  bg-[#F6F6F6]" >
        <div className=" p-7 ">
          <h1 className='text-[14px] text-[#66666F]'>Check out our <strong className='text-[#2376BB] text-[14px]'>new high quality themes</strong>, also you can <strong className='text-[#2376BB] text-[14px]'>order your custom theme</strong>.</h1>
        </div>
         <div className="flex flex-wrap  gap-6 mx-6 ">
          {Data.map((item, index) => (
            <div className='h-[300px] w-[378px] bg-white border-[1px] rounded-sm '>
              <div >
                <img src={item.image} alt='pp' className='w-[378px] h-[250px] shrink-0 rounded-md '/>
              </div>
              <div className="flex justify-between my-3 mx-4">
              <p className='text-[#666666]'>{item.names}</p>
              <div className=" flex items-center gap-1">
              <div className='flex items-center  bg-white border-[1px] border-[#BEBEBE] w-[95px] h-[25px] rounded-sm cursor-pointer'>
               <div className="text-xl text-[#666666] pl-1"> {item.icon}</div>
                <hr className='border-[#BEBEBE] h-[25px] border-[1px] ml-1 '></hr>
                <h1 className='text-[14px] font-light text-[#666666] ml-2 '>{item.desc}</h1>
            </div>
            <div className='h-[25px] w-[40px]  bg-white border-[1px] border-[#BEBEBE] flex items-center rounded-sm cursor-pointer'>
              <div className="text-lg p-3 text-[#666666]">{item.icon1}</div>
              </div>
            </div>
              </div>           

            </div>


          ))}
          
         </div>
      </div>
    )
  }
  
