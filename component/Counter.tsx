import { useState } from "react";

let data: Number = 12345;

interface CounterProps {
  title: String | Number;
  subtitle?: String;
}

export default function count(props: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{props.title.toString()}</div>
      <h2>카운터 : {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
