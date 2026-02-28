import { useEffect, useState, useRef } from "react";
import { codeSnippets } from "../data/codeSnippets";

const HelloPage = () => {
  const [titleText, setTitleText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const fullTitle = "Full Stack developer";

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Step-by-step scroll: 2.5s per card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Get card class for center/near/far styling
  const getCardClass = (index: number) => {
    const center = activeIndex;
    const total = codeSnippets.length;
    let diff = index - center;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return "floating-snippet--center";
    if (Math.abs(diff) === 1) return "floating-snippet--near";
    return "";
  };

  // Calculate translateY so the active card is always centered
  const getTranslateY = () => {
    if (!trackRef.current) return 0;
    const cards = trackRef.current.children;
    if (cards.length === 0) return 0;

    let offset = 0;
    for (let i = 0; i < activeIndex; i++) {
      offset += (cards[i] as HTMLElement).offsetHeight + 36;
    }
    const activeCard = cards[activeIndex] as HTMLElement;
    if (activeCard) {
      const container = trackRef.current.parentElement;
      if (container) {
        offset -= (container.offsetHeight - activeCard.offsetHeight) / 2;
      }
    }
    return -offset;
  };

  return (
    <div className="hello-page">
      <div className="hello-page__content">
        <p className="hello-page__greeting">Hi all. I am</p>
        <h1 className="hello-page__name">Piero Aguilar</h1>
        <div className="hello-page__title">
          <span>&gt;</span> <span className="typing-text">{titleText}</span>
        </div>

        <p className="hello-page__comment">
          {"// my stack: Angular / React + Spring Boot"}
        </p>
        <p className="hello-page__comment">{"// find my profile on Github:"}</p>
        <p className="hello-page__link">
          <span className="keyword">const </span>
          <span className="variable">githubLink </span>
          <span className="operator">= </span>
          <a
            href="https://github.com/Piers18"
            target="_blank"
            rel="noopener noreferrer"
          >
            "https://github.com/Piers18"
          </a>
          ;
        </p>
      </div>

      <div className="hello-page__snippets">
        <div
          className="hello-page__snippets-track"
          ref={trackRef}
          style={{
            transform: `translateY(${getTranslateY()}px)`,
          }}
        >
          {codeSnippets.map((snippet, i) => (
            <div key={i} className={`floating-snippet ${getCardClass(i)}`}>
              <div className="floating-snippet__lang">{snippet.lang}</div>
              <code>{snippet.code}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelloPage;
