import { arbitrum, avalanche, base, optimism } from "viem/chains";

export const baseUSDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
export const arbitrumUSDC = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831";
export const optimismUSDC = "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85";

export const avalancheContract = "0x1114B36e4757F5100b082B9cB576bB8FA112a0d7";
export const arbitrumContract = "0x1114B36e4757F5100b082B9cB576bB8FA112a0d7";
export const optimismContract = "0xbF7A50B8cCB775F3c54386623dFC47CC940B8207";
export const baseContract = "0x94978ea58eBfe46301A5Fa9521819c7090f01f40";

export const Contract = {
  base: "0x94978ea58eBfe46301A5Fa9521819c7090f01f40",
  arbitrum: "0x1114B36e4757F5100b082B9cB576bB8FA112a0d7",
  optimism: "0xbF7A50B8cCB775F3c54386623dFC47CC940B8207",
  avalanche: "0x1114B36e4757F5100b082B9cB576bB8FA112a0d7",
};

export const USDC = {
  base: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  arbitrum: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  optimism: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
  avalanche: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
};

export const Chains = {
  base: 30,
  arbitrum: 23,
  optimism: 24,
  avalanche: 6,
};

export const viemChains = {
  base: base,
  arbitrum: arbitrum,
  optimism: optimism,
  avalanche: avalanche,
};
