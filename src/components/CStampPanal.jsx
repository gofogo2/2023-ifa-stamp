import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRecoilState } from "recoil";
import { GuideState } from "../atom";
const CStampPanal = (props) => {
  const [count, setCount] = useState(0);
  const [isGuide, setIsGuide] = useRecoilState(GuideState);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sliderImages = [
    "/test/card01.png",
    "/test/card02.png",
    "/test/card03.png",
    "/test/card04.png",
    "/test/card05.png",
  ];
  useEffect(() => {
    console.log(props.items);
    let newCount = 0;
    props.items.forEach((element) => {
      if (element === true) {
        newCount += 1;
      }
    });

    setCount((prevCount) => newCount);
  }, []); // 의존성 배열에 props.items 추가

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      {/* 상단 이미지 */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/3 h-1/4">
        <img src="/test/top.png" className="object-contain w-full h-full" />
      </div>
      <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/3 h-1/4">
        <img
          src="/test/stamp_plate.png"
          className="object-contain w-full"
        />
            {props.items.map((val, i) => {
            return val === true ? (
              <img
                key={i}
                alt=""
                src={`test/stamp_${i + 1}.png`}
                className={`absolute w-full  top-0 z-${
                  +(i + 1) * 5
                } `}
              />
            ) : (
              ""
            );
          })}
      </div>
      <div className="relative flex items-center justify-center">
          <img
            src="/test/card_plate.png"
            className="absolute top-0 left-0 z-0 object-cover w-full h-full"
          />

      
        </div>
      {/* 배경 이미지와 Swiper 슬라이더를 포함하는 컨테이너 */}
      <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/3 h-2/4">
      

        <Swiper
          // ref={sliderRef}
          loop={true}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          // autoplay={{delay:3000,disableOnInteraction:true}}
          autoplay={{
            delay: 3000, // 5초 지연
            disableOnInteraction: false, // 사용자 스와이프 후에도 자동재생 계속
          }}
          navigation={{
            nextEl: "",
            prevEl: "",
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="absolute top-0 left-0 z-10 w-full h-full mySwiper"
          // Swiper 설정
        >
          {sliderImages.map((value, index) => {
            return (
              <SwiperSlide>
                <img
                  src={`${value}`}
                  key={index}
                  className="object-contain w-full h-full"
                  alt=""
                />
              </SwiperSlide>
            );
          })}
          <div className="absolute top-0 flex items-center justify-between w-full h-full">
            <div
              ref={prevRef}
              className="z-50 flex items-center justify-center w-10 bg-transparent opacity-50"
            >
              <img  src="/test/arrow_L.png" />
            </div>
            <div
              ref={nextRef}
              className="z-50 flex items-center justify-center w-10 h-full bg-transparent opacity-50"
            >
              <img  src="/test/arrow_R.png" />
            </div>
          </div>
        </Swiper>
      </div>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/3 h-1/4 bg-[#F6F6F6] flex items-center justify-center">
        <div>
          <img
            src="/test/btn_info.png"
            className="object-contain w-full h-full"
            onClick={()=>{setIsGuide(true)}}
          />
        </div>
      </div>
    </div>
  );
};

export default CStampPanal;
