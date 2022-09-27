// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../lids/server/client";

interface Data {
  OK: boolean;
  user?: User;
  err?: String;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ OK: false, err: "지원하지 않는 메서드임" });
  }

  try {
    const obj = JSON.parse(req.body);

    if (!obj.name) {
      return res.status(200).json({ OK: false, err: "이름을 입력해" });
    }

    const updateUser = await client.user.update({
      where: {
        id: req.query.id?.toString(),
      },
      data: {
        name: obj.name,
      },
    });

    res.status(200).json({ OK: true });
  } catch (err) {
    res.status(200).json({ OK: false, err: `${err}` });
  }
}
