import React from 'react'
import Lottie from "lottie-react";
import success from "./result.json";
const ltUIS = (props) => {
    return (
        <div className="w-full"   >
             <Lottie animationData={success} loop={false} />
        </div>
    )
}

export default ltUIS
