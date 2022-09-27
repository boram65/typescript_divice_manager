import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Counter from "../components/Counter";
import { useEffect, useReducer, useState } from "react";
import { User } from "@prisma/client";
import Router, { useRouter } from "next/router";
import { json } from "stream/consumers";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();
  const [rename, setRename] = useState("");

  const 사용자함수 = () => {
    console.log("사용자함수 호출");
    fetch("/api/adduser")
      .then(res => res.json())
      .then(json => {
        setUsers([...users, json.user]);
        //users.push(json.user);
      });
  };

  const 사용자삭제 = (targetId: String) => {
    console.log(targetId);

    fetch(`/api/user/delete/${targetId}`)
      .then(res => res.json())
      .then(json => {
        const filterUser = users.filter(user => user.id !== json.deletedId);
        setUsers(filterUser);
        console.log("여기서 삭제");
        console.log(json.deletedId);
      });
  };
  const 이름변경 = (targetId: String) => {
    //console.log(`${targetId} 를 ${rename}으로 변경`);
    if (!rename) rename;

    const data = { name: rename };

    fetch(`/api/user/update/${targetId}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
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
            <div>
              <input
                type={"text"}
                className="border"
                value={rename}
                onChange={e => setRename(e.currentTarget.value)}
              ></input>
              <button
                className="bg-blue-200 px-1 rounded"
                onClick={() => 이름변경(user.id)}
              >
                수정
              </button>

              <button
                className="bg-red-300"
                onClick={() => 사용자삭제(user.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
