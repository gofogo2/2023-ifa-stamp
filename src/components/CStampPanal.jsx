import React, { useEffect, useState } from 'react'
const CStampPanal = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let newCount = 0;
    props.items.forEach(element => {
      if (element === true) {
        newCount += 1;
      }
    });
  
    setCount(prevCount => newCount);
  }, [props.items]); // 의존성 배열에 props.items 추가

  return (

    <div className="relative"> {/* 여기에 relative 추가 */}
      <div className="relative flex items-center justify-center">
        <img src="stamp/bg.png" className="w-full sm:max-w-sm" alt="" />
        {props.items.map((val, i) => {
          return val === true ? (
            <img
              key={i}
              alt=""
              src={`stamp/${i + 1}.png`}
              className={`absolute w-full sm:max-w-sm top-0 z-${+(i + 1) * 5} `}
            />
          ) : (
            ""
          );
        })}
      </div>

      <div className='flex items-center justify-center  w-[100%]' > 
      {count === 0 ? <img src="stamp/btn_off.png" className="absolute bottom-5 w-[90%] z-[100000]" /> :
        <img src="stamp/btn.png" onClick={()=>{props.setShowPopupTrue()}} className="absolute bottom-5 w-[90%] z-[100000]" />}
      </div>
    </div>
  )
}

export default CStampPanal;