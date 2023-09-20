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
                src="/new/received.png"
                alt=""
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              {" "}
              <img
                className="w-full sm:max-w-sm"
                src="/new/completed.png"
                alt=""
              />
            </div>
          )}
        </div>
      )
  )
}

export default CPopup
