import { bridgeABI } from "@/utils/abi";
import { Chains, Contract, viemChains } from "@/utils/constants";
import { TransactionTargetResponse, getFrameMessage } from "frames.js";
import { NextRequest, NextResponse } from "next/server";
import {
  Abi,
  createPublicClient,
  encodeFunctionData,
  getContract,
  http,
  parseUnits,
} from "viem";
import { base } from "viem/chains";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();
  const source = new URL(req.url).searchParams.get(
    "source"
  ) as keyof typeof Contract;
  const target = new URL(req.url).searchParams.get(
    "target"
  ) as keyof typeof Contract;

  const chain = viemChains[source];
  const targetChain = Chains[target];
  const bridgeContract = Contract[source];
  const targetContract = Contract[target];

  const frameMessage = await getFrameMessage(json);

  if (!frameMessage) {
    throw new Error("No frame message");
  }

  const amt = parseUnits(frameMessage.inputText?.toString() ?? "1", 6);

  console.log("amt", amt);

  const publicClient = createPublicClient({
    chain: chain,
    transport: http(),
  });

  const contract = getContract({
    address: bridgeContract as `0x${string}`,
    abi: bridgeABI,
    client: publicClient,
  });

  const cost = await contract.read.quoteCrossChainDeposit([targetChain]);

  console.log("cost", cost);

  const calldata = encodeFunctionData({
    abi: bridgeABI,
    functionName: "sendCrossChainDeposit",
    args: [
      targetChain,
      targetContract as `0x${string}`,
      frameMessage.connectedAddress as `0x${string}`,
      amt,
    ],
  });

  return NextResponse.json({
    chainId: `eip155:${base.id}`,
    method: "eth_sendTransaction",
    params: {
      abi: bridgeABI as Abi,
      to: bridgeContract as `0x${string}`,
      data: calldata,
      value: cost.toString(),
    },
  });
}
