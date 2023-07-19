import {create} from 'zustand';
import Card from "@/types/Card";

interface State {
  totalZaps: number[],
  npubPrefix: string,
  relays: string[],
  SpeakerCards: Card[],
  numOfSpeakers: number,
  bgColour: string,
  textColour: string,
  speakerColour: string,
  sessionStart: Date,
  QRCodeSize: string,
  imgSize: string,
  setTotalZaps: (zaps: number[]) => void,
  setImgSize: (size: string) => void,
  setNpubPrefix: (prefix: string) => void,
  setQRCodeSize: (size: string) => void,
  setRelays: (relays: string[]) => void,
  setNumOfSpeakers: (num: number) => void,
  setBgColour: (colour: string) => void,
  setTextColour: (colour: string) => void,
  setSpeakerColour: (colour: string) => void,
  // addSpeakerCard: (card: Card) => void,
  // removeSpeakerCard: (cardID: number) => void,
  modifySpeakerCard: (card: Card) => void,
  // clearSpeakerCards: () => void,
  setSpeakerCards: (cards: number) => void,
  setSessionStart: (date: Date) => void,
  //setSpeakerCards: (cards: Card[]) => void,
}
const useStore = create<State>(set => ({
  totalZaps: [0],
  imgSize: '10',
  npubPrefix: 'nostr:',
  QRCodeSize: '33',
  SpeakerCards: [],
  numOfSpeakers: 1,
  bgColour: "#eeeeec",
  textColour: "#000000",
  speakerColour: "#000000",
  relays: ['wss://relay.damus.io', 'wss://nos.lol'],
  sessionStart : new Date(Date.now()),
  setTotalZaps: (zaps: number[]) => set(() => ({ totalZaps: zaps })),
  setImgSize: (size: string) => set(() => ({ imgSize: size })),
  setNpubPrefix: (prefix: string) => set(() => ({ npubPrefix: prefix })),
  setQRCodeSize: (size: string) => set(() => ({ QRCodeSize: size })),
  setRelays: (relays: string[]) => set(() => ({ relays: relays })),
  setNumOfSpeakers: (num: number) => set(() => ({ numOfSpeakers: num })),
  setBgColour: (colour: string) => set(() => ({ bgColour: colour })),
  setTextColour: (colour: string) => set(() => ({ textColour: colour })),
  setSpeakerColour: (colour: string) => set(() => ({ speakerColour: colour })),
  modifySpeakerCard: (card: Card) => set((state:State) => ({ SpeakerCards: state.SpeakerCards.map((item) => item.id === card.id ? card : item) })),  // clearSpeakerCards: () => set(() => ({ SpeakerCards: [] })),
  setSpeakerCards: (newCount) => set((state) => {
    let newCards = [...state.SpeakerCards];

    while (newCards.length < newCount) {
      newCards.push({ id: newCards.length + 1, imageSrc: "/dummy.svg", donationNpub:'', npub:''});
    }

    while (newCards.length > newCount) {
      newCards.pop();
    }

    return { SpeakerCards: newCards };
  }),

  setSessionStart: (date) => set(() => ({ sessionStart: date })),
  //setSpeakerCards: (cards) => set(() => ({ SpeakerCards: cards })),
}));

export default useStore;
