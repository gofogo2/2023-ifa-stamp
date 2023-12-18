import { useState } from "react";
const CRegisteration = (props) => {
  const [state, setState] = useState(0);
  const [isVaild, setIsVailed] = useState(false);
  const [terms, setTerms] = useState([false]);
  const [policy, setPolicy] = useState([false]);
  const [popupTerms, setPopupTerms] = useState([false]);
  const [popupPolicy, setPopupPolicy] = useState([false]);

  const [email, setEmail] = useState("");

  function validateEmail(email) {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsVailed(validateEmail(e.target.value));
  };

  return (
    <div className="bg-white" >
      <div className="mt-4 ml-4 text-2xl text-red-400" >뭄바이</div>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-2">
        <div className="">
          {state === 0 ? (
            <img src="login/reg0top.png" className="w-full" alt="" />
          ) : (
            <img src="login/reg2top.png" className="w-full" alt="" />
          )}
        </div>

        {state === 0 ? (
          <div className="flex flex-col items-center justify-center ">
            <input
              value={email}
              onChange={handleInputChange}
              type="text"
              className="w-[90%] h-8  border-b-2 border-[#F4F7F5] outline-none text-xl"
            />
            {!isVaild ? (
              <div className="m-0 w-[90%]">
                <img className="w-[30%] mt-2" src="login/email_err.png"/>
                </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center w-[90%]">
              {" "}
              {policy === true && terms === true ? (
                <img
                  src="login/agree_all_1.png"
                  onClick={() => {
                    setPolicy(false);
                    setTerms(false);
                  }}
                  alt=""
                />
              ) : (
                <img
                  src="login/agree_all.png"
                  onClick={() => {
                    setPolicy(true);
                    setTerms(true);
                  }}
                  alt=""
                />
              )}
            </div>
            <div className="flex flex-row items-center w-[90%] relative">
              <div
                className="absolute top-0 h-full left-20  w-[80%]"
                onClick={() => {setPopupPolicy(true)}}
              ></div>
              {policy === true ? (
                <img
                  src="login/agree_policy_1.png"
                  onClick={() => {
                    setPolicy(false);
                  }}
                  className=""
                  alt=""
                />
              ) : (
                <img
                  src="login/agree_policy.png"
                  onClick={() => {
                    setPolicy(true);
                  }}
                  className=""
                  alt=""
                />
              )}
            </div>
            <div className="flex flex-row items-center w-[90%] relative">
              <div
                className="absolute top-0 h-full left-20  w-[80%]"
                onClick={() => {setPopupTerms(true)}}
              ></div>
              {terms === true ? (
                <img
                  src="login/agree_terms_1.png"
                  onClick={() => {
                    setTerms(false);
                  }}
                  className=""
                  alt=""
                />
              ) : (
                <img
                  src="login/agree_terms.png"
                  onClick={() => {
                    setTerms(true);
                  }}
                  className=""
                  alt=""
                />
              )}
            </div>
          </div>
        )}

        <div className="fixed flex items-end justify-center bottom-10 md:static md:col-start-2">
          {state === 0 ? (
            isVaild ? (
              <img
                src="login/btn_next_1.png"
                onClick={() => {
                  setState(1);
                  setIsVailed(false);
                }}
                className="w-[90%]"
                alt=""
              />
            ) : (
              <img src="login/btn_next_0.png" className="w-[90%]" alt="" />
            )
          ) : (
            ""
          )}
          {state !== 0 ? (
            policy === true && terms === true ? (
              <img src="login/btn_agree.png" className="w-[90%]" alt="" onClick={()=>{props.loginTrue(email);
              //DB 아이디 업데이트
              }} />
            ) : (
              <img src="login/btn_deagree.png" className="w-[90%]" alt="" />
            )
          ) : (
            ""
          )}
        </div>
      </div>
      {popupTerms === true ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-green-100">
        <div className="mt-7">
          <div className="w-[100%] flex justify-center items-center"  onClick={()=>{setPopupTerms(false)}}>
            <img className="w-[90%]" src="login/terms_title.png" />
          </div>
        </div>
        <div className="w-[90%] h-[80%] overflow-scroll mt-7">
          <img src="login/terms_content.png" />
        </div>
      </div>
      ) : (
        ""
      )}
      {popupPolicy === true ? (
        <div className="fixed top-0 left-0 flex flex-col items-center w-screen h-screen bg-green-100">
          <div className="mt-7">
            <div className="w-[100%] flex justify-center items-center"  onClick={()=>{setPopupPolicy(false)}}>
              <img className="w-[90%]" src="login/terms_title.png" />
            </div>
          </div>
          <div className="w-[90%] h-[80%] overflow-scroll mt-7">
            <img src="login/terms_content.png" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default CRegisteration;
