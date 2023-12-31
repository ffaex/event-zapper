import React, { use, useEffect, useState } from 'react'
import QrCode from '@/components/QrCode'
import ZapList from '@/components/ZapList'
import useStore from './store'
import Card from '@/types/Card'
import { QRCodeSVG } from 'qrcode.react'
import { nip19 } from 'nostr-tools'
function PresentationCard({speaker, setGlobal, globalAmount} : {speaker: Card, setGlobal: any, globalAmount: number}) {
  const speakerColor = useStore(state => state.speakerColour)
  const [totalZaps, setTotalZaps] = useState(0);
  const imgSize = useStore(state => state.imgSize)
  const speakers = useStore(state => state.SpeakerCards)

  const showBool = speaker.id === speakers.length

  let decodedDonationNpub;
  try {
    decodedDonationNpub = nip19.decode(speaker.donationNpub).data.toString()
  } catch (error) {
  }

  let decodedSpeakerNpub;
  try {
    decodedSpeakerNpub = nip19.decode(speaker.npub).data.toString()
  } catch (error) {
    console.log('cant decode speaker npub')
  }

  
  useEffect(() => {
    setGlobal((prev: any) => ({...prev, [speaker.npub]: totalZaps}))
  }, [totalZaps])

  return (
    <div className='flex flex-col items-center space-y-2 rounded-2xl shadow-md max-h-full flex-1 relative'>
        {speaker.id == 1 &&  
        <div className='flex flex-col absolute left-0 bottom-0 items-center p-2 text-xl'>
          <span>How to Zap? 👉 nostr.how/zaps</span>
        </div>
        }
    
        
        <div className='flex items-center'>
          <div className='text-3xl text-fuchsia-600'>{totalZaps}</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF00" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFA500" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
        <img
            src={speaker.imageSrc}
            alt="Picture of the author"
            className='object-cover rounded-full shrink-0 border-8 aspect-square max-h-[50%]'
            style={{ borderColor: speakerColor, height: `${imgSize}%`}}
            //style={{ width: '100px', height: '100px' }}
        />
        <div>{speaker.name}</div>
        <QrCode value={speaker.donationNpub != '' ? speaker.donationNpub : speaker.npub} />                                         {/* so compiler wont complain */}
        {(decodedDonationNpub || decodedSpeakerNpub) && <ZapList npub={(speaker.donationNpub != '' ? decodedDonationNpub : decodedSpeakerNpub) as string} setter={setTotalZaps}/>}
          
          <div className={'flex justify-end text-2xl font-bold text-violet-600 w-full px-4 ' + (showBool ? '' : 'invisible')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF00" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFA500" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
          {globalAmount} Sats Zapped
        </div>

    </div>
  )
  }
export default PresentationCard