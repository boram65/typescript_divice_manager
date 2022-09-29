// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import client from "../../../lids/server/client";

interface Data {
  OK: boolean;
  id?: String;
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
    const { deviceid } = req.query;

    const deleteDevice = await client.device.delete({
      where: {
        id: deviceid?.toString(),
      },
    });

    res.status(200).json({ OK: true, id: `${deviceid}` });
  } catch (err) {
    res.status(200).json({ OK: false, err: `${err}` });
  } finally {
    //예외가 있든 없든 실행되는 부분
    await client.$disconnect();
  }
}
