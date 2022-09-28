import { Device } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import Layout from "../components/Layout";

const Setting: NextPage = () => {
  const [product, setProduct] = useState(""); //품명
  const [location, setLocation] = useState(""); //설치위치
  const [type, setType] = useState(""); //측정단위
  const [unit, setUnit] = useState(""); //유닛
  const [memo, setMemo] = useState(""); // 메모
  const [errMsg, setErrMsg] = useState(""); //메러메시지
  const [allDeviceData, setAllDeviceData] = useState<Device[]>([]);

  const 장비추가버튼 = () => {
    document.querySelector("#container_add_device")?.classList.toggle("hidden");
    setLocation("");
    setProduct("");
    setUnit("");
    setMemo("");
    setErrMsg("");
  };
  //셀랙터 변경 함수
  const 장치종류변경 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.currentTarget.value);
  };

  const 장비등록 = () => {
    //입력폼에 데이터 있는지 확인
    if (!product) {
      setErrMsg("제품명을 입력하세요");
      return;
    }
    if (!location) {
      setErrMsg("설치위치를 입력하세요");
      return;
    }
    if (!type) {
      setErrMsg("측정단위를 입력하세요");
      return;
    }
    if (!unit) {
      setErrMsg("유닛을 입력하세요");
      return;
    }
    setErrMsg("");

    const data = { product, location, type, unit, memo };

    //서버로 데이터 전송 (POST 로 전송 )
    fetch("/api/device/add", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json => console.log(json));

    //전송시 입력창 초기화

    //오류가 있을시 오류 표시
  };

  useEffect(() => {
    fetch("api/device/all")
      .then(res => res.json())
      .then(json => setAllDeviceData(json.allDevice));
  }, []);

  const 디바이스삭제 = (id: String) => {
    if (!id) return;
    fetch(`api/device/delete/${id}`, { method: "DELETE" })
      .then(res => res.json)
      .then(json => console.log(json));
  };

  return (
    <Layout title={"SETTING"}>
      <div className="h-full overflow-y-scroll p-6 space-y-7">
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
              value={product}
              onChange={event => setProduct(event.currentTarget.value)}
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
            <span className="mt-5">장치종류</span>
            <select
              className="h-10 ring-2 ring-gray-600 dark:ring-white dark:text-black"
              onChange={장치종류변경}
            >
              <option hidden>장치 종류를 선택하세요</option>
              <option value="TEMP">온도센서</option>
              <option value="HUMI">습도센서</option>
              <option value="CO2">CO2센서</option>
            </select>
            <span className="mt-5">unit *</span>
            <input
              type={"text"}
              className="h-10 ring-2 ring-gray-600 dark:ring-white dark:text-black"
              value={unit}
              onChange={event => setUnit(event.currentTarget.value)}
              placeholder="°C , °F ..."
            ></input>

            <span className="mt-5">memo </span>
            <input
              type={"text"}
              className="h-10 ring-2 ring-gray-600 dark:ring-white dark:text-black"
              value={memo}
              onChange={event => setMemo(event.currentTarget.value)}
              placeholder="text..."
            ></input>
            {errMsg ? (
              <div id="err_msg" className="text-red-500 mt-2 ">
                {errMsg}
              </div>
            ) : null}

            <button
              className="bg-gradient-to-tr bg-yellow-200 from-green-500  dark:bg-red-400 dark:from-indigo-500 my-8  h-16"
              onClick={장비등록}
            >
              등록
            </button>
            <hr />
          </div>
        </div>

        <div data-comment={"장비삭제"}>
          <div>
            {allDeviceData.map((device, idx) => (
              <div key={idx} className="border-b-2 mb-4 flex justify-between">
                <div className="">
                  <div>{device.id}</div>
                  <div>{`${device.type} ${device.product} (${device.location})`}</div>
                  <div>{device.memo}</div>
                </div>
                <button
                  className="text-red-500 bg-red-200 w-12 h-12"
                  onClick={() => 디바이스삭제(device.id)}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
