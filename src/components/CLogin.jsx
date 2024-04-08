/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRecoilState } from "recoil";
import { LoginState } from "../atom";

const CLogin = () => {
  const [ setIsLogin] = useRecoilState(LoginState);
  const setLoginTrue = () => {
    setIsLogin(true);
    localStorage.setItem("islogin", "true");
  };
  return (
    <section class="bg-gray-50 ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          World IT Show 2024
        </a>
        <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl "></h1>
            <form
              class="space-y-4 md:space-y-6"
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
                const pw = document.getElementById("password").value;
                console.log(pw);
                if (pw === "w2424") {
                  console.log("success");
                  setLoginTrue();
                } else {
                  console.log("fail");
                }
              }}
            >
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-[#9146FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CLogin;
