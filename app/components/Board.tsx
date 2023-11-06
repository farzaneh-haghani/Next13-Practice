"use client";

import { useEffect, useState } from "react";
import { ConnectFour } from "./connect4";

const c4 = new ConnectFour([
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, "r", null, null, null],
  [null, null, "r", "y", null, null, null],
  [null, "r", "y", "y", null, null, null],
  ["r", "y", "y", "y", null, null, null],
]);

const Board = () => {
  const [grid, setGrid] = useState(c4._grid);
  const [current, setCurrent] = useState("r");
  const [change, setChange] = useState(false);
  // const [player, setPlayer] = useState(true);
  // const [colour, setColour] = useState("r");

  // const test = (e) => {
  //   setId(e.target.getAttribute("data-id"));
  //   setPlayer(!player);
  //   console.log(e.target.getAttribute("data-id"));
  // };
  console.log(grid);

  const clickHandler = (index2) => {
    c4.playMove(current, index2 + 1);
    console.log(index2 + 1);
    setGrid(c4._grid);
    setChange(!change);
  };

  useEffect(() => {
    setGrid(c4._grid);
  }, [change]);

  return (
    <>
      <h1>Connect Four</h1>
      <div>
        {grid.map((value, index1) => {
          return (
            <div
              key={index1}
              className="flex justify-center flex-row bg-blue-600 flex-nowrap"
            >
              {value.map((cell, index2) => {
                return (
                  <>
                    <span
                      className={`p-3 ${
                        cell === "y"
                          ? "bg-yellow-400"
                          : cell === "r"
                          ? "bg-red-700"
                          : "bg-white"
                      } rounded-[50%] m-3`}
                      key={`${6 - index1}-${index2 + 1}`}
                      data-id={`${6 - index1}-${index2 + 1}`}
                      onClick={() => clickHandler(index2)}
                    ></span>
                    <span></span>
                  </>
                );
              })}
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Board;
