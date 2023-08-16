import React from 'react'

const CTopText = (props) => {
  return (
    <div
    className="flex items-center justify-center mt-14"
    onClick={props.toggleDebug}
  >
    <img src="top_text.png" className="w-[80%]" alt="" />
  </div>
  )
}

export default CTopText
