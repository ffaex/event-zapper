import React, { Dispatch, SetStateAction, use, useEffect } from "react";
import { useState } from "react";
import useStore from "./store";
import ZapProps from "@/types/ZapProps";
import ZapCard from "./ZapCard";
import { useSubscribe } from 'nostr-hooks';
import lightningPayReq from 'bolt11';
import fetchEventFromRelays from '@/lib/nostr'
import { Event, Filter } from 'nostr-tools'
import { useDebounce } from 'use-debounce';
import { insertEventIntoDescendingList } from "@/utils/insert";

function ZapList({ npub, setter }: { npub: string, setter: Dispatch<SetStateAction<number>> }) {
  const eventStart = useStore((state) => state.sessionStart);

  const [zaps, setZaps] = useState<ZapProps[]>([]);
  const [immediateEvents, setImmediateEvents] = useState<Event[]>([]);
  const [events] = useDebounce(immediateEvents, 1000);

  useEffect(() => {
    console.log(Math.floor(eventStart.getTime() / 1000));
    fetchEventFromRelays(
      {
        kinds: [9735],
        since: Math.floor(eventStart.getTime() / 1000),
        "#p": [npub],
      },
      (event: Event) => {
        console.log('received event', event);
        setImmediateEvents((prev) => insertEventIntoDescendingList([...prev], event));
      }
    )
  }, []);

  useEffect(() => {
    let zaps: ZapProps[] = [];
    events.forEach((event) => {
      const bolt11Tag = event.tags.find((tag) => tag[0] == 'bolt11')!;
      const bolt11: string = bolt11Tag[1];
      const decoded = lightningPayReq.decode(bolt11);
      const amount = decoded.satoshis;
      let description;
      try {
        description = JSON.parse(event.tags.find((tag) => tag[0] == 'description')![1]);
      } catch (error) {
        console.error('Failed to parse JSON:');
        return; // Skip this event and go to the next one
      }
      
      const senderPub = description.pubkey;
  
      const eTag = event.tags.find((tag) => tag[0] == 'e');
      if (eTag) {
        console.log('e tag found');
        return; // Skip this event and go to the next one
      }


      // if e tag then its reaction to event, if no e tag then its a zap to person
      // https://github.com/nostr-protocol/nips/blob/master/57.md

      // doesnt work for some reason
      // if (eTag) {
      //   console.log('e tag found');
      //   return <></>
      // }
      zaps.push({amount: amount!, author: senderPub});
    });
    setZaps(zaps);
  }, [events])

  // get total amount of zaps
  const totalZaps = zaps.reduce((acc, zap) => acc + zap.amount, 0);
  setter(totalZaps);
  return (

    <div className="flex flex-col space-y-2 w-full px-2 py-4 overflow-y-auto">
      {zaps.map((zap: ZapProps, index) => {
        return <ZapCard key={index} zap={zap} />
      })}
    </div>
  )
}

export default ZapList;
