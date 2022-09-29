import { Device } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import Layout from "../components/Layout";
import DeviceCard from "../components/deviceCard";
import Toggle from 'react-toggle'

const Home: NextPage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  useEffect(() => {
    fetch("api/device/all")
      .then(res => res.json())
      .then(json => setDevices(json.allDevice));
  });

  return (
    <Layout title={"HOME"}>
      <div className="h-full overflow-y-scroll p-6 space-y-7">
        <div id="월컴메시지" className="flex justify-between items-center">
          <div>
            <div className="text-4xl font-bold ">Hello dowon📱</div>
            <div className="text-gray-500 text-s">어서와 홈은 처음이지?</div>
          </div>
          <Link href={"/setting"}>
            <button className="btn">Add Device ⊕</button>
          </Link>
        </div>
        <div id="링크드투유" className="flex justify-between items-center">
          <div className="text-2xl">Linked to you</div>
          <div><Toggle></Toggle></div>
        </div>
        <div id="센서목록" className="flex flex-wrap justify-center">
          {devices.map((device, idx) => (
            <DeviceCard key={idx} device={device} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
