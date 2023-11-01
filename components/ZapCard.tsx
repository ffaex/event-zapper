import Metadata from "@/types/Metadata";
import ZapProps from "@/types/ZapProps";
import Image from "next/image";
import { useSubscribe } from "nostr-hooks";
import useStore from "./store";

function ZapCard({ zap }: { zap: ZapProps }) {
  const relays = useStore((state) => state.relays);
  const { events } = useSubscribe({
    relays,
    filters: [
      {
        kinds: [0],
        authors: [zap.author],
      },
    ],
  });

  if (events.length === 0) {
    return <></>;
  }
  const content: Metadata = JSON.parse(events[0].content);

  return (
    <div className="flex justify-between space-x-2 items-center rounded-2xl shadow-xl px-2 py-1">
      {content && (
        <div className="flex justify-start items-center space-x-2">
          <Image
            className="rounded-full h-14 w-14"
            src={content.picture ? content.picture : "/dummy.svg"}
            alt="picture of author"
            width={100}
            height={100}
          />
          <span>{content.name}</span>
        </div>
      )}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFF00"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#FFA500"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>

        <div className="flex flex-col text-3xl items-center">
          <div>{zap.amount}</div>
          <div>Sats</div>
        </div>
      </div>
    </div>
  );
}

export default ZapCard;
