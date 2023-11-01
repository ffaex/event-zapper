"use client";
import CreateSession from "./CreateSession";

function dashboard() {
  return (
    <div className="flex w-full h-full justify-center p-3">
      <CreateSession />
      {/* <SpeakerSetup /> */}
    </div>
  );
}

export default dashboard;
