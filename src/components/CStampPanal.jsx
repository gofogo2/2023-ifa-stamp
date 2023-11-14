import React from 'react'

const CStampPanal = (props) => {
  return (
    <div>
    <div className="relative flex items-center justify-center">
    <img src="stamp/bg.png" className="w-full sm:max-w-sm" alt="" />
      {props.items.map((val, i) => {
        return val === true ? (
          <img
            key={i}
            alt=""
            src={`stamp/${i + 1}.png`}
            className={`absolute w-full sm:max-w-sm top-0 z-${+(i + 1) * 10} `}
          />
        ) : (
          ""
        );
      })}
    </div>
    {/* <div className='fixed top-0 left-0 flex flex-col w-screen h-screen bg-white ' >Registration
    <button className='bg-green-100' >Continue</button>
    
    </div> */}
  </div>
  )
}

export default CStampPanal;
