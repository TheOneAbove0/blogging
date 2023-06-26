import { Swiper, SwiperSlide } from "swiper/react";

import { BiTime } from 'react-icons/bi';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

//import image from assets

import First from "../../assets/SliderImage/1.jpg";
import Sec from "../../assets/SliderImage/22.jpg";
import Thi from "../../assets/SliderImage/33.jpg";
import For from "../../assets/SliderImage/4.jpg";
import Fith from "../../assets/SliderImage/5.jpg";
import Six from "../../assets/SliderImage/6.jpg";

import "swiper/css";

export default function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className=" h-[560px] object-scale-down swiper-container  "
      >
        <SwiperSlide>
        <div className=" relative">
          <div className=" absolute top-64 left-96 text-white items-center flex flex-col text-center ">
              <h1 className=" max-w-[49rem] text-[3rem] font-bold ">AI powered Personal Assistant for Windows</h1>
              <div className=" flex items-center text-center text-[14px] ">
                <BiTime/>
                <span >Jun 26 2023</span>
              </div>
            </div>
            <img
              src={First}
              alt="fae"
              className=" h-[560px] w-full object-cover  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
          <div className=" absolute top-64 left-96 text-white items-center flex flex-col text-center ">
              <h1 className=" max-w-[49rem] text-[3rem] font-bold ">AI powered Personal Assistant for Windows</h1>
              <div className=" flex items-center text-center text-[14px] ">
                <BiTime/>
                <span >Jun 26 2023</span>
              </div>
            </div>
            <img
              src={Sec}
              alt="fae"
              className=" h-[560px] w-full object-cover  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
          <div className=" absolute top-64 left-96 text-white items-center flex flex-col text-center ">
              <h1 className=" max-w-[49rem] text-[3rem] font-bold ">AI powered Personal Assistant for Windows</h1>
              <div className=" flex items-center text-center text-[14px] ">
                <BiTime/>
                <span >Jun 26 2023</span>
              </div>
            </div>
            <img
              src={Thi}
              alt="fae"
              className=" h-[560px] w-full object-cover  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
          <div className=" absolute top-64 left-96 text-white items-center flex flex-col text-center ">
              <h1 className=" max-w-[49rem] text-[3rem] font-bold ">AI powered Personal Assistant for Windows</h1>
              <div className=" flex items-center text-center text-[14px] ">
                <BiTime/>
                <span >Jun 26 2023</span>
              </div>
            </div>
            <img
              src={For}
              alt="fae"
              className=" h-[560px] w-full object-cover  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
          <div className=" absolute top-64 left-96 text-white items-center flex flex-col text-center ">
              <h1 className=" max-w-[49rem] text-[3rem] font-bold ">AI powered Personal Assistant for Windows</h1>
              <div className=" flex items-center text-center text-[14px] ">
                <BiTime/>
                <span >Jun 26 2023</span>
              </div>
            </div>
            <img
              src={Fith}
              alt="fae"
              className=" h-[560px] w-full object-cover  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative">
          <div className=" absolute top-64 left-96 text-white items-center flex flex-col text-center ">
              <h1 className=" max-w-[49rem] text-[3rem] font-bold ">AI powered Personal Assistant for Windows</h1>
              <div className=" flex items-center text-center text-[14px] ">
                <BiTime/>
                <span >Jun 26 2023</span>
              </div>
            </div>
            <img
              src={Six}
              alt="fae"
              className=" h-[560px] w-full object-cover  "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
