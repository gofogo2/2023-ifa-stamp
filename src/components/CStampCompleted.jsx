import React from 'react'

const CStampCompleted = () => {

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

  return (
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
  )
}

export default CStampCompleted
