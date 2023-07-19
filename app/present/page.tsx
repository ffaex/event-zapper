"use client"
import React, { useState } from 'react'
import QRCode from '@/components/QrCode'
import useStore from '@/components/store'
import Speaker from '@/types/Speaker'
import PresentationView from '@/components/PresentationView'
function page() {


  return (
    <PresentationView />
  )
}

export default page