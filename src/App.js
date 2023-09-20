import { useEffect, useState } from "react";
import CStampPanal from "./components/CStampPanal";
import CDebugPopup from "./components/CDebugPopup";
import CError from "./components/CError";
import CPopup from "./components/CPopup";

export default function App() {
  const maxLength = 5;
  let timer;
  const [clicks, setClicks] = useState(0);
  const [items, setItems] = useState([false, false, false, false, false]);
  const [isSuc, SetIsSuc] = useState(false);
  const [isDebug, setIsDebug] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    try {
      clearTimeout(timer);
      setClicks(clicks + 1);

      if (clicks + 1 === 3) {
        SetIsSuc(true);
        localStorage.setItem("finish", true);
        setClicks(0);
      } else {
        timer = setTimeout(() => {
          setClicks(0);
        }, 500);
      }
    } catch (e) {
      console.error("handleClick 오류:", e);
      setErrorFunc();
    }
  };

  const setErrorFunc = () => {
    setIsError(false);
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
    try {
      localStorage.clear();
      alert("all data clear");
      window.location.href = "/?stp=1";
    } catch (e) {
      console.error("clearData 오류:", e);

      setErrorFunc();
    }
  };

  const fillData = () => {
    try {
      localStorage.setItem("1", true);
      localStorage.setItem("2", true);
      localStorage.setItem("3", true);
      localStorage.setItem("4", true);
      localStorage.setItem("5", true);
      localStorage.setItem("finish", false);
      alert("all data fill");
      window.location.href = "/?stp=1";
    } catch (e) {
      console.error("fillData 오류:", e);
      setErrorFunc();
    }
  };

  const changeFinish = () => {
    try {
      localStorage.setItem("1", true);
      localStorage.setItem("2", true);
      localStorage.setItem("3", true);
      localStorage.setItem("4", true);
      localStorage.setItem("5", true);
      localStorage.setItem("finish", true);
      alert("go to finish");
      window.location.href = "/?stp=1";
    } catch (e) {
      console.error("fillData 오류:", e);
      setErrorFunc();
    }
  };

  useEffect(() => {
    try {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      let current = urlParams.get("stp");
      if (current === null) {
        setErrorFunc();
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

      if (localStorage.getItem("finish") === "true" && cnt >= maxLength) {
        setShowPopup(true);
        SetIsSuc(true);
        return;
      }

      if (cnt >= maxLength) {
        setShowPopup(true);
      }
    } catch (e) {
      console.error("useEffect 오류:", e);
      setErrorFunc();
    }
  }, [items, showPopup]);

  return (
    <>
      {!isError ? (
        <div className="bg-[#F5F5F5] flex justify-center">
          <div
            className="fixed bottom-0 left-0 w-28 h-28 bg-red-200 opacity-0 z-[10000]"
            onClick={debugClick}
          ></div>
          <div
            className=" fixed top-[7%] w-[80%] h-28 bg-red-200 opacity-0 z-[10000]"
            onClick={handleClick}
          ></div>
          {showPopup ? <CPopup isSuc={isSuc} /> : (
            <CStampPanal items={items} />
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
      ) : (
        <CError />
      )}
    </>
  );
}
