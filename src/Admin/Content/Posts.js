import React, { useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaNewspaper } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { BsChevronDown } from 'react-icons/bs';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { BiPlusMedical } from 'react-icons/bi';


import { AiOutlineSearch } from 'react-icons/ai';

export default function Posts() {

  const [allChecked, setAllChecked] = useState(false);
  const [justChecked, setjustChecked] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'all') {

      setAllChecked(checked);
      setjustChecked({
        one: checked,
        two: checked,
        three: checked,
        four: checked,
        five: checked,
        six: checked,
        seven: checked,
        eight: checked,
        nine: checked,
        ten: checked,
      });
    } else {

      setjustChecked((prevChecked) => ({
        ...prevChecked,
        [name]: checked,
      }));

 
      setAllChecked(
        Object.values({ ...justChecked, [name]: checked }).every((val) => val === true)
      );
    }
  };

  
  return (
    <div className='flex bg-gray-100'>
      <div className=' bg-blue-500 w-1/5'>sdgsrg</div>
      <div className=' w-4/5 flex flex-col'>
        <div className='h-[50px] flex justify-between px-[40px] items-center bg-white'>
    <div className='flex justify-center items-center gap-5'>
  <div className='text-[18px]'>POSTS</div>
 <div className='w-[100px] bg-[#24b685] hover:bg-green-800 h-[30px] flex'>
<div className='w-[30px] text-white flex justify-center items-center'>
  <BiPlusMedical className=''/>
</div>
<div className='w-[1px] bg-gray-500'></div>
<div className='text-white flex justify-center items-center w-20'>NEW</div>


 </div>
  
 <div className='w-[150px] h-[30px]  bg-white rounded-md flex gap-[0.1px] '>
<div className={`w-1/3 bg-red-600 text-white flex justify-center items-center border ${
allChecked || justChecked.one ? 'opacity-100' : 'opacity-70'
}`}>
<RiDeleteBin6Line/>
</div>
<div className={`w-1/3 bg-yellow-400 text-white text-xl flex justify-center items-center border ${
 allChecked || justChecked.one ? 'opacity-100' : 'opacity-70'
}`}>
<FaNewspaper/>
</div>
<div className={`w-1/3 bg-green-600 text-white text-2xl flex justify-center items-center border ${
allChecked || justChecked.one ? 'opacity-100' : 'opacity-70'
}`}>
<TiTick/>
</div>
 </div>
</div>
 <div className='flex justify-center items-center gap-5'>
 <div className='w-[80px] h-[30px] rounded-sm bg-white-600 flex  '>
<div className='w-2/3 bg-white text-black flex justify-center items-center border border-gray-400'>
ALL
</div>
<div className='w-1/3 bg-white text-black text-xl flex justify-center items-center border border-gray-400'>
<BsChevronDown/>
</div>

 </div>
 <div className='w-[40px] h-[30px] rounded-sm bg-white flex border
  border-gray-400  justify-center items-center text-[25px] '>

<AiOutlineSearch/>

 </div>
  </div>
        </div>
        <div className='bg-gray-200 h-1'></div>




     {/* table area */}
        
<div className='flex flex-col mt-5 ml-5 mb-8 mr-8'>
<div className=' bg-white border border-gray-300 px-6  '>
<div className='h-[40px] flex gap-[550px]  '>
<div className='flex gap-9 items-center'>
  
<input type='checkbox'
name="all"
checked={allChecked}
onChange={handleCheckboxChange}/> 

  <div>TITLE</div>

</div>
<div className='flex gap-8 items-center'>
<div>AUTHOR</div>
<div>COMMENTS</div>
<div>DATE</div>
<div>PUBLISHED</div>

</div>
</div>
</div>





<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>  
   <input type='checkbox' 
   name="one"
   checked={justChecked.one}
   onChange={handleCheckboxChange} /> 
  </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>Einride brings its electric self driving trucks to the UAE</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>2</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-05-30</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>



<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>  
  <input type='checkbox'
   name="two"
   checked={justChecked.two}
   onChange={handleCheckboxChange} /> 
  </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>AI powered Personal Assistant for Windows</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>3</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-06-20</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>

<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>  
   <input type='checkbox'
   name="three"
   checked={justChecked.three}
   onChange={handleCheckboxChange} /> </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>Using Algolia’s .NET API Client for Fast and Relevant Search</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>5</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-02-15</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>

<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>   
  <input type='checkbox'
  name="four"
  checked={justChecked.four}
  onChange={handleCheckboxChange} /> 
  </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>How Ferrari Became the Most Powerful Car Brand in the World</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>5</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-05-30</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>

<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>  
   <input type='checkbox' 
   name="five"
   checked={justChecked.five}
   onChange={handleCheckboxChange} /> 
  </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>National Parks in California, A Guide for Nature Lovers</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>2</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-05-30</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>

<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>  
  <input type='checkbox'
  name="six"
  checked={justChecked.six}
  onChange={handleCheckboxChange}  /> 
  </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>Secrets of Successful Entrepreneurs You Need to Know</div>
    <div><BiLinkExternal/>
    </div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>1</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-05-10</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>
<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>  
  <input type='checkbox'  
  name="seven"
  checked={justChecked.seven}
  onChange={handleCheckboxChange}/> 
  </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>Start a Podcast and Build a Loyal Audience in No Time</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>2</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-05-12</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>
<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>  
  <input type='checkbox' 
  name="eight"
  checked={justChecked.eight}
  onChange={handleCheckboxChange} /> 
  </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>Benefits of Living in a Smart Home and How to Get Started</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>6</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-02-10</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>
<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'>   
  <input type='checkbox'
  name="nine"
  checked={justChecked.nine}
  onChange={handleCheckboxChange} /> </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>C# 11, The Latest and Greatest Features with Code Examples</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>4</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-05-30</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>
<div className='h-[1px] bg-gray-300'></div>
<div className='bg-gray-300 flex gap-[1px] h-[40px]  '>
 <div className='w-[0.1px]'></div>
  <div className='bg-white w-[60px] flex items-center justify-center'> 
  <input type='checkbox'  
  name="ten"
  checked={justChecked.ten}
  onChange={handleCheckboxChange} /> 
  </div>
  <div className='bg-white w-[580px] flex justify-between pl-[4px] items-center pr-[4px]'>
    <div className=' text-blue-700 text-[13.8px]'>What You Need to Know About AI and Robotics</div>
    <div><BiLinkExternal/></div>
    </div>
  <div className='bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]'>Admin</div>
  <div className='bg-white w-[100px] flex justify-center items-center '>
    <div className='bg-green-700 rounded-3xl text-white
     font-bold w-[25px] h-[20px] flex justify-center items-center'>2</div>
  </div>
  <div className='bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]'>2023-05-30</div>
  <div className='bg-white w-[95px] flex items-center justify-center'>
  <div className='bg-gray-500 rounded-md text-white
   font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]'>
      <TiTick/>
     </div>
     
    </div>
    <div className='w-[0.1px]'></div>
   
</div>
<div className='h-[1px] bg-gray-300'></div>










 

</div>




      </div>
      
    </div>
  )
}
