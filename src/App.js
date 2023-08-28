import { useEffect, useState } from "react";
import Loading from "./Loading";
import CStampPanal from "./components/CStampPanal";
import CDebugPopup from "./components/CDebugPopup";

export default function App() {
  const maxLength = 5;
  let timer;
  const [clicks, setClicks] = useState(0);
  const [items, setItems] = useState([false, false, false, false, false]);
  const [isSuc, SetIsSuc] = useState(false);
  const [isDebug, setIsDebug] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    try {
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
    } catch (e) {
      console.error("handleClick 오류:", e);
      setErrorFunc();
    }
  };

  const setErrorFunc = () => {
    console.log("ssssssssss");
    setIsError(true);
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
      window.location.href = "/";
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
      window.location.href = "/";
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
      window.location.href = "/";
    } catch (e) {
      console.error("fillData 오류:", e);
      setErrorFunc();
    }
  };

  useEffect(() => {
    try {
      setTimeout(() => SetIsLoading(false), 3000);

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      let current = urlParams.get("stp");
      if (current === null) {
        // console.log(localStorage);
        setErrorFunc();
        // return;
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

      console.log(cnt);
      console.log(localStorage.getItem("finish"));
      console.log(showPopup);
      console.log(cnt >= maxLength);

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
  }, []);

  return (
    <>
      {!isError ? (
        isLoading ? (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <div className="bg-[#F5F5F5] ">
            {/* <div className="text-3xl text-gray-500 xxxs:text-red-500 xxs:text-green-500 xs:text-blue-500 sm:text-indigo-500 md:text-amber-600 lg:text-teal-950" >Helloworld</div> */}
            <div
              className="fixed top-0 left-0 w-28 h-28 bg-red-200 opacity-0 z-[10000]"
              onClick={handleClick}
            ></div>
            <div></div>
            <div
              className="fixed top-0 right-0 w-28 h-28 bg-green-200 opacity-0 z-[10000]"
              onClick={debugClick}
            ></div>
            {showPopup ? (
              <div>
                {" "}
                {isSuc ? (
                  <div className="flex items-center justify-center">
                    {" "}
                    <img
                      className="w-full sm:max-w-sm"
                      src="/new/received.png"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    {" "}
                    <img
                      className="w-full sm:max-w-sm"
                      src="/new/completed.png"
                    />
                  </div>
                )}
              </div>
            ) : (
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
        )
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center w-screen h-screen bg-brand">
            <div className=" text-md bg-brand">Access is denied. </div>

            <div className="text-sm bg-brand">
              {" "}
              <br />
              Please enable Cookies in your browser
            </div>
            <div className="text-sm bg-brand">
              {" "}
              or check your access is normal.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
