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
                src="/test/Received.png"
                alt=""
              />
            </div>
          ) : (
            <div className='relative flex items-center justify-center' >
            <div className="flex items-center justify-center">
              {" "}
              <img
                className="w-full sm:max-w-sm"
                src="/test/Completed.png"
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
