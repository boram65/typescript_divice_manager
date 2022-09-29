// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import client from "../../../lids/server/client";

interface Data {
  OK: boolean;
  newDevice?: Device;
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
  const { product, location, type, unit, memo } = obj;
  console.log(req.body);

  if (!product)
    return res.status(500).json({ OK: false, err: "제품명이 없습니다." });
  if (!location)
    return res.status(500).json({ OK: false, err: "설치위치가 없습니다." });
  if (!type)
    return res.status(500).json({ OK: false, err: "측정단위가 없습니다." });
  if (!unit)
    return res.status(500).json({ OK: false, err: "유닛이 없습니다." });

  try {
    const newDevice = await client.device.create({
      data: {
        //두개의 키가 같으면 생략 가능
        product,
        location,
        type,
        unit,
        memo,
      },
    });

    res.status(200).json({ OK: true, newDevice });
  } catch (err) {
    res.status(200).json({ OK: false, err: `${err}` });
  }
}
