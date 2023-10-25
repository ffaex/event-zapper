"use client";
import React, { useEffect } from 'react'
import useStore from './store'
import PresentationBtn from './PresentationBtn';

function SessionSetup() {
    const numOfSpeakers = useStore(state => state.numOfSpeakers);
    const bgColour = useStore(state => state.bgColour);
    const textColour = useStore(state => state.textColour);
    const speakerColour = useStore(state => state.speakerColour);
    const relays = useStore(state => state.relays);
    const QRCodeSize = useStore(state => state.QRCodeSize);
    const imgSize = useStore(state => state.imgSize);
    const npubPrefix = useStore(state => state.npubPrefix);

    const setImgSize = useStore(state => state.setImgSize);
    const setNumOfSpeakers = useStore(state => state.setNumOfSpeakers);
    const setBgColour = useStore(state => state.setBgColour);
    const setTextColour = useStore(state => state.setTextColour);
    const setSpeakerColour = useStore(state => state.setSpeakerColour);
    const setSpeakerCards = useStore(state => state.setSpeakerCards)
    const setRelays = useStore(state => state.setRelays);
    const setQRCodeSize = useStore(state => state.setQRCodeSize);

    useEffect(() => {
      setSpeakerCards(numOfSpeakers)
    }, [numOfSpeakers]);
    

  return (
    <div className="flex flex-col space-y-4 border-4 border-cyan-900 rounded-xl px-4 pt-2 w-1/2 relative">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 absolute top-4 right-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg> */}

        <span className='text-black text-3xl font-bold'>Session Setup</span>
      <label>
        Number of Speakers:
        <input min={1} className="p-2 rounded" type="number" value={numOfSpeakers} onChange={(e) => setNumOfSpeakers(Number(e.target.value))} />
      </label>
      <label>
        Background Colour:
        <input className="p-2 rounded" type="color" value={bgColour} onChange={(e) => setBgColour(e.target.value)} />
      </label>
      <label>
        Text Colour:
        <input className="p-2 rounded" type="color" value={textColour} onChange={(e) => setTextColour(e.target.value)} />
      </label>
      <label>
        Speaker Colour:
        <input className="p-2 rounded" type="color" value={speakerColour} onChange={(e) => setSpeakerColour(e.target.value)} />
      </label>
      <label>
        Relays:
        <input className="p-2 rounded" type="text" value={relays} onChange={(e) => setRelays(e.target.value.split(','))} />
      </label>
      <label className='flex items-center '>
        QRCode Size:
        <input className="p-2 rounded" type="range" min={1} max={100} value={QRCodeSize} onChange={(e) => setQRCodeSize(e.target.value)} />
      </label>
      <label>
        Npub prefix:
        <input className="p-2 rounded" type="text" value={npubPrefix} onChange={(e) => useStore.getState().setNpubPrefix(e.target.value)} />
      </label>
      <label className='flex items-center'>
        Image Size:
        <input className="p-2 rounded" type="range" min={1} max={50} value={imgSize} onChange={(e) => setImgSize(e.target.value)} />
      </label>
    <PresentationBtn />
    <label className='flex flex-col absolute left-2 bottom-2 max-w-[33%] items-center'>
        <a href="https://github.com/owen1917/event-zapper#readme" target="_blank" rel="noopener noreferrer" >
          <button>
            💡 Help
          </button>
       </a>
     </label>
    </div>

    
  )
}

export default SessionSetup
