import { useEffect, useState } from "react";
import CStampPanal from "./components/CStampPanal";
import CDebugPopup from "./components/CDebugPopup";
import CError from "./components/CError";
import CPopup from "./components/CPopup";
import CRegisteration from "./components/CRegisteration";
import CVerticle from "./components/CVerticle";

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
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [count, setCount] = useState(false);
  const [isMainLang, setIsMainLang] = useState(true);

  const goToFinished = () => {
    setShowPopup(true);
    localStorage.setItem("finish", true);
    document.body.style.backgroundColor = '#F4F7F5';
  }

  const setErrorFunc = () => {
    setIsError(false);
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
    setIsDebug(!isDebug);
  };

  const clearData = () => {
    try {
      localStorage.clear();
      localStorage.setItem("isLogin", true);
      // alert("all data clear");
      window.location.href = "/?stp=1";
    } catch (e) {
      console.error("clearData 오류:", e);

      setErrorFunc();
    }
  };

  const load=(current)=>{
    try {
      if (localStorage.getItem("reset") === 'true' && current !== "reset") {
        clearData();
      }

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
        case "7d8a2kv6":
          current = "5";
          break;
        default:
          break;
      }

      var modifyItems = items;

      items.forEach((val, i) => {
        const reval = localStorage.getItem(i + 1);
        // console.log(reval);
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

      setCount(cnt);

      if (current === "reset" && cnt >= maxLength&&(localStorage.getItem("finish") === "true")) {
        SetIsSuc(true);
        document.body.style.backgroundColor = '#A0D6B4';
        localStorage.setItem('reset', true);
      }


      if (localStorage.getItem("finish") === "true" && cnt >= maxLength) {
        setShowPopup(true);
        document.body.style.backgroundColor = '#A0D6B4';
        // SetIsSuc(true);
        return;
      }

      if (cnt >= maxLength) {
        setShowPopup(false);
      }
    } catch (e) {
      console.error("useEffect 오류:", e);
      setErrorFunc();
    }
  }

  const fillData = () => {
    try {
      localStorage.setItem("1", true);
      localStorage.setItem("2", true);
      localStorage.setItem("3", true);
      localStorage.setItem("4", true);
      localStorage.setItem("5", true);
      localStorage.setItem("finish", false);
      localStorage.setItem("isLogin", true);
      alert("all data fill");
      window.location.href = "/?stp=1";
    } catch (e) {
      console.error("fillData 오류:", e);
      setErrorFunc();
    }
  };

  const threeData = () => {
    try {
      localStorage.setItem("1", true);
      localStorage.setItem("2", true);
      localStorage.setItem("3", true);
      localStorage.setItem("finish", false);
      localStorage.setItem("isLogin", true);
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
      localStorage.setItem("isLogin", true);
      localStorage.setItem("isReset", false);
      localStorage.setItem("lang", true);
      alert("go to finish");
      window.location.href = "/?stp=1";
    } catch (e) {
      console.error("fillData 오류:", e);
      setErrorFunc();
    }
  };

  const loginTrue = (email) => {
    fetch(`http://${process.env.REACT_APP_URI}:3333/user/add`, {
      method: "POST",
      body: JSON.stringify({ email: email, region: process.env.REACT_APP_REGION }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLogin(true);
        localStorage.setItem("isLogin", true);
        document.body.style.backgroundColor = '#f5f5f5';
        return;
      });
  };

  const loginFalse = () => {
    setIsLogin(false);
    clearData();
    localStorage.setItem("isLogin", false);
  };

  const broswerLang=()=>{
    console.log(navigator.language);
  }

  
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let current = urlParams.get("stp");
        load(current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);


  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let current = urlParams.get("stp");
      broswerLang();
      if(localStorage.getItem("lang") !== null){
         if(localStorage.getItem("lang") === 'false'){
          setIsMainLang(false);
         }
      }
      else
      {
          if(navigator.language.includes('en')){
            setIsMainLang(false);
          }
      }


      // 로그인 로직
      if (localStorage.getItem("isLogin") === null) {
        localStorage.setItem("isLogin", "false");
        setIsLogin(false);
        document.body.style.backgroundColor = '#ffffff';
      } else if (localStorage.getItem("isLogin") === "false") {
        setIsLogin(false);
        document.body.style.backgroundColor = '#ffffff';
      } else {
        setIsLogin(true);
        document.body.style.backgroundColor = '#f5f5f5';
      }

      console.log(localStorage.getItem("isLogin"));

      load(current);
      

  }, []);

  return (
    <>
      {isLogin ? (
        !isError ? (
          <div className="bg-[#F5F5F5] flex justify-center">

            <div
              className="fixed bottom-0 left-0 w-28 h-28  z-[10000]"
              onClick={debugClick}
            ></div>
            {/* <div
              className=" fixed top-[7%] w-[80%] h-28  z-[10000]"
            ></div> */}
            {showPopup ? (
              <CPopup isSuc={isSuc} isMainLang={isMainLang} />
            ) : (
              <div className="relative" >
                {/* <div className="top-0 fixed left-0 z-[10000] bg-red-100" >{navigator.language}</div> */}
                <img src={`stamp2/${isMainLang ? "KR" : "EN"}_01_0${count}.png`} className="w-full sm:max-w-sm" alt="" />
                <img className="absolute top-0" onClick={() => {
                  localStorage.setItem("lang", !isMainLang);
                  setIsMainLang(!isMainLang);
                }} src={`stamp2/lang_${isMainLang ? "KR" : "EN"}.png`} />



                <div className="relative flex items-center justify-center" >
                  <img src={`stamp2/${count === maxLength ? "plate_full" : "plate"}.png`} className="w-full sm:max-w-sm" />

                  {items.map((val, i) => {
                    return val === true ? (
                      <img
                        key={i}
                        alt=""
                        src={`stamp2/${i + 1}.png`}
                        className={`absolute w-full sm:max-w-sm top-0 z-${+(i + 1) * 10} `}
                      />
                    ) : (
                      ""
                    );
                  })}
                  {count === 5 ? <img onClick={() => { goToFinished()}} src={`stamp2/btn_05_${isMainLang ? "KR" : "EN"}.png`} className="absolute bottom-0 w-full sm:max-w-sm" ></img> : <img src={`stamp2/btn_0${count}.png`} className="absolute bottom-0 w-full sm:max-w-sm" ></img>}
                </div>
                

              </div>
              // <CStampPanal items={items} />
            )}
            <div className="flex items-center justify-center "></div>
            {isDebug && (
              <CDebugPopup
                toggleDebug={toggleDebug}
                clearData={clearData}
                fillData={fillData}
                threeData={threeData}
                changeFinish={changeFinish}
                loginFalse={loginFalse}
              />
            )}
            <div
              className="fixed -top-1 z-[10000] w-5 h-5 opacity-0"
              onClick={() => toggleDebug()}
            ></div>
          </div>
        ) : (
          <CError />
        )
      ) : (
        <CRegisteration isMainLang={isMainLang} loginTrue={loginTrue} />
      )}
    </>
  );
}
