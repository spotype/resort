"use client";
import review from "@/utils/review";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function App() {
  const reviews = review();
  return (
    <div className="py-16 bg-gray-100">
      <div className="mx-auto flex w-11/12 lg:w-[768px]">
        <Swiper
          cssMode={true}
          navigation={true}
          // pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className=""
        >
          {reviews.map(function (res) {
            return (
              <SwiperSlide className="flex flex-col items-center w-full px-8 text-center justify-center">
                <div className="flex items-center justify-center my-4 gap-2">
                  <img src={res.url} alt="" width={25} />
                  <img src={res.url} alt="" width={25} />
                  <img src={res.url} alt="" width={25} />
                  <img src={res.url} alt="" width={25} />
                  <img src={res.url} alt="" width={25} />
                </div>
                <span className="text-xl text-gray-500">{res.title}</span>

                <div className="mt-8">
                  <span className="text-2xl font-bold text-gray-600">
                    {res.othor}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
