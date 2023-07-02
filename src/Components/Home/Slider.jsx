import { Swiper, SwiperSlide } from "swiper/react";

import { BiTime } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";



import "swiper/css";

export default function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className=" h-[560px] object-scale-down swiper-container  "
      >
        <SwiperSlide>
        <div className="relative">
            <div className="bg-[url('https://plus.unsplash.com/premium_photo-1686515847297-8f25e451fe9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')] h-[640px] w-full object-cover">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute top-72 left-96 text-white items-center flex flex-col text-center">
                <h1 className="max-w-[49rem] text-[3rem] font-bold">
                  AI powered Personal Assistant for Windows
                </h1>
                <div className="flex items-center text-center mt-7 text-[14px]">
                  <BiTime />
                  <span>Jun 26 2023</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <div className="bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')] h-[640px] w-full object-cover">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute top-72 left-96 text-white items-center flex flex-col text-center">
                <h1 className="max-w-[49rem] text-[3rem] font-bold">
                  AI powered Personal Assistant for Windows
                </h1>
                <div className="flex items-center text-center mt-7 text-[14px]">
                  <BiTime />
                  <span>Jun 26 2023</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <div className="bg-[url('https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')] h-[640px] w-full object-cover">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute top-72 left-96 text-white items-center flex flex-col text-center">
                <h1 className="max-w-[49rem] text-[3rem] font-bold">
                  AI powered Personal Assistant for Windows
                </h1>
                <div className="flex items-center mt-7 text-center text-[14px]">
                  <BiTime />
                  <span>Jun 26 2023</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <div className="bg-[url('https://images.unsplash.com/photo-1613325436249-c90b7a608248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] h-[640px] w-full object-cover">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute top-72 left-96 text-white items-center flex flex-col text-center">
                <h1 className="max-w-[49rem] text-[3rem] font-bold">
                  AI powered Personal Assistant for Windows
                </h1>
                <div className="flex items-center mt-7 text-center text-[14px]">
                  <BiTime />
                  <span>Jun 26 2023</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="bg-[url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] h-[640px] w-full object-cover">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute top-72 left-96 text-white items-center flex flex-col text-center">
                <h1 className="max-w-[49rem] text-[3rem] font-bold">
                  AI powered Personal Assistant for Windows
                </h1>
                <div className="flex items-center mt-7 text-center text-[14px]">
                  <BiTime />
                  <span>Jun 26 2023</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <div className="bg-[url('https://images.unsplash.com/photo-1507666405895-422eee7d517f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] h-[640px] w-full object-cover">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute top-72 left-96 text-white items-center flex flex-col text-center">
                <h1 className="max-w-[49rem] text-[3rem] font-bold">
                  AI powered Personal Assistant for Windows
                </h1>
                <div className="flex items-center mt-7 text-center text-[14px]">
                  <BiTime />
                  <span>Jun 26 2023</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
