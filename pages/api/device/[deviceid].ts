// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import client from "../../../lids/server/client";

interface Data {
  OK: boolean;

  err?: String;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //405 메서트 확인
  if (req.method !== "DELETE") {
    //post 메서드가 아니면
    res
      .status(405)
      .json({ OK: false, err: `지원하지 않는 메서드입니다. : ${req.method}` }); //405 에러를 니오게함
    return;
  }
  try {
    console.log("여기까지 들아어옴");

    res.status(200).json({ OK: true });
  } catch (err) {
    res.status(200).json({ OK: false, err: `${err}` });
  }
}
