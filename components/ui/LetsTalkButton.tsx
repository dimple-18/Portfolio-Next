"use client";

import React from "react";
import "./lets-talk-button.css";

type Props = {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function LetsTalkButton({
  text = "LET'S TALK",
  href = "#contact",
  onClick,
  className = "",
}: Props) {
  const content = (
    <span className={`ltb-btn ${className}`}>
      <strong className="ltb-text">{text}</strong>

      <span className="ltb-starsWrap" aria-hidden="true">
        <span className="ltb-stars" />
      </span>

      <span className="ltb-glow" aria-hidden="true">
        <span className="ltb-circle ltb-c1" />
        <span className="ltb-circle ltb-c2" />
      </span>
    </span>
  );

  // If you want it as a link
  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  // Or as a button (if you pass onClick and set href={undefined})
  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}