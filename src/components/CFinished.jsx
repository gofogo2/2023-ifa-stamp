import React from 'react'

const CFinished = () => {
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
  )
}

export default CFinished
