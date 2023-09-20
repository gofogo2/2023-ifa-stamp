import React from 'react'
import Lottie from "lottie-react";
import ltLoading from "./loading.json";

const Loading = (props) => {
    return (
        <div className="flex items-center justify-center w-full h-screen"   >
            <Lottie animationData={ltLoading} />
        </div>
    )
}

export default Loading
