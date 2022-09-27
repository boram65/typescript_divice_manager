import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";

const Setting: NextPage = () => {
  const [location, setLocation] = useState("");
  const [crobuct, setCrobuct] = useState("");
  const [unit, setUnit] = useState("");

  const 장비추가버튼 = () => {
    document.querySelector("#container_add_device")?.classList.toggle("hidden");
    setLocation("");
    setCrobuct("");
    setUnit("");
  };
  return (
    <Layout title={"SETTING"}>
      <div className="p-6">
        <div data-comment={"장비추가버튼"} className="flex justify-end mb-5">
          <button className="btn" onClick={장비추가버튼}>
            Add Device ⊕
          </button>
        </div>
        <div
          id="container_add_device"
          data-comment={"장비추가"}
          className="space-y-6 hidden"
        >
          <hr />
          <div className="text-3xl font-bold ">New Device</div>
          <div className="flex flex-col">
            <span className="mt-5">제품명 *</span>
            <input
              type={"text"}
              className="h-10 ring-2 ring-gray-600 dark:ring-white dark:text-black"
              value={crobuct}
              onChange={event => setCrobuct(event.currentTarget.value)}
              placeholder="제품명..."
            ></input>

            <span className="mt-5">location *</span>
            <input
              type={"text"}
              className="h-10 ring-2 ring-gray-600 dark:ring-white dark:text-black"
              value={location}
              onChange={event => setLocation(event.currentTarget.value)}
              placeholder="거실, 안방 ..."
            ></input>

            <span className="mt-5">unit *</span>
            <input
              type={"text"}
              className="h-10 ring-2 ring-gray-600 dark:ring-white dark:text-black"
              value={unit}
              onChange={event => setUnit(event.currentTarget.value)}
              placeholder="°C , °F ..."
            ></input>
            <button>등록</button>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Setting;