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
    image: (
      <div
        tw='flex flex-col h-full w-full items-center justify-center text-slate-200'
        style={{
          background:
            "radial-gradient(circle at 85.4% 50.8%, rgb(14, 72, 222) 0%, rgb(3, 22, 65) 74.2%)",
        }}
      >
        <span tw='text-6xl font-bold'>Bridge USDC</span>
        <span tw='mt-4 text-3xl font-medium'>Powered by Wormhole</span>
      </div>
    ),
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
