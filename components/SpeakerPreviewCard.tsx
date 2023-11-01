import Speaker from "@/types/Speaker";
import { useCallback, useState } from "react";

const SpeakerPreviewCard = ({
  addSpeaker,
}: {
  addSpeaker: (name: Speaker) => void;
}) => {
  const [name, setName] = useState("");
  const [npubPrefix, setNpubPrefix] = useState("");
  const [donationNpubPrefix, setDonationNpubPrefix] = useState("");
  const [nostrProfileToggle, setNostrProfileToggle] = useState(true);

  const hasNpubAddress = Boolean(npubPrefix || donationNpubPrefix);
  console.log("hasNpub", hasNpubAddress);
  const isDisabled = !name || !hasNpubAddress;

  const handleAddSpeaker = useCallback(() => {
    addSpeaker({
      name,
      npub: npubPrefix,
      donationNpub: donationNpubPrefix,
      imageSrc: "zap.svg",
    });
  }, [addSpeaker, name, npubPrefix, donationNpubPrefix]);

  return (
    <div className="flex flex-col p-3 text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <form className="space-y-3" action="#">
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-white"
          >
            Speakers name
          </label>
          <input
            type="text"
            id="small-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2  border border-gray-300 rounded-lg bg-red sm:text-xs focus:ring-blue-500 focus:border-blue-500 bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {nostrProfileToggle && (
          <div>
            <label
              htmlFor="small-input-2"
              className="block mb-2 text-sm font-medium text-white"
            >
              Npub prefix
            </label>
            <input
              min={1}
              type="text"
              id="small-input-2"
              value={npubPrefix}
              onChange={(e) => setNpubPrefix(e.target.value)}
              className="block w-full p-2  border border-gray-300 rounded-lg bg-red sm:text-xs focus:ring-blue-500 focus:border-blue-500 bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        )}
        {!nostrProfileToggle && (
          <div>
            <label
              htmlFor="small-input-3"
              className="block mb-2 text-sm font-medium text-white"
            >
              Donation Npub Prefix
            </label>
            <input
              min={1}
              type="text"
              id="small-input-3"
              value={donationNpubPrefix}
              onChange={(e) => setDonationNpubPrefix(e.target.value)}
              className="block w-full p-2  border border-gray-300 rounded-lg bg-red sm:text-xs focus:ring-blue-500 focus:border-blue-500 bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        )}
      </form>

      <span className="text-sm font-medium text-gray-900 dark:text-gray-300 ml-auto my-2">
        Has nostr profile
      </span>
      <label className="relative inline-flex items-center cursor-pointer ml-auto">
        <input
          type="checkbox"
          checked={nostrProfileToggle}
          className="sr-only peer"
          onChange={(e) => setNostrProfileToggle(!nostrProfileToggle)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>

      <button
        onClick={handleAddSpeaker}
        type="button"
        disabled={isDisabled}
        className="text-white mt-3 transition-all ease-in  bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5
         mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        Add Speaker
      </button>
    </div>
  );
};

export default SpeakerPreviewCard;
