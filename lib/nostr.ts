import {SimplePool} from 'nostr-tools'
import { Filter } from 'nostr-tools'
import useStore from '@/components/store';

export default async function fetchEventFromRelays(filter: Filter, onEventReceived: CallableFunction) {
    const pool = new SimplePool();

    const relays = useStore.getState().relays;

    const sub = pool.sub(relays, [filter]);
  
    sub.on('event', event => {
      // this will only be called once the first time the event is received
      onEventReceived(event);
    });
  }
  