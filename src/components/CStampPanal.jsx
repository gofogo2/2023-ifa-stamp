import React from 'react'

const CStampPanal = (props) => {
  return (
    <div>
    <div className="relative flex items-center justify-center">
    <img src="new/bg.png" className="w-full sm:max-w-sm" alt="" />
      {props.items.map((val, i) => {
        return val === true ? (
          <img
            key={i}
            alt=""
            src={`new/${i + 1}.png`}
            className={`absolute w-full sm:max-w-sm top-0 z-${+(i + 1) * 10} `}
          />
        ) : (
          ""
        );
      })}
    </div>
  </div>
  )
}

export default CStampPanal;
