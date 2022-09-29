import { Device } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Data: NextPage = () => {
  const [devices, setDevice] = useState<Device[]>([]);
  const [targetID, setTargetID] = useState("");
  const [senscingValue, setSenscinValue] = useState("");

  useEffect(() => {
    fetch("api/device/all")
      .then(res => res.json())
      .then(json => setDevice(json.allDevice));
  }, []);

  const 선택ID = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetID(event.currentTarget.value);
    console.log(targetID);
  };

  const 값변경 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenscinValue(event.currentTarget.value);
    console.log(senscingValue);
  };

  const 등록버튼 = () => {
    const senscingData = { targetID, senscingValue };
    console.log(senscingData);
    if (targetID === "") {
    }
    fetch("api/senscing/addsenscing", {
      method: "POST",
      body: JSON.stringify(senscingData),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setSenscinValue("");
      });
  };

  return (
    <Layout title={"DATA"}>
      <div className="m-8">
        <div className="">
          <div className="text-4xl font-bold">Slect Device</div>
          <select
            className="h-10 mt-5 w-full ring-2 ring-gray-600 dark:ring-white dark:text-black"
            onChange={선택ID}
          >
            <option hidden>Device를 선택하세요</option>
            {devices.map((device, idx) => (
              <option key={idx} value={device.id}>
                {device.product}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4 text-xl ">{`장비ID : ${targetID}`}</div>
        <div className="text-2xl mt-8 font-bold dark:text-black">Value</div>
        <div className="flex justify-center flex-col">
          <input
            type={"text"}
            onChange={값변경}
            className="ring-2 rounded-2xl w-full h-10"
            value={senscingValue}
          ></input>
          <div></div>
          <button className="btn mt-20" onClick={등록버튼}>
            등록
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Data;
