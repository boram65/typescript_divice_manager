// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../lids/server/client";

interface Data {
  OK: boolean;
  user?: User;
  err?: String;
  deletedId?: String;
}

//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    console.log(req.query);

    const deleteUser = await client.user.delete({
      where: {
        id: req.query.id?.toString(),
      },
    });
    console.log(deleteUser);

    res.status(200).json({ OK: true, deletedId: deleteUser.id });
  } catch (err) {
    res.status(200).json({ OK: false, err: `${err}` });
  } finally {
    //예외가 있든 없든 실행되는 부분
    await client.$disconnect();
  }
}
