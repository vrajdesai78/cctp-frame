import { USDCABI } from "@/utils/abi";
import { Contract, USDC, viemChains } from "@/utils/constants";
import { TransactionTargetResponse, getFrameMessage } from "frames.js";
import { NextRequest, NextResponse } from "next/server";
import { Abi, encodeFunctionData, parseUnits } from "viem";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();
  const source = new URL(req.url).searchParams.get(
    "source"
  ) as keyof typeof Contract;

  const frameMessage = await getFrameMessage(json);

  if (!frameMessage) {
    throw new Error("No frame message");
  }

  const contract = Contract[source];
  const usdcContract = USDC[source];
  const chainId = viemChains[source].id;

  const amt = parseUnits(frameMessage.inputText?.toString() ?? "1", 6);

  const calldata = encodeFunctionData({
    abi: USDCABI,
    functionName: "approve",
    args: [contract, amt],
  });

  return NextResponse.json({
    chainId: `eip155:${chainId}`,
    method: "eth_sendTransaction",
    params: {
      abi: USDCABI as Abi,
      to: usdcContract as `0x${string}`,
      data: calldata,
    },
  });
}
