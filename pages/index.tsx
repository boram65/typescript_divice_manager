import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Counter from "../components/Counter";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const 사용자함수 = () => {
    console.log("사용자함수 호춣");
    fetch("/api/alluser");
  };

  useEffect(() => {
    //컴포넌트가 로딩될때 한번만 실행됨
    //사용자 목록을 가져와서 atate변수에 저장
    fetch("/api/alluser")
      .then(res => res.json())
      .then(json => setUsers(json.users));
    //fetch 에 적힌 주소를 get 함
  }, []);

  return (
    <div>
      <Counter title="첫번째 카운터" />
      <button className="bg-gray-500" onClick={사용자함수}>
        사용자 함수
      </button>

      <div className="flex flex-wrap">
        {users.map(user => (
          <div key={user.id} className="border-2 m-1">
            <div className="text-2xl font-bold">{user.name}</div>
            <div className="flex">({user.age}세)</div>
            <div>{user.addres}</div>
            <div>{user.createAt.toString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
