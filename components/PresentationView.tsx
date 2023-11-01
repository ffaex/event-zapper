import { useState } from "react";
import PresentationCard from "./PresentationCard";
import useStore from "./store";
function PresentationView() {
  const Speakers = useStore((state) => state.SpeakerCards);
  // if navigating back speakers should be loaded
  const [totalAmount, setTotalAmount] = useState<{ [key: string]: number }>({});
  // sum all zaps

  const amount = Object.values(totalAmount).reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col h-full w-full">
      <div className={`flex space-x-2 flex-1 min-h-0`}>
        {Speakers.map((speaker) => (
          <PresentationCard
            key={speaker.id}
            speaker={speaker}
            setGlobal={setTotalAmount}
            globalAmount={amount}
          />
        ))}
      </div>
    </div>
  );
}

export default PresentationView;
