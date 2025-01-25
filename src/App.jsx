import React, { useEffect } from "react";
import { docsList } from "./docsData";
import "./App.css";

function App() {
  useEffect(() => {
    const handleWordHover = (event) => {
      const word = event.currentTarget;
      word.classList.add("hovered");
      setTimeout(() => {
        word.classList.remove("hovered");
      }, 750);
    };

    const setRandomTranslate = () => {
      const letters = document.querySelectorAll(".hover-letter");
      letters.forEach((letter) => {
        const randomX = Math.floor(Math.random() * 20) - 10;
        const randomY = Math.floor(Math.random() * 20) - 10;
        letter.style.setProperty("--random-x", `${randomX}px`);
        letter.style.setProperty("--random-y", `${randomY}px`);
      });
    };

    const words = document.querySelectorAll(".hover-word");
    words.forEach((word) => {
      word.addEventListener("mouseleave", handleWordHover);
      word.addEventListener("mouseenter", setRandomTranslate);
    });

    setRandomTranslate();

    return () => {
      words.forEach((word) => {
        word.removeEventListener("mouseleave", handleWordHover);
        word.removeEventListener("mouseenter", setRandomTranslate);
      });
    };
  }, []);

  return (
    <div className="app-container">
      <div className="infinity-container">
        <div className="infinity"></div>
      </div>

      <h1 className="app-title">mandoc</h1>

      <h2 className="animated-heading">
        {[
          "Collection",
          "of",
          "all",
          "documentations",
          "and",
          "manuals",
          "for",
          "programming",
          "languages",
          "and",
          "tools",
        ].map((word, index) => (
          <span key={index} className="hover-word">
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="hover-letter">
                {char}
              </span>
            ))}
            {index < 10 && " "}
          </span>
        ))}
      </h2>

      <h3>
        Did we miss something? Let us know on GitHub &gt;
        <a
          href="https://github.com/soycarlo99/manDoc"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <i className="devicon-github-original colored github-icon" />
        </a>
      </h3>

      <ul className="docs-grid">
        {docsList.map((doc) => (
          <li key={doc.name} className="docs-item">
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="docs-link"
            >
              <i className={`devicon-${doc.deviconClass} colored docs-icon`} />
              <span className="docs-text">{doc.name}</span>
            </a>

            <ul className="docs-extension">
              {doc.resources &&
                doc.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="extension-link"
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
