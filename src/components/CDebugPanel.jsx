import React from 'react'

const CDebugPanel = (props) => {
  return (
    <div className={`${props.isDebug ? "" : "hidden"}`}>
    <div
    onClick={props.clearData}
      className="py-5 pl-10 text-red-400 bg-green-400 "
    >
      ver:1.0.2b 클릭하면 데이터 초기화
    </div>
    <div
    onClick={props.fillData}
      className="py-5 pl-10 text-lime-500 bg-fuchsia-400"
    >
      클릭하면 데이터 모두 채우기
    </div>
    <div>
      <div
          onClick={props.changeFinish}
        className="py-5 pl-10 text-yellow-400 bg-blue-400"
      >
        클릭하면 성공태그
      </div>
    </div>
  </div>
  )
}

export default CDebugPanel
