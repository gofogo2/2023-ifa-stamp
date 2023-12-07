import React from 'react'

const CVerticle = (props) => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-brand">
      <div className=" text-md bg-brand">세로모드 전환 필요</div>

      <div className="text-sm bg-brand">
        {" "}
        <br />
        세로모드로 해주세요.
      </div>
      <div className="text-sm bg-brand">
        {" "}
        세로모드에 최적화 되어있습니다.
      </div>
    </div>
  </div>
  )
}

export default CVerticle
