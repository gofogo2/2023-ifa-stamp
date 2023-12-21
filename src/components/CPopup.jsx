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
                src={`/stamp2/${props.isMainLang?"KR":"EN"}_03_thankyou.png`}
                alt=""
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              {" "}
              <img
                className="w-full sm:max-w-sm"
                src={`/stamp2/${props.isMainLang?"KR":"EN"}_02_complete.png`}
                alt=""
              />
            </div>
          )}
        </div>
      )
  )
}

export default CPopup
