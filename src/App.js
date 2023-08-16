import { useEffect, useState } from "react";
import Loading from "./Loading";
export default function App() {
  const maxLength = 3;
  const [items, setItems] = useState([false, false, false]);
  const [isSuc, SetIsSuc] = useState(false);
  const [isDebug, SetIsDebug] = useState(false);
  const [isEnble, SetIsEnble] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [isGiveClicked, setIsGiveClicked] = useState(false);
  const handleClick = () => {
    document.body.style.overflow = "unset";
    setIsClicked(true);
    setShowPopup(false);

    setIsClicked(false);
    setIsShare(false);
  };

  const handleRelease = () => {
    setIsClicked(false);
  };

  const handleGiveClick = () => {
    document.body.style.overflow = "hidden";
    setShowPopup(true);
  };

  const handleGiveRelease = () => {};

  const handleShareClick = () => {
    setIsShare(true);
  };

  useEffect(() => {
    document.body.style.overflow = "unset";

    console.log(localStorage);
    setTimeout(() => SetIsLoading(false), 2000);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const current = urlParams.get("current");
    console.log(items);

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

    if (cnt >= maxLength) {
      document.body.style.overflow = "unset";
      SetIsEnble(true);
    }

    if (localStorage.getItem("finish") === "true") {
      document.body.style.overflow = "hidden";
      SetIsSuc(true);

      return;
    }

    if (cnt >= maxLength && current === "11116") {
      document.body.style.overflow = "hidden";
      SetIsSuc(true);

      localStorage.setItem("finish", true);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="mt-10 bg-brand ">
          <div className={`${isDebug ? "" : "hidden"}`}>
            <div
              onClick={() => {
                localStorage.clear();
                alert("all data clear");
                window.location.href = "/";
              }}
              className="py-5 pl-10 text-red-400 bg-green-400 "
            >
              ver:1.0.2b 클릭하면 데이터 초기화
            </div>
            <div
              onClick={() => {
                localStorage.setItem("1", true);
                localStorage.setItem("2", true);
                localStorage.setItem("3", true);
                localStorage.setItem("finish", false);
                alert("all data fill");
                window.location.href = "/";
              }}
              className="py-5 pl-10 text-lime-500 bg-fuchsia-400"
            >
              클릭하면 데이터 모두 채우기
            </div>
            <div>
              <div
                onClick={() => {
                  localStorage.setItem("1", true);
                  localStorage.setItem("2", true);
                  localStorage.setItem("3", true);
                  localStorage.setItem("finish", true);
                  alert("go to finish");
                  window.location.href = "/";
                }}
                className="py-5 pl-10 text-yellow-400 bg-blue-400"
              >
                클릭하면 성공태그
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center mt-14"
            onClick={() => {
              SetIsDebug(!isDebug);
            }}
          >
            <img src="top_text.png" className="w-[80%]" />
          </div>

          <div>
            <div className="relative flex items-center justify-center mt-14">
              {isEnble ? (
                <img src="stamp_panel_end.png" className="w-[80%]" />
              ) : (
                <img src="stamp_panel.png" className="w-[80%]" />
              )}

              {items.map((val, i) => {
                return val === true ? (
                  <img
                    key={i}
                    src={`${i + 1}.png`}
                    className={`absolute w-[80%] top-0 z-${+(i + 1) * 10} `}
                  />
                ) : (
                  ""
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <img src="bottom_text.png" className="w-[80%]" />
          </div>

          <div className="flex items-center justify-center my-10">
            {isEnble ? (
              <img
                onMouseDown={handleGiveClick}
                onMouseUp={handleGiveRelease}
                onTouchStart={handleGiveClick}
                onTouchEnd={handleGiveRelease}
                src={`${
                  isGiveClicked
                    ? "btn_giveway_disable.png"
                    : "btn_giveway_enble.png"
                }`}
                className="w-[80%]"
              />
            ) : (
              <img src="btn_giveway_disable.png" className="w-[80%]" />
            )}
          </div>
          {showPopup && (
            <div
              className="backdrop-blur-blur"
              style={{
                position: "fixed",
                top: "0",
                height: "100%",
                width: "100%",
                backgroundColor: "#000000b0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0",
                zIndex: 100,
              }}
            >
              <div
                className={`flex-col items-center py-8 px-8 relative flex w-[90%] max-w-sm bg-white rounded-3xl`}
              >
                <div className="z-20 flex justify-end w-full">
                  <img
                    onTouchStart={handleClick}
                    onTouchEnd={handleRelease}
                    onMouseDown={handleClick}
                    onMouseUp={handleRelease}
                    className="w-10 h-10 "
                    src={isClicked ? "btn_close_hover.png" : "btn_close.png"}
                  ></img>
                </div>
                <div className="z-20">
                  <div className="mt-6">
                    <div className="text-lg text-center text-black ">
                      Show this message
                    </div>
                    <div className="text-lg text-center text-black ">
                      at information desk and
                    </div>
                    <div className="text-lg text-center text-black ">
                      get giveaway!
                    </div>
                  </div>
                  <div className="z-20 flex items-center justify-center w-full ">
                    <img className="w-24 my-10 " src="present.png" />
                  </div>
                </div>
                <div className="z-20 flex flex-col items-center">
                  <img
                    className="w-[100%] my-4"
                    src={`${isShare ? "sns_finished.png" : "sns.png"}`}
                    onClick={() => {
                      setIsShare(true);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {isSuc && (
            <div
              className="backdrop-blur-blur"
              style={{
                position: "fixed",
                top: "0",
                height: "100%",
                width: "100%",
                backgroundColor: "#000000b0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0",
                zIndex: 1000,
              }}
            >
              <div
                className={`flex-col items-center py-8 px-8 relative flex w-[90%]  bg-[#00000000] rounded-3xl`}
              >
                <div>
                  <img src="success.png" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
