import { useEffect, useState } from "react";
import ExtensionView from "./components/ExtensionView";

export default function App() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSize = () => {
    console.log('a');
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="flex flex-col items-center mt-16" >
      <img className="w-[80%] " src="A_header.png" onClick={toggleSize}></img>
      <img className={`w-[80%] ${isMinimized ? "h-0" : "h-full"} object-cover object-top transition-all ease-in-out duration-300`} src="max_panel.png" />
      <img className="w-[80%] mt-5 " src="B_header.png" onClick={toggleSize}></img>
      <img className={`w-[80%]  object-cover object-top`} src="min_panel.png" />
      {/* <div style={{ height: isMinimized ? '0px' : '200px', transition: 'all 0.5s', backgroundColor: 'lightblue', overflow: 'hidden' }}> */}
       
      {/* </div> */}
    </div>
  
  );
}
