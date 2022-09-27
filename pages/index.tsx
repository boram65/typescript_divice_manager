import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"HOME"}>
      <div className="h-full overflow-y-scroll p-6 space-y-7">
        <div id="월컴메시지" className="flex justify-between items-center">
          <div>
            <div className="text-4xl font-bold">Hello dowon</div>
            <div className="text-gray-500 text-s">어서와 홈은 처음이지?</div>
          </div>
          <Link href={"/setting"}>
            <button className="btn">Add Device ⊕</button>
          </Link>
        </div>
        <div id="링크드투유" className="flex justify-between items-center">
          <div className="text-2xl">Linked to you</div>
          <div>[실시간 버튼 자리]</div>
        </div>
        <div id="센서목록" className="flex flex-wrap justify-center">
          {[1, 1, 1, 1, 1].map((device, idx) => (
            <div
              key={idx}
              className="bg-red-200 border-2 rounded-2xl w-60 h-52 p-4 flex flex-col justify-between m-5"
            >
              <div className="flex justify-end items-end">
                <span className="text-5xl">25</span>
                <span className="text-2xs">%</span>
              </div>
              <div className=" flex flex-col">
                <span className="text-2xs text-gray-500">
                  메모메모메모메모메모메모메모메모메모메모메모메모
                </span>
                <span className="text-3xl">여기는 품명</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
