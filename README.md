# Event Zapper - A way to Zap speakers at in-person events, in realtime

During live events, speakers often inspire, entertain, or educate the audience. What if the audience could instantly express their appreciation? This is where Event Zapper comes in. With Event Zapper, attendees can instantly "Zap" the speakers, providing immediate feedback and creating an interactive atmosphere.

With Zappy Stage, event organizers can bridge the gap between audiences and speakers, making the event more lively, interactive, and memorable.

---

## Quick Start Guide

### Configuring your event

Open the Session Setup screen (https://event-zapper.lol). Specify the number of people that will be speaking at the event. 

Paste each speaker's nostr public key (npub) in to the the npub field under "Speaker Setup". The speaker's profile picture and name will be automatically populated.

Optionally, if a speaker doesn't have their own npub, you can manually specify a profile image and name. The donation npub field can be populated with an npub of the speaker's choosing. Zaps will be directed towards the donation npub instead.

### Presenting

Click "Present" to open the Presentation screen - this will be what your event audience see's. Speakers configured during setup will be displayed here.

A QR code for each speaker will be generated and displayed alongside the speaker's nostr profile picture and name.  

Audience members can scan the QR code to open the speaker's nostr profile. Zaps sent to the speaker's nostr profile will be displayed on the screen in realtime!

---

## Develop

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


