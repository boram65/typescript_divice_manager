// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lids/server/client";

interface Data {
  OK: boolean;
  user?: User;
}

//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const newUser = await client.user.create({
      data: { name: "메끄쪼", age: 25, addres: "아크라시아" },
    });

    res.status(200).json({ OK: true, user: newUser });
  } catch (err) {
    res.status(200).json({ OK: false });
  }
}
