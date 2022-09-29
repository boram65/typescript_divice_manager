import { Device } from "@prisma/client";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface DeviceCardProps {
  device: Device;
}

export default function deviceCard({ device }: DeviceCardProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(`api/senscing/${device.id}`)
      .then(res => res.json())
      .then(json => {
        console.log(device.id);
        setValue(json.value);
      });
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
