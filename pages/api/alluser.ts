// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lids/server/client";

interface ResponseDataType {
  name: String;
  users: User[];
}
//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  try {
    const users = await client.user.findMany();
    console.log(users);
    res.status(200).json({ name: "okokok", users });
  } catch (err) {
  } finally {
    //예외가 있든 없든 실행되는 부분
    await client.$disconnect();
  }
}
