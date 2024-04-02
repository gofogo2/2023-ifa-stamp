import React from "react";
import { useRecoilState } from "recoil";
import { GuideState } from "../atom";

const CGuide = () => {
  const [isGuide, setIsGuide] = useRecoilState(GuideState);
  const setGuideFalse = () => {
    setIsGuide(false);
    localStorage.setItem("isGuide", "false");
  };

  return (
    <div className="relative flex justify-center bg-black">
      <img className="relative" src="test/guide.png"></img>
      <button
        className="absolute bottom-0 w-full h-52 xxs:h-32 xs:h-52 md:h-72"
        onClick={() => {
          setGuideFalse();
        }}
      ></button>
    </div>
  );
};

export default CGuide;
