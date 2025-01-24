import React from "react";
import { docsList } from "./docsData";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="infinity-container">
        <div className="infinity"></div>
      </div>
      <h1 className="app-title">mandoc</h1>
      <h2>
        Collection of all documentations and manuals for programming languages
        and tools
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
              <a href="#" className="extension-link">Quick Start Guide</a>
              <a href="#" className="extension-link">API Reference</a>
              <a href="#" className="extension-link">Tutorials</a>
              <a href="#" className="extension-link">Community Forums</a>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
