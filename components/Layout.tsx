import type { NextPage } from "next";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { title } from "process";
import { useReducer } from "react";
import { cls } from "../lids/client/utils";

interface LayoutProps {
  title: String;
  children: React.ReactNode;
}

export default function layout(props: LayoutProps) {
  const router = useRouter();
  console.log(router);

  const 다크모드전환 = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex justify-center ">
      <div className="pro_bg">
        <header className="h-[100px] border-b-2 shadow-md flex justify-center items-center relative">
          <h1 className="text-3xl font-bold font-mono">{props.title}</h1>
          {/* 다크모드 버튼 */}
          <div
            className="text-3xl absolute right-5 cursor-pointer hover:shadow-inner shadow-black dark:shadow-white rounded-2xl p-2"
            onClick={다크모드전환}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        </header>
        {/* 몸통 */}
        <div className="h-[80vh]">{props.children}</div>

        {/* 바텀뷰 */}
        <footer className="h-[100px]  border-t-2">
          <nav className="flex justify-between h-full ">
            <Link href={"/"}>
              <button className=" w-full flex items-center justify-center dark:hover:shadow-xl dark:hover:shadow-gray-200  py-2">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className={cls(
                      router.pathname === "/"
                        ? "border-2 rounded-2xl px-3 shadow-xl"
                        : ""
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    <div>Home</div>
                  </div>
                </div>
              </button>
            </Link>
            <Link href={"/data"}>
              <button className=" w-full flex items-center justify-center  dark:hover:shadow-xl dark:hover:shadow-gray-200 py-2">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className={cls(
                      router.pathname === "/data"
                        ? "border-2 rounded-2xl px-3 shadow-xl"
                        : ""
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                    <div>Data</div>
                  </div>
                </div>
              </button>
            </Link>
            <Link href={"/setting"}>
              <button className=" w-full flex items-center justify-center dark:hover:shadow-xl dark:hover:shadow-gray-200  py-2">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className={cls(
                      router.pathname === "/setting"
                        ? "border-2 rounded-2xl px-3 shadow-xl"
                        : ""
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                      />
                    </svg>
                    <div>Setting</div>
                  </div>
                </div>
              </button>
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
