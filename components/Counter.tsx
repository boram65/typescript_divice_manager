import { useState } from "react";

let data: Number = 12345;

interface CounterProps {
  title: String | Number;
  subtitle?: String;
}

export default function count(props: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div>{props.title.toString()}</div>
      <h2>카운터 : {count}</h2>
      <button className="bg-green-400" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button className="bg-green-400 ml-2" onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}
