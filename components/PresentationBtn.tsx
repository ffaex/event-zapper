import { useRouter } from 'next/navigation'
import React from 'react'
import useStore from './store'

function PresentationBtn() {
  const router = useRouter();

  return (
    <button className='border-4 rounded-full border-black' onClick={() => {
      router.push('/present')
    }}>Present</button>
  )
}

export default PresentationBtn