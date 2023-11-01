"use client";
import React from "react";
import useStore from "./store";

function StyleWrapper({ children }: { children: React.ReactNode }) {
  const text_color = useStore((state) => state.textColour);
  const background_color = useStore((state) => state.bgColour);
  return (
    <div style={{ color: text_color, background: background_color }}>
      {children}
    </div>
  );
}

export default StyleWrapper;
