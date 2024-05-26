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
  return {
    image: (
      <div
        tw='flex flex-col h-full w-full items-center justify-center text-slate-200'
        style={{
          background:
            "radial-gradient(circle at 85.4% 50.8%, rgb(14, 72, 222) 0%, rgb(3, 22, 65) 74.2%)",
        }}
      >
        <span tw='text-5xl font-bold text-slate-200'>
          Approved Successfully
        </span>
      </div>
    ),
    buttons: [
      <Button
        action='tx'
        target={`${process.env.HOST_URL}/bridge/tx`}
        post_url={`${process.env.HOST_URL}/bridge/tx-success`}
      >
        Bridge USDC
      </Button>,
    ],
    input: "Enter amount in USDC",
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
