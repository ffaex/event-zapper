import { useRouter } from 'next/navigation'
import React from 'react'
import useStore from './store'

function PresentationBtn() {
  const router = useRouter();
  const setSessionStart = useStore(state => state.setSessionStart);

  return (
    <button className='border-4 rounded-full border-black' onClick={() => {
      setSessionStart(new Date(Date.now()));
      router.push('/present')
    }}>Present</button>
  )
}

export default PresentationBtn