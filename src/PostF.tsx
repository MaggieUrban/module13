import React, { FC, useState, useEffect } from "react";
import { PostState } from "./PostC";

type Props = {
  title: string;
};

type Data = {
  body: string;
  id: number;
  title: string;
  userId: number;
};
export const PostF: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    requestData();
  }, []);

  useEffect(() => {
    console.log("change count", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const requestData = async () => {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Data[] = await req.json();
    // this.setState({ data: data });
    setData(data);
  };

  return (
    <div onClick={handleClick}>
      <h2>{title}</h2>
      <h3>{count}</h3>

      {data.length === 0 ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h4>{data[count].title}</h4>
          <p>{data[count].body}</p>
        </div>
      )}
    </div>
  );
};
