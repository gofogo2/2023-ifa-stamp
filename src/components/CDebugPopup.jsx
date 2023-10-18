import React from 'react'

const CDebugPopup = (props) => {
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
      zIndex: 2000,
    }}
  >
     <div className='w-full' >
     <div
      className="py-5 text-center text-yellow-400 bg-gray-800 font-extralight"
    >
      version : 0.19 - 10월 18일자 디자인 업데이트
    </div>
    <div
    onClick={props.clearData}
      className="py-5 text-center text-red-400 bg-green-400 "
    >
      클릭하면 데이터 초기화
    </div>
    <div
    onClick={props.threeData}
      className="py-5 text-center bg-teal-700 text-lime-500"
    >
      클릭하면 데이터 3개 채우기
    </div>
    <div
    onClick={props.fillData}
      className="py-5 text-center text-lime-500 bg-fuchsia-400"
    >
      클릭하면 데이터 모두 채우기
    </div>
    <div>
      <div
          onClick={props.changeFinish}
        className="py-5 text-center text-yellow-400 bg-blue-400"
      >
        클릭하면 성공태그
      </div>
    </div>
    <div>
      <div
          onClick={props.toggleDebug}
        className="py-5 text-center text-yellow-400 bg-purple-700"
      >
        닫기
      </div>
    </div>
  </div>
  </div>
  )
}

export default CDebugPopup
