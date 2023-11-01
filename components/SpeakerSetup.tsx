import Card from "@/types/Card";
import SpeakerCard from "./SpeakerCard";
import useStore from "./store";

function SpeakerSetup() {
  const SpeakerCards: Array<Card> = useStore((state) => state.SpeakerCards);

  return (
    <div className="border-4 border-cyan-900 rounded-xl flex flex-col space-y-4 pt-2 px-4 w-1/2 overflow-y-auto justify-between">
      <div className="flex flex-col space-y-4 pt-2 px-4 w-full overflow-y-auto">
        <span className="text-3xl font-bold">Speaker Setup</span>
        {SpeakerCards.map((card) => {
          return <SpeakerCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

export default SpeakerSetup;
