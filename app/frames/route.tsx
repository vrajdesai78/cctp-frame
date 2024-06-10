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
    image: "https://imgur.com/6V1bie1.png",
    buttons: [
      <Button
        action='tx'
        target={`${process.env.HOST_URL}/bridge/tx?source=${source}&target=${target}`}
        post_url={`${process.env.HOST_URL}/bridge/tx-success?source=${source}&target=${target}`}
      >
        Bridge USDC
      </Button>,
      <Button
        action='tx'
        target={`${process.env.HOST_URL}/approve/tx?source=${source}&target=${target}`}
        post_url={`${process.env.HOST_URL}/approve/tx-success?source=${source}&target=${target}`}
      >
        Approve USDC
      </Button>,
    ],
    textInput: "Enter amount in USDC",
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
