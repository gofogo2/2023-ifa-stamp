import React from 'react'

const CError = (props) => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-brand">
      <div className=" text-md bg-brand">Access is denied. </div>

      <div className="text-sm bg-brand">
        {" "}
        <br />
        Please enable Cookies in your browser
      </div>
      <div className="text-sm bg-brand">
        {" "}
        or check your access is normal.
      </div>
    </div>
  </div>
  )
}

export default CError
