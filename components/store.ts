import Card from "@/types/Card";
import { create } from "zustand";

interface State {
  totalZaps: number[];
  npubPrefix: string;
  relays: string[];
  SpeakerCards: Card[];
  numOfSpeakers: number;
  bgColour: string;
  textColour: string;
  speakerColour: string;
  sessionStart: Date;
  QRCodeSize: string;
  imgSize: string;
  setTotalZaps: (zaps: number[]) => void;
  setImgSize: (size: string) => void;
  setNpubPrefix: (prefix: string) => void;
  setQRCodeSize: (size: string) => void;
  setRelays: (relays: string[]) => void;
  setNumOfSpeakers: (num: number) => void;
  setBgColour: (colour: string) => void;
  setTextColour: (colour: string) => void;
  setSpeakerColour: (colour: string) => void;
  // addSpeakerCard: (card: Card) => void,
  removeSpeakerCard: (cardID: number) => void;
  modifySpeakerCard: (card: Card) => void;
  // clearSpeakerCards: () => void,
  setSpeakerCards: (cards: Card) => void;
  setSessionStart: (date: Date) => void;
  //setSpeakerCards: (cards: Card[]) => void,
}
const useStore = create<State>((set) => ({
  totalZaps: [0],
  imgSize: "10",
  npubPrefix: "nostr:",
  QRCodeSize: "33",
  SpeakerCards: [],
  numOfSpeakers: 1,
  bgColour: "#0a0a0a",
  textColour: "#a855f7",
  speakerColour: "#a855f7",
  relays: ["wss://relay.damus.io", "wss://nos.lol"],
  sessionStart: new Date(Date.now()),
  setTotalZaps: (zaps: number[]) => set(() => ({ totalZaps: zaps })),
  setImgSize: (size: string) => set(() => ({ imgSize: size })),
  setNpubPrefix: (prefix: string) => set(() => ({ npubPrefix: prefix })),
  setQRCodeSize: (size: string) => set(() => ({ QRCodeSize: size })),
  setRelays: (relays: string[]) => set(() => ({ relays: relays })),
  setNumOfSpeakers: (num: number) => set(() => ({ numOfSpeakers: num })),
  setBgColour: (colour: string) => set(() => ({ bgColour: colour })),
  setTextColour: (colour: string) => set(() => ({ textColour: colour })),
  setSpeakerColour: (colour: string) => set(() => ({ speakerColour: colour })),
  modifySpeakerCard: (card: Card) =>
    set((state: State) => ({
      SpeakerCards: state.SpeakerCards.map((item) =>
        item.id === card.id ? card : item
      ),
    })), // clearSpeakerCards: () => set(() => ({ SpeakerCards: [] })),
  setSpeakerCards: (newCard: Card) =>
    set((state) => {
      let newCards = [...state.SpeakerCards];

      newCards.push(newCard);

      return { SpeakerCards: newCards };
    }),

  setSessionStart: (date) => set(() => ({ sessionStart: date })),
  removeSpeakerCard: (cardID: number) => {
    // take existing speaker cards and remove the item that matches the cardID
    set((state) => {
      let cards = [...state.SpeakerCards];

      cards = cards.filter((card) => card.id !== cardID);

      return { SpeakerCards: cards };
    });
  },
  //setSpeakerCards: (cards) => set(() => ({ SpeakerCards: cards })),
}));

export default useStore;
