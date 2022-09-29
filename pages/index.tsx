import { Device } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import Layout from "../components/Layout";
import DeviceCard from "../components/deviceCard";
import Toggle from "react-toggle";
import { CircleLoader, PacmanLoader, PuffLoader } from "react-spinners";

const Home: NextPage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [bToggle, setBToggle] = useState(false);
  useEffect(() => {
    fetch("api/device/all")
      .then(res => res.json())
      .then(json => setDevices(json.allDevice));
  });

  const 토글변경 = () => {
    setBToggle(!bToggle);
    console.log(bToggle);
    if (!bToggle) {
      console.log("실시간on");
    }
    if (bToggle) {
      console.log("실시간off");
    }
  };

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
          <div className="select-none flex items-center space-x-2 ">
            <PuffLoader color="#26e80e" />
            <Toggle
              id="cheese-status"
              onChange={토글변경}
              defaultChecked={bToggle}
              // defaultChecked={this.state.cheeseIsReady}
              // onChange={this.handleCheeseChange}
            />
            <label htmlFor="cheese-status">
              실시간 <span>{bToggle ? "on" : "off"}</span>
            </label>
          </div>
        </div>
        <div id="센서목록" className="flex flex-wrap justify-center">
          {devices.map((device, idx) => (
            <DeviceCard key={idx} device={device} realTime={bToggle} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
