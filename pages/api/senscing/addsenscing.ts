// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, Sencing, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import client from "../../../lids/server/client";

interface Data {
  OK: boolean;
  newSenscing?: Sencing;
  err?: String;
}

//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //405 메서트 확인
  if (req.method !== "POST") {
    //post 메서드가 아니면
    res
      .status(405)
      .json({ OK: false, err: `지원하지 않는 메서드입니다. : ${req.method}` }); //405 에러를 니오게함
    return;
  }

  const obj = JSON.parse(req.body);
  console.log(obj);
  const { targetID, senscingValue } = obj;
  console.log(targetID);
  console.log(senscingValue);

  try {
    const newSenscing = await client.sencing.create({
      data: {
        deviceId: targetID,
        value: Number(senscingValue),
      },
    });

    console.log(newSenscing);

    res.status(200).json({ OK: true });
  } catch (err) {
    res.status(200).json({ OK: false, err: `${err}` });
  }
}
