"use client"
import React from "react";
import useStore from './store.js';
import SessionSetup from './SessionSetup';
import SpeakerSetup from "./SpeakerSetup";
function dashboard() {

  return (
    <div className="flex w-full h-full">
      <SessionSetup />
      <SpeakerSetup />
    </div>
  );
}

export default dashboard;
