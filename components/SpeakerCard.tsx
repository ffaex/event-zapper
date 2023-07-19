import React, { ChangeEvent, use, useRef } from 'react'
import fetchEventFromRelays from '@/lib/nostr'
import { useState } from 'react'
import { useEffect } from 'react'
import { Event, Filter } from 'nostr-tools'
import useStore from './store'
import Card from '@/types/Card'
import { nip19 } from 'nostr-tools'

function SpeakerCard({card} : {card: Card}) {
    const [npub, setNpub] = useState(card.npub)
    const [donationNpub, setDonationNpub] = useState(card.donationNpub)
    const [imageSrc, setImageSrc] = useState(card.imageSrc)
    const [name, setName] = useState(card.name)
    const fileInput = useRef<HTMLInputElement>(null);

    const modifySpeakerCard = useStore(state => state.modifySpeakerCard);


    
    // TODO make prettier with callback
    const handleNpub = (e: any) => {
        console.log(`handleNpub: ${e.target.value}`)        
        setNpub(e.target.value)
    }
    const handleDonationNpub = (e: any) => {
        setDonationNpub(e.target.value)
    }

    useEffect(() => {
        // remove npub: if it exists
        let decoded_npub;
        try {
            decoded_npub = nip19.decode(npub);
        } catch (e) {
            setName(npub);
            console.log(npub)
            modifySpeakerCard({npub, donationNpub, imageSrc, name: npub, id:card.id});
            console.log('modified speaker card')
            return;
        }
        

        const filter: Filter = {
            authors: [decoded_npub.data.toString()],
            kinds: [0],
        }
        fetchEventFromRelays(filter, (event: Event<0>) => {
            const content = JSON.parse(event.content);
            console.log(content)
            setImageSrc(content.picture)
            setName(content.name)
        })
       // modifySpeakerCard({npub : decoded_npub.data.toString(), donationNpub, imageSrc, name, id: card.id});
    }, [npub])

    useEffect(() => {
        console.log(npub)
        modifySpeakerCard({npub, donationNpub, imageSrc, name, id: card.id});
    }, [donationNpub, imageSrc])

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if(file) {
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
    
            reader.readAsDataURL(file);
        }
    }



  return (
    <div className='flex items-center justify-start space-x-5 border-4 rounded-3xl border-cyan-900 mx-4 py-4 relative'>
        <div className='flex flex-col space-y-3 items-center ml-4'>
            <img
                src={`${imageSrc}`}
                alt="Picture of the author"
                className='rounded-full object-cover'
                style={{ width: '100px', height: '100px' }}
                onClick={() => fileInput.current!.click()}
            />
            {imageSrc === '/dummy.svg' ? (
            <svg onClick={() => fileInput.current!.click()}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#008000" className="w-12 h-12 absolute top-0 left-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            ) : null}

            <input
                type='file'
                accept='image/*'
                style={{display: 'none'}}
                ref={fileInput}
                onChange={event => handleImageUpload(event)}
            />

            <div className='text-xl font-bold'>
                {name}
            </div>
        </div>
        <div className='flex flex-col space-y-4 justify-center'>
            <label>
                npub or name:
                <input value={card.npub} className="p-2 rounded" type="text" onInput={handleNpub}/>
            </label>
            <label>
                donation npub:
                <input value={card.donationNpub} className="p-2 rounded" type="text" onInput={handleDonationNpub}/>
            </label>
        </div>
    
    </div>
  )
}

export default SpeakerCard