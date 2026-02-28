const NotFoundPage = () => {
  const codeLines = [
    {
      num: 1,
      content: (
        <>
          <span style={{ color: "var(--syntax-keyword)" }}>const</span>{" "}
          <span style={{ color: "var(--syntax-variable)" }}>page</span> ={" "}
          <span style={{ color: "var(--syntax-function)" }}>findPage</span>(
          <span style={{ color: "var(--syntax-string)" }}>
            'you-were-looking-for'
          </span>
          );
        </>
      ),
    },
    { num: 2, content: "" },
    {
      num: 3,
      content: (
        <>
          <span style={{ color: "var(--syntax-keyword)" }}>if</span> (!page){" "}
          {"{"}
        </>
      ),
    },
    {
      num: 4,
      content: (
        <>
          &nbsp;&nbsp;console.
          <span style={{ color: "var(--syntax-function)" }}>log</span>(
          <span style={{ color: "var(--syntax-string)" }}>
            "Oops! Looks like you took a wrong turn in the codebase."
          </span>
          );
        </>
      ),
    },
    {
      num: 5,
      content: (
        <>
          &nbsp;&nbsp;console.
          <span style={{ color: "var(--syntax-function)" }}>log</span>(
          <span style={{ color: "var(--syntax-string)" }}>
            "But hey, since you're here..."
          </span>
          );
        </>
      ),
    },
    {
      num: 6,
      content: (
        <>
          &nbsp;&nbsp;console.
          <span style={{ color: "var(--syntax-function)" }}>log</span>(
          <span style={{ color: "var(--syntax-string)" }}>
            "🚀 Go back to the homepage and explore more cool stuff!"
          </span>
          );
        </>
      ),
    },
    {
      num: 7,
      content: (
        <>
          &nbsp;&nbsp;
          <span style={{ color: "var(--syntax-keyword)" }}>throw new</span>{" "}
          <span style={{ color: "var(--syntax-function)" }}>Error</span>(
          <span style={{ color: "var(--syntax-string)" }}>
            "404: PageNotFoundError 😅"
          </span>
          );
        </>
      ),
    },
    { num: 8, content: "}" },
    { num: 9, content: "" },
    {
      num: 10,
      content: (
        <>
          <span style={{ color: "var(--syntax-comment)" }}>
            {"/* Suggestions:"}
          </span>
        </>
      ),
    },
    {
      num: 11,
      content: (
        <>
          <span style={{ color: "var(--syntax-comment)" }}>
            &nbsp;* - Check the URL for typos
          </span>
        </>
      ),
    },
    {
      num: 12,
      content: (
        <>
          <span style={{ color: "var(--syntax-comment)" }}>
            &nbsp;* - Use the site navigation
          </span>
        </>
      ),
    },
    {
      num: 13,
      content: (
        <>
          <span style={{ color: "var(--syntax-comment)" }}>
            &nbsp;* - Or hit CMD+Z in real life 😄
          </span>
        </>
      ),
    },
    {
      num: 14,
      content: (
        <>
          <span style={{ color: "var(--syntax-comment)" }}>&nbsp;*/</span>
        </>
      ),
    },
    { num: 15, content: "" },
    {
      num: 16,
      content: (
        <>
          <span style={{ color: "var(--syntax-function)" }}>redirect</span>(
          <span style={{ color: "var(--syntax-string)" }}>'home'</span>);
        </>
      ),
    },
  ];

  return (
    <div className="not-found-page">
      <div className="not-found-page__art">404</div>

      <div className="not-found-page__code">
        {codeLines.map((line) => (
          <div key={line.num} className="not-found-page__code-line">
            <span className="not-found-page__line-number">{line.num}</span>
            <span>{line.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotFoundPage;
