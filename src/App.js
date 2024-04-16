import { useEffect, useState } from "react";
import CStampPanal from "./components/CStampPanal";
import CDebugPopup from "./components/CDebugPopup";
import CLogin from "./components/CLogin";
import CPopup from "./components/CPopup";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRecoilState } from "recoil";
import {
  DebugState,
  GuideState,
  LoginState,
  ReceivedState,
  ShowPopupState,
} from "./atom";
import CGuide from "./components/CGuide";
export default function App() {
  //스탬프 카운트
  const maxLength = 4;
  SwiperCore.use([Autoplay, Navigation]);

  //debug 활성화를 위한 클릭
  const [isReceived, SetIsReceived] = useRecoilState(ReceivedState);
  const [isDebug, setIsDebug] = useRecoilState(DebugState);
  const [showPopup, setShowPopup] = useRecoilState(ShowPopupState);

  const [items, setItems] = useState(new Array(maxLength).fill(false));

  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const [isGuide, setIsGuide] = useRecoilState(GuideState);

  const setLoginTrue = () => {
    setIsLogin(true);
    localStorage.setItem("islogin", "true");
  };

  useEffect(() => {
    try {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      let current = urlParams.get("stp");
      console.log(localStorage);
      if (current === "reset") {
        SetIsReceived(true);
        setShowPopup(true);
        localStorage.clear();
        setLoginTrue();
        setIsGuide(false);
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
    }
  }, []);

  return (
    <div>
      {" "}
      {isDebug ? (
        <CDebugPopup />
      ) : false ? (
        <CLogin />
      ) : isGuide ? (
        <CGuide />
      ) : showPopup ? (
        <CPopup isReceived={isReceived} />
      ) : (
        <CStampPanal items={items} />
      )}
      <div
        className="fixed top-0 flex items-center justify-center w-full h-5 bg-transparent opacity-50"
        onClick={() => {
          // setIsDebug(true);
        }}
      >
        
      </div>
    </div>
  );
}
