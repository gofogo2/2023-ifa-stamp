import React from 'react'

const CPopup = (props) => {
  return (
    (
        <div>
          {" "}
          {props.isReceived ? (
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
            </div>
          )}
        </div>
      )
  )
}

export default CPopup
