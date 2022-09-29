// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import client from "../../../lids/server/client";

interface Data {
  OK: boolean;
  value?: number;
  err?: String;
}

//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //405 메서트 확인
  if (req.method !== "GET") {
    //post 메서드가 아니면
    res
      .status(405)
      .json({ OK: false, err: `지원하지 않는 메서드입니다. : ${req.method}` }); //405 에러를 니오게함
    return;
  }

  const { deviceid } = req.query;
  if (!deviceid) {
    return res
      .status(200)
      .json({ OK: false, err: `장치아이디를 입력해주세요` });
  }

  try {
    const result = await client.sencing.findFirst({
      where: {
        //필터링기능
        deviceId: deviceid.toString(),
      },
      select: {
        //필요한 값만 가져오기
        value: true,
      },
      orderBy: {
        //db데이터중 오름차순
        createAt: "desc",
      },
    });

    res.status(200).json({ OK: true, value: result?.value });
  } catch (err) {
    res.status(200).json({ OK: false, err: `${err}` });
  }
}
