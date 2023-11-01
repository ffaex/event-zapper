"use client";
import Image from "next/image";
import SpeakerPreviewCard from "./SpeakerPreviewCard";
import useStore from "./store";

function SessionSetup() {
  const numOfSpeakers = useStore((state) => state.numOfSpeakers);
  const npubPrefix = useStore((state) => state.npubPrefix);
  const setNumOfSpeakers = useStore((state) => state.setNumOfSpeakers);
  const setSpeakerCards = useStore((state) => state.setSpeakerCards);
  const setRelays = useStore((state) => state.setRelays);

  // useEffect(() => {
  //   setSpeakerCards(numOfSpeakers);
  // }, [numOfSpeakers, setSpeakerCards]);

  return (
    <div>
      <div className="flex items-center p-5 w-fit justify-center">
        <Image className="w-10" src="zap.svg" width="10" height="10" alt="" />
        <span className="font-bold md:text-6xl sm:text-4xl text-violet-600">
          Event Zapper
        </span>
      </div>
      <div className="flex flex-col w-full justify-center">
        {/* <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-white"
          >
            Number of Speakers
          </label>
          <input
            min={1}
            type="number"
            id="small-input"
            value={numOfSpeakers}
            onChange={(e) => setNumOfSpeakers(Number(e.target.value))}
            className="block w-full p-2  border border-gray-300 rounded-lg bg-red sm:text-xs focus:ring-blue-500 focus:border-blue-500 bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-2 mb-6">
          <label
            htmlFor="small-input-2"
            className="block mb-2 text-sm font-medium text-white"
          >
            Npub Prefix
          </label>
          <input
            min={1}
            type="text"
            id="small-input-2"
            value={npubPrefix}
            onChange={(e) => useStore.getState().setNpubPrefix(e.target.value)}
            className="block w-full p-2  border border-gray-300 rounded-lg bg-red sm:text-xs focus:ring-blue-500 focus:border-blue-500 bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div> */}

        <SpeakerPreviewCard speaker={3} />

        {/* <ActionBtn speakers={numOfSpeakers} /> */}

        {/* <label>
        Relays:
        <input
          className="p-2 rounded flex flex-col absolute left-2 bottom-2 max-w-[33%] items-center"
          type="text"
          value={relays}
          onChange={(e) => setRelays(e.target.value.split(","))}
        />
      </label> */}
        <label className="flex flex-col absolute left-2 bottom-9 max-w-[33%] items-center text-white">
          <a
            href="https://github.com/owen1917/event-zapper#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>⚙️ Relays</button>
          </a>
        </label>
        <label className="flex flex-col absolute left-2 bottom-2 max-w-[33%] items-center text-white">
          <a
            href="https://github.com/owen1917/event-zapper#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>💡 Help</button>
          </a>
        </label>
      </div>
    </div>
  );
}

export default SessionSetup;
