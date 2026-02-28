import { useEffect, useState } from "react";

const HelloPage = () => {
  const [titleText, setTitleText] = useState("");
  const fullTitle = "Front-end developer";

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

  return (
    <div className="hello-page">
      <div className="hello-page__content">
        <p className="hello-page__greeting">Hi all. I am</p>
        <h1 className="hello-page__name">Piero Aguilar</h1>
        <div className="hello-page__title">
          <span>&gt;</span> <span className="typing-text">{titleText}</span>
        </div>

        <p className="hello-page__comment">
          {"// complete the game to continue"}
        </p>
        <p className="hello-page__comment">{"// find my profile on Github:"}</p>
        <p className="hello-page__link">
          <span className="keyword">const </span>
          <span className="variable">githubLink </span>
          <span className="operator">= </span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            "https://github.com/username"
          </a>
          ;
        </p>
      </div>

      <div className="hello-page__snippets">
        <div className="floating-snippet">
          <code>
            <span style={{ color: "var(--syntax-keyword)" }}>function </span>
            <span style={{ color: "var(--syntax-function)" }}>
              initializeApp
            </span>
            <span style={{ color: "var(--text-primary)" }}>(</span>
            <span style={{ color: "var(--syntax-variable)" }}>config</span>
            <span style={{ color: "var(--text-primary)" }}>): </span>
            <span style={{ color: "var(--syntax-type)" }}>App </span>
            <span style={{ color: "var(--text-primary)" }}>{"{"}</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-keyword)" }}>const </span>
            <span style={{ color: "var(--syntax-variable)" }}>app</span>
            <span style={{ color: "var(--text-primary)" }}> = </span>
            <span style={{ color: "var(--syntax-function)" }}>
              createInstance
            </span>
            <span style={{ color: "var(--text-primary)" }}>(config);</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-keyword)" }}>const </span>
            <span style={{ color: "var(--syntax-variable)" }}>setup</span>
            <span style={{ color: "var(--text-primary)" }}> = </span>
            <span style={{ color: "var(--syntax-function)" }}>configure</span>
            <span style={{ color: "var(--text-primary)" }}>(app);</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-variable)" }}>setup</span>
            <span style={{ color: "var(--text-primary)" }}>.</span>
            <span style={{ color: "var(--syntax-variable)" }}>status</span>
            <span style={{ color: "var(--text-primary)" }}> = </span>
            <span style={{ color: "var(--syntax-constant)" }}>READY</span>
            <span style={{ color: "var(--text-primary)" }}>;</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-keyword)" }}>return </span>
            <span style={{ color: "var(--syntax-variable)" }}>app</span>
            <span style={{ color: "var(--text-primary)" }}>;</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>{"}"}</span>
          </code>
        </div>

        <div className="floating-snippet">
          <code>
            <span style={{ color: "var(--syntax-keyword)" }}>function </span>
            <span style={{ color: "var(--syntax-function)" }}>
              handleRequest
            </span>
            <span style={{ color: "var(--text-primary)" }}>(</span>
            <span style={{ color: "var(--syntax-variable)" }}>req</span>
            <span style={{ color: "var(--text-primary)" }}>, </span>
            <span style={{ color: "var(--syntax-variable)" }}>res</span>
            <span style={{ color: "var(--text-primary)" }}>): </span>
            <span style={{ color: "var(--syntax-type)" }}>Response </span>
            <span style={{ color: "var(--text-primary)" }}>{"{"}</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-keyword)" }}>const </span>
            <span style={{ color: "var(--syntax-variable)" }}>data</span>
            <span style={{ color: "var(--text-primary)" }}> = </span>
            <span style={{ color: "var(--syntax-function)" }}>parseBody</span>
            <span style={{ color: "var(--text-primary)" }}>(req.body);</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-keyword)" }}>const </span>
            <span style={{ color: "var(--syntax-variable)" }}>validated </span>
            <span style={{ color: "var(--text-primary)" }}>= </span>
            <span style={{ color: "var(--syntax-function)" }}>validate</span>
            <span style={{ color: "var(--text-primary)" }}>(data);</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-keyword)" }}>return </span>
            <span style={{ color: "var(--syntax-variable)" }}>res</span>
            <span style={{ color: "var(--text-primary)" }}>.</span>
            <span style={{ color: "var(--syntax-function)" }}>json</span>
            <span style={{ color: "var(--text-primary)" }}>(validated);</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>{"}"}</span>
          </code>
        </div>

        <div className="floating-snippet">
          <code>
            <span style={{ color: "var(--syntax-keyword)" }}>function </span>
            <span style={{ color: "var(--syntax-function)" }}>
              buildPipeline
            </span>
            <span style={{ color: "var(--text-primary)" }}>(</span>
            <span style={{ color: "var(--syntax-variable)" }}>steps</span>
            <span style={{ color: "var(--text-primary)" }}>): </span>
            <span style={{ color: "var(--syntax-type)" }}>Pipeline </span>
            <span style={{ color: "var(--text-primary)" }}>{"{"}</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-keyword)" }}>const </span>
            <span style={{ color: "var(--syntax-variable)" }}>result</span>
            <span style={{ color: "var(--text-primary)" }}> = </span>
            <span style={{ color: "var(--syntax-function)" }}>compose</span>
            <span style={{ color: "var(--text-primary)" }}>(steps);</span>
            <br />
            {"  "}
            <span style={{ color: "var(--syntax-keyword)" }}>return </span>
            <span style={{ color: "var(--syntax-variable)" }}>result</span>
            <span style={{ color: "var(--text-primary)" }}>;</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>{"}"}</span>
          </code>
        </div>
      </div>
    </div>
  );
};

export default HelloPage;
