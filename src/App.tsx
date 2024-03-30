import React from "react";
import { PostC, Test } from "./PostC";
import { PostF } from "./PostF";

export const App = () => {
  return (
    <div>
      <PostC title={"Post [Class Component]"} />
      <PostF title={"Post [Function Component]"} />
    </div>
  );
};
