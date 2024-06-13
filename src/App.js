import React from "react";
import { Showtime } from "./Showtime";
import { PostDisplay } from "./PostDisplay";

export const App = () => {
  return (
    <>
      <div>
        <div>hello world!</div>
        <Showtime />
      </div>
      <div>
        <PostDisplay />
      </div>
    </>
  );
};
