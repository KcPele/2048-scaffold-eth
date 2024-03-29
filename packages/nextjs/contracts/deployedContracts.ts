/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    Game: {
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player",
              type: "address",
            },
          ],
          name: "GameCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum Game.GameStatus",
              name: "status",
              type: "uint8",
            },
          ],
          name: "GameEnded",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_player",
              type: "address",
            },
          ],
          name: "createGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_player",
              type: "address",
            },
            {
              internalType: "enum Game.GameStatus",
              name: "_status",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "_score",
              type: "uint256",
            },
          ],
          name: "endGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "gameCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "games",
          outputs: [
            {
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              internalType: "enum Game.GameStatus",
              name: "status",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "highestScore",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_player",
              type: "address",
            },
          ],
          name: "getGameData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "gameId",
                  type: "uint256",
                },
                {
                  internalType: "enum Game.GameStatus",
                  name: "status",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "highestScore",
                  type: "uint256",
                },
              ],
              internalType: "struct Game.gameData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  11155111: {
    Game: {
      address: "0xECE25f7ecc077f7Dd398F3Ac7fb781957f1bbCB9",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "player",
              type: "address",
            },
          ],
          name: "GameCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum Game.GameStatus",
              name: "status",
              type: "uint8",
            },
          ],
          name: "GameEnded",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_player",
              type: "address",
            },
          ],
          name: "createGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_player",
              type: "address",
            },
            {
              internalType: "enum Game.GameStatus",
              name: "_status",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "_score",
              type: "uint256",
            },
          ],
          name: "endGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "gameCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "games",
          outputs: [
            {
              internalType: "uint256",
              name: "gameId",
              type: "uint256",
            },
            {
              internalType: "enum Game.GameStatus",
              name: "status",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "highestScore",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_player",
              type: "address",
            },
          ],
          name: "getGameData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "gameId",
                  type: "uint256",
                },
                {
                  internalType: "enum Game.GameStatus",
                  name: "status",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "highestScore",
                  type: "uint256",
                },
              ],
              internalType: "struct Game.gameData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
