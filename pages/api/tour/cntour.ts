// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, Sencing, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import client from "../../../lids/server/client";
import { parseString } from "xml2js";

interface Data {
  OK: boolean;
  totalCnt?: Number;
  err?: String;
}

//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //405 메서트 확인

  try {
    fetch(`http://tour.chungnam.go.kr/_prog/openapi/?func=tour&mode=getCnt`)
      .then(res => res.text())
      .then(xmLStr => {
        parseString(xmLStr, { explicitArray: false }, function (err, obj) {
          console.log(obj.item_info.item.totalCnt);
          const totalCnt = obj.item_info.item.totalCnt;

          res.status(200).json({ OK: true, totalCnt });
        });
      });

    //res.status(200).json({ OK: true });
  } catch (err) {
    res.status(200).json({ OK: false, err: `${err}` });
  } finally {
    //예외가 있든 없든 실행되는 부분
    await client.$disconnect();
  }
}
