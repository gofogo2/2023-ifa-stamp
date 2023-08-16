import React from 'react'
import Lottie from "lottie-react";
import approved from "./a.json";
import notApproved from "./b.json";
const ltUI = (props) => {
    return (
        <div className="col-span-1"   >
            {props.isTrue ? <img src={props.crt+".png"} /> : <img src="empty.png" />}
        </div>
    )
}

export default ltUI
