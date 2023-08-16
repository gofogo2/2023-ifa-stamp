import React, { useEffect, useState } from "react";

function CToast({ message,show }) {
  // if (!isVisible) return null;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, [show]);
  return <div>{isVisible ? <div className="toast">{message}</div> : ""}</div>;
}
export default CToast;
