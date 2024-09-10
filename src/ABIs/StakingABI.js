const StakingABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftOwnerAddress",
        type: "address",
      },
    ],
    name: "adminGalUstake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftOwnerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
    ],
    name: "adminUnstake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
    ],
    name: "claimRewardAndUnstake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_durationInDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxNFTLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxWalletLimit",
        type: "uint256",
      },
    ],
    name: "editStaking",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
    ],
    name: "emergencyUnstake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_durationInDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxNFTLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxWalletLimit",
        type: "uint256",
      },
    ],
    name: "initializeStaking",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_NeanderBros",
        type: "address",
      },
      {
        internalType: "contract IERC721",
        name: "_NeanderGals",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_claimedAmount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalReward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_durationInDays",
        type: "uint256",
      },
    ],
    name: "EditStaking",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "stakingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "durationInDays",
        type: "uint256",
      },
    ],
    name: "NewStakingInitialization",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_nftId",
        type: "uint256[]",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "stakeNeanderGal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "StakeNeanderGal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isPaused",
        type: "bool",
      },
    ],
    name: "StakingPaused",
    type: "event",
  },
  {
    inputs: [],
    name: "toggleStakingStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "unstakeNeanderGal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "UnstakeNeanderGal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawExtraMatic",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [],
    name: "allStakingExceptActive",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakingId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakingStartTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakingEndTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakingTotalReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxNFTLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxWalletLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardPerNFTPerDay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numberOfNFTsStaked",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numberOfStakers",
            type: "uint256",
          },
        ],
        internalType: "struct NeanderBrosStaking.stakingInformation[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
    ],
    name: "claimableReward",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "currentStakingDay",
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
    inputs: [],
    name: "currentStakingId",
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
    name: "hasStakedNeanderGal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isStakingPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "neanderBros",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "neanderGals",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
    ],
    name: "remainingReward",
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
    name: "stakedNeanderGalId",
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
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
    ],
    name: "stakerDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakingId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "stakerAddress",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "quantityOfNFTs",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "dayWhenStaked",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "stakedNFTsId",
            type: "uint256[]",
          },
          {
            internalType: "bool",
            name: "stakingStatus",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "claimStatus",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "claimedAmount",
            type: "uint256",
          },
        ],
        internalType: "struct NeanderBrosStaking.stakerInformation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakingId",
        type: "uint256",
      },
    ],
    name: "stakingDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakingId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakingStartTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakingEndTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakingTotalReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxNFTLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxWalletLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardPerNFTPerDay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numberOfNFTsStaked",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numberOfStakers",
            type: "uint256",
          },
        ],
        internalType: "struct NeanderBrosStaking.stakingInformation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default StakingABI;
