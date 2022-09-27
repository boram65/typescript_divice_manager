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
      <div className="border-2 border-blue-200 h-[100vh] w-[640px] flex flex-col justify-between dark:bg-[#1E1E20] dark:text-white bg-white text-gray-600">
        <header className="h-[100px] border-b-2 shadow-md flex justify-center items-center relative">
          <h1 className="text-3xl font-bold font-mono">{props.title}</h1>
          {/* 다크모드 버튼 */}
          <div
            className="text-3xl absolute right-5 cursor-pointer hover:bg-slate-200 rounded-2xl p-2"
            onClick={다크모드전환}
          >
            ☀️
          </div>
        </header>
        {/* 몸통 */}
        <div className="h-[80vh]">{props.children}</div>

        {/* 바텀뷰 */}
        <footer className="h-[100px]  border-t-2">
          <nav className="flex justify-between h-full">
            <Link href={"/"}>
              <button
                className={cls(
                  " w-full flex items-center justify-center hover:bg-blue-300",
                  router.pathname === "/" ? "bg-red-500" : ""
                )}
              >
                <div className="flex flex-col justify-center items-center">
                  <div>
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
                  </div>
                  <div>Home</div>
                </div>
              </button>
            </Link>
            <Link href={"/data"}>
              <button
                className={cls(
                  " w-full flex items-center justify-center hover:bg-blue-300",
                  router.pathname === "/data" ? "bg-red-500" : ""
                )}
              >
                <div className="flex flex-col justify-center items-center">
                  <div>
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
                  </div>
                  <div>Data</div>
                </div>
              </button>
            </Link>
            <Link href={"/setting"}>
              <button
                className={cls(
                  " w-full flex items-center justify-center hover:bg-blue-300",
                  router.pathname === "/setting" ? "bg-red-500" : ""
                )}
              >
                <div className="flex flex-col justify-center items-center">
                  <div>
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
                  </div>
                  <div>Setting</div>
                </div>
              </button>
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
