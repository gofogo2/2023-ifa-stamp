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

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("복사할 텍스트")
      .then(() => {
        console.log("텍스트가 클립보드에 복사됐어!");
        alert("텍스트가 클립보드에 복사됐어!");
      })
      .catch((err) => {
        console.error("클립보드 복사 실패:", err);
        alert("클립보드 복사 실패");
      });
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

    document.body.style.overflow = "unset";

    if (cnt >= maxLength) {
      document.body.style.overflow = "hidden";
      setShowPopup(true);
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
            <img src="top_text.png" className="w-[80%]" alt="" />
          </div>

          <div>
            <div className="relative flex items-center justify-center mt-14">
              {isEnble ? (
                <img src="stamp_panel_end.png" className="w-[80%]" alt="" />
              ) : (
                <img src="stamp_panel.png" className="w-[80%]" alt="" />
              )}

              {items.map((val, i) => {
                return val === true ? (
                  <img
                    key={i}
                    alt=""
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
            <img alt="" src="bottom_text.png" className="w-[80%]" />
          </div>

          <div className="flex items-center justify-center my-10"></div>
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
                className={`flex-col items-center py-8 px-8 relative flex w-[100%] h-[100%] bg-white`}
              >
                <div className="z-20 flex justify-end w-full"></div>
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
                    <img alt="" className="w-24 my-10 " src="present.png" />
                  </div>
                </div>
                <div className="z-20 flex flex-col items-center">
                  <img
                    alt=""
                    className="w-[100%] my-4"
                    src={`sns.png`}
                    onClick={() => {
                      copyToClipboard();
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
                  <img src="success.png" alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
