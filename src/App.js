import { useEffect, useState } from "react";
import Loading from "./Loading";
import CFinished from "./components/CFinished";
import CBottomText from "./components/CBottomText";
import CStampPanal from "./components/CStampPanal";
import CTopText from "./components/CTopText";
import CStampCompleted from "./components/CStampCompleted";
import CDebugPopup from "./components/CDebugPopup";

export default function App() {
  const maxLength = 3;
  let timer;
  const [clicks, setClicks] = useState(0);
  const [items, setItems] = useState([false, false, false, false, false]);
  const [isSuc, SetIsSuc] = useState(false);
  const [isDebug, setIsDebug] = useState(true);
  const [isEnble, SetIsEnble] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    clearTimeout(timer);
    setClicks(clicks + 1);

    if (clicks + 1 === 3) {
      // alert.log('0.5초 동안 3번 클릭했어!');
      SetIsSuc(true);
      localStorage.setItem("finish", true);
      setClicks(0);
    } else {
      timer = setTimeout(() => {
        setClicks(0);
      }, 500);
    }
  };

  const debugClick = () => {
    clearTimeout(timer);
    setClicks(clicks + 1);

    if (clicks + 1 === 3) {
      // alert.log('0.5초 동안 3번 클릭했어!');
      toggleDebug();
      setClicks(0);
    } else {
      timer = setTimeout(() => {
        setClicks(0);
      }, 1000);
    }
  };

  const toggleDebug = () => {
    setIsDebug(!isDebug);
  };

  const clearData = () => {
    localStorage.clear();
    alert("all data clear");
    window.location.href = "/";
  };

  const fillData = () => {
    localStorage.setItem("1", true);
    localStorage.setItem("2", true);
    localStorage.setItem("3", true);
    localStorage.setItem("4", true);
    localStorage.setItem("5", true);
    localStorage.setItem("finish", false);
    alert("all data fill");
    window.location.href = "/";
  };

  const changeFinish = () => {
    localStorage.setItem("1", true);
    localStorage.setItem("2", true);
    localStorage.setItem("3", true);
    localStorage.setItem("4", true);
    localStorage.setItem("5", true);
    localStorage.setItem("finish", true);
    alert("go to finish");
    window.location.href = "/";
  };

  useEffect(() => {
    
    setTimeout(() => SetIsLoading(false), 500);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let current = urlParams.get("current");
    console.log(current);
    switch (current) {
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

    items.forEach((val, i) => {
      const reval = localStorage.getItem(i + 1);
      console.log(reval);
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

    console.log(cnt);
    console.log(localStorage.getItem("finish"));
    console.log(showPopup);
    console.log(cnt >= maxLength);

    if (localStorage.getItem("finish") === "true" && cnt >= maxLength) {
      console.log("aaaaaaaaaa");
      setShowPopup(true);
      SetIsSuc(true);
      return;
    }

    if (cnt >= maxLength) {
      setShowPopup(true);
    }
  }, []);


  const myStyle = {
    width: '30px',
    height: '30px',
    backgroundColor:'red',
    maxWidth:'30px',
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="bg-brand ">
          
          {/* <div className="text-3xl text-gray-500 xxxs:text-red-500 xxs:text-green-500 xs:text-blue-500 sm:text-indigo-500 md:text-amber-600 lg:text-teal-950" >Helloworld</div> */}
          <div
            className="fixed top-0 left-0 w-28 h-28 bg-red-200 opacity-30 z-[10000]"
            onClick={handleClick}
          ></div>
          <div  ></div>
          <div
            className="fixed top-0 right-0 w-28 h-28 bg-green-200 opacity-30 z-[10000]"
            onClick={debugClick}
          ></div>
          {showPopup ? (
            <div>
              {" "}
              {isSuc ? (
                <div className="flex items-center justify-center">
                  {" "}
                  <img  className="w-full sm:max-w-sm" src="/new/received.png" />
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  {" "}
                  <img className="w-full sm:max-w-sm" src="/new/completed.png" />
                </div>
              )}
            </div>
          ) : (
            <CStampPanal isEnble={isEnble} items={items} />
          )}
          <div className="flex items-center justify-center"></div>
          {isDebug && (
            <CDebugPopup
              toggleDebug={toggleDebug}
              clearData={clearData}
              fillData={fillData}
              changeFinish={changeFinish}
            />
          )}
          <div
            className="fixed top-0 z-[10000] w-5 h-5 bg-[#00000000]"
            onClick={() => toggleDebug()}
          ></div>
        </div>
      )}
    </>
  );
}
