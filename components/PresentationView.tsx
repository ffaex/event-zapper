import React from 'react'
import PresentationCard from './PresentationCard'
import useStore from './store'
import { useState } from 'react'
function PresentationView() {
  const Speakers = useStore(state => state.SpeakerCards)
  // if navigating back speakers should be loaded
  const [totalAmount, setTotalAmount] = useState<{[key: string]: number}>({});
  // sum all zaps

  const amount = Object.values(totalAmount).reduce((a, b) => a + b, 0);

  return (
    <div className='flex flex-col h-full w-full'>
      <div className='flex justify-end text-2xl font-bold text-violet-600 pr-40'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF00" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFA500" className="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
        {amount} Sats Zapped</div>
      <div className={`flex space-x-2 flex-1 min-h-0`}>
          {Speakers.map((speaker) => <PresentationCard key={speaker.id} speaker={speaker} setGlobal={setTotalAmount}/>)}
      </div>
    </div>
  )
}

export default PresentationView