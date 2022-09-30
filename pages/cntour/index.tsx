import { Device } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import DeviceCard from "../../components/deviceCard";
import Toggle from "react-toggle";
import { CircleLoader, PacmanLoader, PuffLoader } from "react-spinners";
import { parseString } from "xml2js";

// interface Item {
//   mng_no: String;
//   local_nm: String;
//   type: String;
//   nm: String;
//   nm_sub: String;
//   addr: String;
//   lat: String;
//   lng: String;
//   tel: String;
//   h_url: String;
//   desc: String;
//   list_img: String;
// }

// interface Item_info {
//   item: Item[];
// }

// interface Result {
//   item_info: Item_info;
// }

// interface CotourListRespons {
//   name: string;
//   result?: Result;
// }

export interface CotourListRespons {
  OK: boolean;
  result: Result;
}

export interface Result {
  item_info: ItemInfo;
}

export interface ItemInfo {
  item: Item[];
}

export interface Item {
  mng_no: string;
  local_nm: string;
  type: string;
  nm: string;
  nm_sub: string;
  addr: string;
  lat: string;
  lng: string;
  tel: string;
  h_url: string;
  desc: string;
  list_img: string;
}

const CnTour: NextPage = () => {
  const [totalCnt, setTotalCnt] = useState("");
  const [tours, setTours] = useState<Item[] | undefined>([]);
  const [page, setPage] = useState(1);

  const 관광명소가져오기 = () => {
    fetch(`api/tour/cntourlist?start=${page}&end=${page + 4}`)
      .then(res => res.json())
      .then((json: CotourListRespons) => {
        const 기존배열 = tours || [];
        const 신규배열 = json.result?.item_info.item || [];

        setTours([...기존배열, ...신규배열]);

        setPage(page + 3);
      });
  };

  useEffect(() => {
    관광명소가져오기();
  }, []);

  //console.log(tours[0].local_nm);

  return (
    <Layout title={"충남 관광명소"}>
      <div className="h-full overflow-y-scroll p-6 space-y-7">
        {tours?.map((e, idx) => (
          <div key={idx}>
            <div>{e.nm}</div>
          </div>
        ))}
        <button className="btn" onClick={관광명소가져오기}>
          더보기({tours?.length}/{totalCnt}) - {page}
        </button>
      </div>
    </Layout>
  );
};

export default CnTour;
