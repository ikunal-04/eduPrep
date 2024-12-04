import { ethers } from 'ethers';

// export const contractAddress = "0xde38c4546010EC9d3571Ac280f39E60F9048cDF0";

// export const contractABI = [
//   {
//     "type": "function",
//     "name": "ORACLE_KEY",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "string",
//         "internalType": "string"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "balances",
//     "inputs": [
//       {
//         "name": "",
//         "type": "address",
//         "internalType": "address"
//       }
//     ],
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256",
//         "internalType": "uint256"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "buyOrders",
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint256",
//         "internalType": "uint256"
//       }
//     ],
//     "outputs": [
//       {
//         "name": "trader",
//         "type": "address",
//         "internalType": "address"
//       },
//       {
//         "name": "price",
//         "type": "uint256",
//         "internalType": "uint256"
//       },
//       {
//         "name": "amount",
//         "type": "uint256",
//         "internalType": "uint256"
//       },
//       {
//         "name": "isBuyOrder",
//         "type": "bool",
//         "internalType": "bool"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "depositFunds",
//     "inputs": [],
//     "outputs": [],
//     "stateMutability": "payable"
//   },
//   {
//     "type": "function",
//     "name": "executeOrder",
//     "inputs": [
//       {
//         "name": "orderIndex",
//         "type": "uint256",
//         "internalType": "uint256"
//       },
//       {
//         "name": "isBuyOrder",
//         "type": "bool",
//         "internalType": "bool"
//       }
//     ],
//     "outputs": [],
//     "stateMutability": "nonpayable"
//   },
//   {
//     "type": "function",
//     "name": "getBuyOrders",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "tuple[]",
//         "internalType": "struct PerpetualDEX.Order[]",
//         "components": [
//           {
//             "name": "trader",
//             "type": "address",
//             "internalType": "address"
//           },
//           {
//             "name": "price",
//             "type": "uint256",
//             "internalType": "uint256"
//           },
//           {
//             "name": "amount",
//             "type": "uint256",
//             "internalType": "uint256"
//           },
//           {
//             "name": "isBuyOrder",
//             "type": "bool",
//             "internalType": "bool"
//           }
//         ]
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "getSellOrders",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "tuple[]",
//         "internalType": "struct PerpetualDEX.Order[]",
//         "components": [
//           {
//             "name": "trader",
//             "type": "address",
//             "internalType": "address"
//           },
//           {
//             "name": "price",
//             "type": "uint256",
//             "internalType": "uint256"
//           },
//           {
//             "name": "amount",
//             "type": "uint256",
//             "internalType": "uint256"
//           },
//           {
//             "name": "isBuyOrder",
//             "type": "bool",
//             "internalType": "bool"
//           }
//         ]
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "latestPrice",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint128",
//         "internalType": "uint128"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "placeOrder",
//     "inputs": [
//       {
//         "name": "isBuyOrder",
//         "type": "bool",
//         "internalType": "bool"
//       },
//       {
//         "name": "price",
//         "type": "uint256",
//         "internalType": "uint256"
//       },
//       {
//         "name": "amount",
//         "type": "uint256",
//         "internalType": "uint256"
//       }
//     ],
//     "outputs": [],
//     "stateMutability": "nonpayable"
//   },
//   {
//     "type": "function",
//     "name": "sellOrders",
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint256",
//         "internalType": "uint256"
//       }
//     ],
//     "outputs": [
//       {
//         "name": "trader",
//         "type": "address",
//         "internalType": "address"
//       },
//       {
//         "name": "price",
//         "type": "uint256",
//         "internalType": "uint256"
//       },
//       {
//         "name": "amount",
//         "type": "uint256",
//         "internalType": "uint256"
//       },
//       {
//         "name": "isBuyOrder",
//         "type": "bool",
//         "internalType": "bool"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "timestampOfLatestPrice",
//     "inputs": [],
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint128",
//         "internalType": "uint128"
//       }
//     ],
//     "stateMutability": "view"
//   },
//   {
//     "type": "function",
//     "name": "updatePrice",
//     "inputs": [],
//     "outputs": [],
//     "stateMutability": "nonpayable"
//   },
//   {
//     "type": "function",
//     "name": "withdrawFunds",
//     "inputs": [
//       {
//         "name": "amount",
//         "type": "uint256",
//         "internalType": "uint256"
//       }
//     ],
//     "outputs": [],
//     "stateMutability": "nonpayable"
//   },
//   {
//     "type": "event",
//     "name": "FundsDeposited",
//     "inputs": [
//       {
//         "name": "user",
//         "type": "address",
//         "indexed": true,
//         "internalType": "address"
//       },
//       {
//         "name": "amount",
//         "type": "uint256",
//         "indexed": false,
//         "internalType": "uint256"
//       }
//     ],
//     "anonymous": false
//   },
//   {
//     "type": "event",
//     "name": "FundsWithdrawn",
//     "inputs": [
//       {
//         "name": "user",
//         "type": "address",
//         "indexed": true,
//         "internalType": "address"
//       },
//       {
//         "name": "amount",
//         "type": "uint256",
//         "indexed": false,
//         "internalType": "uint256"
//       }
//     ],
//     "anonymous": false
//   },
//   {
//     "type": "event",
//     "name": "OrderExecuted",
//     "inputs": [
//       {
//         "name": "trader",
//         "type": "address",
//         "indexed": true,
//         "internalType": "address"
//       },
//       {
//         "name": "isBuyOrder",
//         "type": "bool",
//         "indexed": false,
//         "internalType": "bool"
//       },
//       {
//         "name": "price",
//         "type": "uint256",
//         "indexed": false,
//         "internalType": "uint256"
//       },
//       {
//         "name": "amount",
//         "type": "uint256",
//         "indexed": false,
//         "internalType": "uint256"
//       }
//     ],
//     "anonymous": false
//   },
//   {
//     "type": "event",
//     "name": "OrderPlaced",
//     "inputs": [
//       {
//         "name": "trader",
//         "type": "address",
//         "indexed": true,
//         "internalType": "address"
//       },
//       {
//         "name": "isBuyOrder",
//         "type": "bool",
//         "indexed": false,
//         "internalType": "bool"
//       },
//       {
//         "name": "price",
//         "type": "uint256",
//         "indexed": false,
//         "internalType": "uint256"
//       },
//       {
//         "name": "amount",
//         "type": "uint256",
//         "indexed": false,
//         "internalType": "uint256"
//       }
//     ],
//     "anonymous": false
//   }
// ];

