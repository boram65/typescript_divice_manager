// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Device, Sencing, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import client from "../../../lids/server/client";
import { parseString } from "xml2js";
import { stat } from "fs";

interface Data {
  OK: boolean;
  result?: Number;
  err?: String;
}

//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //405 메서트 확인

  let { start, end } = req.query;

  if (!start) {
    start = "1";
    end = "5";
  } else {
    if (!end) {
      end = (Number(start) + 4).toString();
    }
  }

  if (Number(start) + 4 < Number(end)) end = (Number(start) + 4).toString();

  console.log(start);
  console.log(end);

  try {
    fetch(
      `http://tour.chungnam.go.kr/_prog/openapi/?func=tour&start=${start}&end=${end}`
    )
      .then(res => res.text())
      .then(xmLStr => {
        parseString(xmLStr, { explicitArray: false }, function (err, obj) {
          console.log(obj);
          const result = obj;

          res.status(200).json({ OK: true, result });
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
