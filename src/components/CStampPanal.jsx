import React from 'react'

const CStampPanal = (props) => {
  return (
    <div>
    <div className="relative flex items-center justify-center mt-14">
      {props.isEnble ? (
        <img src="stamp_panel_end.png" className="w-[80%]" alt="" />
      ) : (
        <img src="stamp_panel.png" className="w-[80%]" alt="" />
      )}

      {props.items.map((val, i) => {
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
  )
}

export default CStampPanal;
