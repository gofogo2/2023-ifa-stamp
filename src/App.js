import { useCallback, useEffect, useRef, useState } from "react";
import CStampPanal from "./components/CStampPanal";
import CDebugPopup from "./components/CDebugPopup";
import CLogin from "./components/CLogin";
import CPopup from "./components/CPopup";
import ImageSlider from "./components/ImageSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
export default function App() {
  //스탬프 카운트
  const maxLength = 5;
  SwiperCore.use([Autoplay, Navigation]);

  //debug 활성화를 위한 클릭
  const clickCount = 3;
  let timer;
  const [clicks, setClicks] = useState(0);
  const [isSuc, SetIsSuc] = useState(false);
  const [isDebug, setIsDebug] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [items, setItems] = useState(new Array(maxLength).fill(false));
  const [isError, setIsError] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isGuide, setIsGuide] = useState(true);

  const setShowPopupTrue = () => {
    fillData();
    setShowPopup(true);
  };

  const setErrorFunc = () => {
    setIsError(false);
  };

  const setLoginTrue = () => {
    setIsLogin(true);
    localStorage.setItem("islogin", "true");
  };

  const setGuideTrue = () => {
    setIsGuide(true);
    localStorage.setItem("isGuide", "true");
  };
  const setGuideFalse = () => {
    setIsGuide(false);
    localStorage.setItem("isGuide", "false");
  };

  const setLoginFalse = () => {
    setIsLogin(false);
  };

  const debugClick = () => {
    clearTimeout(timer);
    setClicks(clicks + 1);

    if (clicks + 1 === clickCount) {
      toggleDebug();
      setClicks(0);
    } else {
      timer = setTimeout(() => {
        setClicks(0);
      }, 1000);
    }
  };

  const toggleDebug = () => {
    console.log(isDebug);
    setIsDebug(!isDebug);
  };

  const clearData = () => {
    localStorage.clear();
    setLoginFalse();
    window.location.href = "/";
  };

  const fillData = (count) => {
    initData(count);
    window.location.href = "/?stp=1";
  };

  const initData = (count) => {
    for (let index = 0; index <= count; index++) {
      localStorage.setItem(index.toString(), true);
    }
  };

  const changeFinish = () => {
    initData(maxLength);
    // localStorage.setItem("finish", true);
    window.location.href = "/?stp=1";
  };

  useEffect(() => {
    try {
      // setItems(new [maxLength]());
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      let current = urlParams.get("stp");
      if (current === null) {
        // setErrorFunc();
      }

      if (current === "reset") {
        SetIsSuc(true);
        setShowPopup(true);
        localStorage.clear();
        setLoginTrue();
        setIsGuide(true);
        return;
      }

      console.log(current);
      switch (current) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
          current = "7777";
          break;

        //인덱스 암호화
        case "0c7dd660":
          current = "1";
          break;
        case "1c85f955":
          current = "2";
          break;
        case "4b9d8ac5":
          current = "3";
          break;
        case "6f8b2e77":
          current = "4";
          break;
        case "8db8d264":
          current = "5";
          break;
        default:
          break;
      }

      console.log(current);

      var modifyItems = items;

      if (
        localStorage.getItem("islogin") === null ||
        localStorage.getItem("islogin") === "false"
      ) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }

      if (
        localStorage.getItem("isGuide") === null ||
        localStorage.getItem("isGuide") === "true"
      ) {
        setIsGuide(true);
      } else {
        setIsGuide(false);
      }

      items.forEach((val, i) => {
        const reval = localStorage.getItem(i + 1);

        if (reval === null || reval === false) {
          modifyItems[i] = false;
        } else {
          modifyItems[i] = true;
        }

        if (current === (i + 1).toString()) {
          modifyItems[i] = true;
          localStorage.setItem(current, true);
        }
      });
      setItems([...modifyItems]);

      let cnt = 0;
      modifyItems.forEach((val, i) => {
        if (val === true) {
          cnt++;
        }
      });

      console.log("a:" + cnt);
      if (cnt >= maxLength) {
        setShowPopup(true);
      }

      if (current === null) {
        console.log("true");
      } else {
        if (current !== "reset") window.location.href = "/";
      }
    } catch (e) {
      console.error("useEffect 오류:", e);
      setErrorFunc();
    }
  }, []);

  const sliderImages = [
    "/test/2-1.png",
    "/test/2-2.png",
    "/test/2-3.png",
    "/test/2-4.png",
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      {/* 상단 이미지 */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/3 h-1/4">
        <img src="/test/1.png" className="object-contain w-full h-full" />
      </div>

      {/* 배경 이미지와 Swiper 슬라이더를 포함하는 컨테이너 */}
      <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/3 h-2/4">
        <img
          src="/test/2.png"
          className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        />

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
                <div>{index}</div>
                <img
                  src={`${value}`}
                  className="object-contain w-full h-full"
                  alt=""
                />
              </SwiperSlide>
            );
          })}
          <div className="absolute bottom-0 flex justify-around w-full">
            <div ref={prevRef} className="z-50 flex w-20 h-20 bg-red-50">
              Prev
            </div>
            <div ref={nextRef} className="z-50 flex w-20 h-20 bg-red-50">
              Next
            </div>
          </div>
        </Swiper>
      </div>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/3 h-1/4">
        <img src="/test/3.png" className="object-contain w-full h-full" />
      </div>
    </div>
    // <>
    //   {true ? (
    //     isGuide ? (
    //       <div className="relative flex justify-center bg-black">
    //         <img className="relative" src="stamp/guide.png"></img>
    //         {/* <button className="absolute w-full bg-blue-500 bottom-64 h-52 opacity-30 xs:bg-red-300 xxs:bg-amber-200 xxxs:bg-green-400 md:bg-purple-700 lg:bg-pink-400 "></button> */}
    //         <button className="absolute bottom-0 w-full h-52 xxs:h-32 xs:h-52 md:h-72" onClick={()=>{setGuideFalse()}}></button>
    //       </div>
    //     ) : (
    //       <div className="bg-[#F5F5F5] flex justify-center">
    //         <div
    //           className="fixed bottom-0 left-0 w-28 h-28 bg-red-200 opacity-0 z-[10000]"
    //           onClick={debugClick}
    //         ></div>
    //         {showPopup ? (
    //           <CPopup isSuc={isSuc} />
    //         ) : (
    //           <CStampPanal items={items} setShowPopupTrue={setShowPopupTrue} />
    //         )}
    //         <div className="flex items-center justify-center"></div>
    //         {isDebug && (
    //           <CDebugPopup
    //             toggleDebug={toggleDebug}
    //             clearData={clearData}
    //             fillData={()=>fillData(maxLength)}
    //             threeData={()=>fillData(3)}
    //             changeFinish={changeFinish}
    //           />
    //         )}
    //         <div
    //           className="fixed top-0 z-[10000] w-5 h-5 bg-[#00000000]"
    //           onClick={() => toggleDebug()}
    //         ></div>
    //       </div>
    //     )
    //   ) : (
    //     <CLogin setLoginTrue={setLoginTrue} />
    //   )}
    // </>
  );
}
