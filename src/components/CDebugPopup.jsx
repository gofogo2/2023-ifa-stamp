import React from 'react'
import { useRecoilState } from 'recoil';
import { DebugState, LoginState, MaxLengthState } from '../atom';

const CDebugPopup = (props) => {
  const [maxLength, setMaxLength] = useRecoilState(MaxLengthState);
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const [isDebug, setIsDebug] = useRecoilState(DebugState);
  
  const setLoginFalse = () => {
    setIsLogin(false);
  };

  const fillData = (count) => {
    initData(count);
    window.location.href = "/?stp=1";
  };

  const initData = (count) => {
    for (let index = 0; index <= count; index++) {
      localStorage.setItem(index.toString(), true);
    }
  };

  const toggleDebug = () => {
    setIsDebug(false);
  };

  const clearData = () => {
    localStorage.clear();
    setLoginFalse();
    window.location.href = "/";
  };

  const changeFinish = () => {
    initData(maxLength);
    window.location.href = "/?stp=1";
  };
  return (
    <div
    className="backdrop-blur-blur"
    style={{
      position: "fixed",
      top: "0",
      height: "100%",
      width: "100%",
      backgroundColor: "#000000b0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0",
      zIndex: 2000,
    }}
  >
     <div className='w-full' >
     <div
      className="py-5 text-center text-yellow-400 bg-gray-800 font-extralight"
    >
      version : 0.1b - 04/08 update
    </div>
    <div
    onClick={()=>clearData()}
      className="py-5 text-center text-red-400 bg-green-400"
    >
      클릭하면 데이터 초기화
    </div>
    <div
    onClick={()=>fillData(3)}
      className="py-5 text-center bg-teal-700 text-lime-500"
    >
      클릭하면 데이터 3개 채우기
    </div>
    <div
    onClick={()=>fillData(maxLength)}
      className="py-5 text-center text-lime-500 bg-fuchsia-400"
    >
      클릭하면 데이터 모두 채우기
    </div>
    <div>
      <div
          onClick={()=>changeFinish()}
        className="py-5 text-center text-yellow-400 bg-blue-400"
      >
        클릭하면 성공태그
      </div>
    </div>
    <div>
      <div
          onClick={()=>toggleDebug()}
        className="py-5 text-center text-yellow-400 bg-purple-700"
      >
        닫기
      </div>
    </div>
  </div>
  </div>
  )
}

export default CDebugPopup