export const contractAddress = "0x445575639d0c3a3c27D766cB283B484a57D2bE4B";

export const contractABI = [
  {
    "type": "function",
    "name": "ORACLE_KEY",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "balances",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "buyOrders",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "trader",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "price",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "isBuyOrder",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "depositFunds",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "executeOrder",
    "inputs": [
      {
        "name": "orderIndex",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "isBuyOrder",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getBuyOrders",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct PerpetualDEX.Order[]",
        "components": [
          {
            "name": "trader",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "price",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isBuyOrder",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSellOrders",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct PerpetualDEX.Order[]",
        "components": [
          {
            "name": "trader",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "price",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "isBuyOrder",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "latestPrice",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "placeOrder",
    "inputs": [
      {
        "name": "isBuyOrder",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "price",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sellOrders",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "trader",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "price",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "isBuyOrder",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "timestampOfLatestPrice",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updatePrice",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawFunds",
    "inputs": [
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "FundsDeposited",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FundsWithdrawn",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OrderExecuted",
    "inputs": [
      {
        "name": "trader",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "isBuyOrder",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "price",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OrderPlaced",
    "inputs": [
      {
        "name": "trader",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "isBuyOrder",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "price",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  }
]

export async function getEthereumContract() {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const ethereum = window.ethereum as unknown as ethers.Eip1193Provider;
    await window.ethereum?.request?.({ method: 'eth_requestAccounts' });
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
  }
  return null;
}
