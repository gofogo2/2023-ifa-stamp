import { useEffect, useState } from "react";
import CStampPanal from "./components/CStampPanal";
import CDebugPopup from "./components/CDebugPopup";
import CLogin from "./components/CLogin";
import CPopup from "./components/CPopup";

export default function App() {
  //스탬프 카운트
  const maxLength = 5;

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

  return (
    <>
      {true ? (
        isGuide ? (
          <div className="relative flex justify-center bg-black">
            <img className="relative" src="stamp/guide.png"></img>
            {/* <button className="absolute w-full bg-blue-500 bottom-64 h-52 opacity-30 xs:bg-red-300 xxs:bg-amber-200 xxxs:bg-green-400 md:bg-purple-700 lg:bg-pink-400 "></button> */}
            <button className="absolute bottom-0 w-full h-52 xxs:h-32 xs:h-52 md:h-72" onClick={()=>{setGuideFalse()}}></button>
          </div>
        ) : (
          <div className="bg-[#F5F5F5] flex justify-center">
            <div
              className="fixed bottom-0 left-0 w-28 h-28 bg-red-200 opacity-0 z-[10000]"
              onClick={debugClick}
            ></div>
            {showPopup ? (
              <CPopup isSuc={isSuc} />
            ) : (
              <CStampPanal items={items} setShowPopupTrue={setShowPopupTrue} />
            )}
            <div className="flex items-center justify-center"></div>
            {isDebug && (
              <CDebugPopup
                toggleDebug={toggleDebug}
                clearData={clearData}
                fillData={()=>fillData(maxLength)}
                threeData={()=>fillData(3)}
                changeFinish={changeFinish}
              />
            )}
            <div
              className="fixed top-0 z-[10000] w-5 h-5 bg-[#00000000]"
              onClick={() => toggleDebug()}
            ></div>
          </div>
        )
      ) : (
        <CLogin setLoginTrue={setLoginTrue} />
      )}
    </>
  );
}
