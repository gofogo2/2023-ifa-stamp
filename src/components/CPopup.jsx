import React from 'react'

const CPopup = (props) => {
  return (
    (
        <div>
          {" "}
          {props.isSuc ? (
            <div className="flex items-center justify-center">
              {" "}
              <img
                className="w-full sm:max-w-sm"
                src="/stamp/received.png"
                alt=""
              />
            </div>
          ) : (
            <div className='relative flex items-center justify-center' >
            <div className="flex items-center justify-center">
              {" "}
              <img
                className="w-full sm:max-w-sm"
                src="/stamp/completed.png"
                alt=""
              />
            </div>
            <img className="absolute bottom-5 w-[90%] z-[100000]" src="/stamp/btn.png" onClick={() => {
            // 
            window.open('https://www.samsung.com/sec/event/galaxy-s24/galaxystudio/survey/', '_blank');
            // props.setShowPopupTrue();
          }} />
            </div>
          )}
        </div>
      )
  )
}

export default CPopup
