import { farcasterHubContext } from "frames.js/middleware";
import { createFrames, Button } from "frames.js/next";

const frames = createFrames({
  middleware: [
    farcasterHubContext({
      hubHttpUrl: "https://hubs.airstack.xyz",
      hubRequestOptions: {
        headers: {
          "x-airstack-hubs": process.env.AIRSTACK_API_KEY as string,
        },
      },
    }),
  ],
});

const handleRequest = frames(async (ctx) => {
  const searchParams = new URL(ctx.url);
  const source = searchParams.searchParams.get("source");
  const target = searchParams.searchParams.get("target");

  return {
    image: "https://imgur.com/uZKMdF3.gif",
    buttons: [
      <Button
        action='post'
        target={`${process.env.HOST_URL}/frames?source=${source}&target=${target}`}
      >
        Bridge Again
      </Button>,
      <Button
        action='link'
        target={`https://wormholescan.io/#/tx/${ctx.message?.transactionId}`}
      >
        View Transaction
      </Button>,
    ],
    input: "Enter amount in USDC",
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
