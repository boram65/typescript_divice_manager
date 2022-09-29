import { Device } from "@prisma/client";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface DeviceCardProps {
  device: Device;
  realTime: boolean;
}

export default function DeviceCard({ device, realTime }: DeviceCardProps) {
  const [value, setValue] = useState(0);
  const [timerID, setTimerID] = useState<NodeJS.Timer>();

  const dataUpdate = () => {
    fetch(`api/senscing/${device.id}`)
      .then(res => res.json())
      .then(json => {
        setValue(json.value);
      });
  };

  useEffect(() => {
    console.log(`${device.id} - ${realTime}`);

    if (realTime) {
      const temptimerID = setInterval(() => {
        dataUpdate();
        console.log("ㅎㅎ실시간임");
      }, 5000);
      setTimerID(temptimerID);
    } else {
      clearInterval(timerID);
    }
  }, [realTime]);

  useEffect(() => {
    dataUpdate();
  }, []);

  return (
    <div className="device_itme">
      <div className="flex justify-end items-end">
        <span className="text-5xl text-gray-50 ">{value ? value : "--"}</span>
        <span className="text-2xs text-gray-50">{device.unit}</span>
      </div>
      <div className=" flex flex-col">
        <span className="text-xs text-gray-200">{device.memo}</span>
        <span className="text-3xl text-gray-50">{device.product}</span>
      </div>
    </div>
  );
}
