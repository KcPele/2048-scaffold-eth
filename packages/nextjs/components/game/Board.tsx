"use client";

import React from "react";
import Cell from "./Cell";
import GameOverlay from "./GameOverlay";
import TilesView from "./TilesView";
import { useAccount } from "wagmi";
import { Board } from "~~/helper";
import useEvent from "~~/hooks/game/useEvent";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const BoardView = () => {
  const [board, setBoard] = React.useState(new Board());
  const [gameExist, setGameExist] = React.useState(false);
  const account = useAccount();
  const { writeAsync: createGame } = useScaffoldContractWrite({
    contractName: "Game",
    functionName: "createGame",
    args: [account.address],
  });
  const { data: gameData, refetch } = useScaffoldContractRead({
    contractName: "Game",
    functionName: "getGameData",
    args: [account.address],
  });

  const { writeAsync: endgame } = useScaffoldContractWrite({
    contractName: "Game",
    functionName: "endGame",
    args: [
      account.address,
      board.hasLost() ? 1 : 2,
      gameData?.highestScore
        ? BigInt(board.score) > gameData?.highestScore
          ? BigInt(board.score)
          : gameData?.highestScore
        : BigInt(board.score),
    ],
  });

  React.useEffect(() => {
    if (board.hasWon() || board.hasLost()) {
      endgame();
      refetch();
    }
  }, [board.hasWon(), board.hasLost()]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (board.hasWon()) {
      return;
    }

    let direction: number | null = null;

    switch (event.key) {
      case "ArrowLeft":
        direction = 0;
        break;
      case "ArrowUp":
        direction = 1;
        break;
      case "ArrowRight":
        direction = 2;
        break;
      case "ArrowDown":
        direction = 3;
        break;
    }

    if (direction !== null) {
      const boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board);
      const newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };
  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className="grid grid-cols-4 ">
        {row.map((cell, columnIndex) => {
          return <Cell key={rowIndex * board.size + columnIndex} />;
        })}
      </div>
    );
  });
  const tiles = board.tiles
    .filter(tile => tile.value !== 0)
    .map((tile, index) => {
      return <TilesView key={index} tile={tile} />;
    });
  const resetGame = async () => {
    await createGame();
    setBoard(new Board());
    refetch();
  };

  React.useEffect(() => {
    if (gameData) {
      setGameExist(true);
    }
  }, [gameData]);
  return (
    <div className=" ">
      {gameExist ? (
        <>
          <div className="max-w-[440px] mx-auto mt-6 flex justify-between items-center p-1">
            <button
              onClick={resetGame}
              className="rounded-md text-2xl text-white/50 px-5 py-2 bg-primary hover:bg-red-500 hover:text-white"
            >
              New game
            </button>
            {gameData && (
              <div>
                <span>Highest score: </span>
                <span>{gameData?.highestScore.toString()}</span>
              </div>
            )}

            <div className="flex  bg-primary text-white/50 px-5 py-2 rounded-md w-fit">
              <span className="">Score:</span>
              <span> {board.score}</span>
            </div>
          </div>
          {gameData?.player === account.address ? (
            <>
              <div className="relative rounded-md  h-[440px] mx-auto max-w-[440px] w-full">
                {cells}
                <div className="grid grid-cols-4 "> {tiles}</div>
                <GameOverlay OnRestart={resetGame} board={board} />
              </div>
              <div className="max-w-[700px] mx-auto text-center">
                <p>
                  2048 is played on a gray 4x4 grid with numbered tiles that slide smoothly when the player moves them
                  through the arrows. After each move, a new tile appears in one of the empty spaces, with value being 2
                  or 4. The tiles slide as far as possible in the specified direction until they stop in another tile or
                  edge of the grid. If two tiles of the same value collide during the movement, they will merge into one
                  tile with the sum of the sum of the two tiles that have collapsed. The resulting tile can not merge
                  with another tile during the same move.
                </p>
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-[440px] w-full text-center font-semibold">
              <p>No Game found start a new game</p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <p>loading </p>
          <p>Connect you wallet to play the game</p>
        </div>
      )}
    </div>
  );
};

export default BoardView;
