import { useEffect, useState } from "react";
import Loading from "./Loading";
import CFinished from "./components/CFinished";
import CBottomText from "./components/CBottomText";
import CStampPanal from "./components/CStampPanal";
import CTopText from "./components/CTopText";
import CStampCompleted from "./components/CStampCompleted";
import CDebugPopup from "./components/CDebugPopup";

export default function App() {
  const maxLength = 3;
  const [items, setItems] = useState([false, false, false]);
  const [isSuc, SetIsSuc] = useState(false);
  const [isDebug, setIsDebug] = useState(false);
  const [isEnble, SetIsEnble] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const toggleDebug=()=>{
    setIsDebug(!isDebug);
  }

  const clearData=()=>{
    localStorage.clear();
    alert("all data clear");
    window.location.href = "/";
  }

  const fillData=()=>{
    localStorage.setItem("1", true);
    localStorage.setItem("2", true);
    localStorage.setItem("3", true);
    localStorage.setItem("finish", false);
    alert("all data fill");
    window.location.href = "/";
  }

  const changeFinish=()=>{
    localStorage.setItem("1", true);
    localStorage.setItem("2", true);
    localStorage.setItem("3", true);
    localStorage.setItem("finish", true);
    alert("go to finish");
    window.location.href = "/";
  }

  useEffect(() => {
    // document.body.style.overflow = "unset";

    setTimeout(() => SetIsLoading(false), 2000);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const current = urlParams.get("current");
    console.log(items);

    var modifyItems = items;

    items.forEach((val, i) => {
      const reval = localStorage.getItem(i + 1);
      console.log(reval);
      if (reval === null || reval === false) {
        modifyItems[i] = false;
      } else {
        modifyItems[i] = true;
      }

      if (current === (i + 1).toString()) {
        modifyItems[i] = true;
        localStorage.setItem(current, true);
      }
    });

    setItems([...modifyItems]);

    let cnt = 0;
    modifyItems.forEach((val, i) => {
      if (val === true) {
        cnt++;
      }
    });

    // document.body.style.overflow = "unset";

    if (cnt >= maxLength) {
      // document.body.style.overflow = "hidden";
      setShowPopup(true);
      SetIsEnble(true);
    }

    if (localStorage.getItem("finish") === "true") {
      // document.body.style.overflow = "hidden";
      SetIsSuc(true);

      return;
    }

    if (cnt >= maxLength && current === "11116") {
      // document.body.style.overflow = "hidden";
      SetIsSuc(true);

      localStorage.setItem("finish", true);
    }
  }, []);

  return (
    <>
      
    </>
  );
}
