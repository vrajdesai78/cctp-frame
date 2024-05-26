export const USDCABI = [
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export const bridgeABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_wormholeRelayer",
        type: "address",
        internalType: "address",
      },
      {
        name: "_wormhole",
        type: "address",
        internalType: "address",
      },
      {
        name: "_circleMessageTransmitter",
        type: "address",
        internalType: "address",
      },
      {
        name: "_circleTokenMessenger",
        type: "address",
        internalType: "address",
      },
      {
        name: "_USDC",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "chainIdToCCTPDomain",
    inputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quoteCrossChainDeposit",
    inputs: [
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "cost",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "receiveWormholeMessages",
    inputs: [
      {
        name: "payload",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "additionalMessages",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "sourceChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "deliveryHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "sendCrossChainDeposit",
    inputs: [
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "targetCCTPFrame",
        type: "address",
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setCCTPDomain",
    inputs: [
      {
        name: "chain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cctpDomain",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRegisteredSender",
    inputs: [
      {
        name: "sourceChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "totalAmountBridged",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalAmountReceived",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormhole",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormhole",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormholeRelayer",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormholeRelayer",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "SentUSDC",
    inputs: [
      {
        name: "targetChain",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
      {
        name: "targetCCTPFrame",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "successfullyBridgedUSDC",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;
