import { useEffect, useState, useRef, type ReactNode } from "react";

// Syntax highlighting helper
const k = (t: string) => <span style={{ color: "#c98bdf" }}>{t}</span>; // keyword
const f = (t: string) => <span style={{ color: "#5565e8" }}>{t}</span>; // function
const s = (t: string) => <span style={{ color: "#e99287" }}>{t}</span>; // string
const v = (t: string) => <span style={{ color: "#4d5bce" }}>{t}</span>; // variable
const c = (t: string) => <span style={{ color: "#fea55f" }}>{t}</span>; // constant/annotation
const tp = (text: string) => <span style={{ color: "#3c9d93" }}>{text}</span>; // type
const w = (text: string) => <span style={{ color: "#d6deeb" }}>{text}</span>; // plain

interface Snippet {
  lang: string;
  code: ReactNode;
}

const codeSnippets: Snippet[] = [
  {
    lang: "Java / Spring Boot",
    code: (
      <pre>
        {c("@RestController")}
        {"\n"}
        {c("@RequestMapping")}
        {w("(")}
        {s('"/api/inventory"')}
        {w(")")}
        {"\n"}
        {k("public class ")}
        {tp("InventoryController")}
        {w(" {")}
        {"\n"}
        {"  "}
        {c("@Autowired")}
        {"\n"}
        {"  "}
        {k("private ")}
        {tp("InventoryService ")}
        {v("service")}
        {w(";")}
        {"\n"}
        {"\n"}
        {"  "}
        {c("@GetMapping")}
        {w("(")}
        {s('"/{id}"')}
        {w(")")}
        {"\n"}
        {"  "}
        {k("public ")}
        {tp("ResponseEntity")}
        {w("<")}
        {tp("Item")}
        {w("> ")}
        {f("getItem")}
        {w("(")}
        {"\n"}
        {"    "}
        {c("@PathVariable ")}
        {tp("Long ")}
        {v("id")}
        {w(") {")}
        {"\n"}
        {"    "}
        {k("return ")}
        {tp("ResponseEntity")}
        {w(".")}
        {f("ok")}
        {w("(")}
        {"\n"}
        {"      "}
        {v("service")}
        {w(".")}
        {f("findById")}
        {w("(")}
        {v("id")}
        {w("));")}
        {"\n"}
        {"  "}
        {w("}")}
        {"\n"}
        {w("}")}
      </pre>
    ),
  },
  {
    lang: "TypeScript / Angular",
    code: (
      <pre>
        {c("@Component")}
        {w("({")}
        {"\n"}
        {"  "}
        {v("selector")}
        {w(": ")}
        {s("'app-dashboard'")}
        {w(",")}
        {"\n"}
        {"  "}
        {v("templateUrl")}
        {w(": ")}
        {s("'./dashboard.html'")}
        {"\n"}
        {w("})")}
        {"\n"}
        {k("export class ")}
        {tp("DashboardComponent")}
        {"\n"}
        {"  "}
        {k("implements ")}
        {tp("OnInit")}
        {w(" {")}
        {"\n"}
        {"  "}
        {v("items$")}
        {w(" = ")}
        {k("this")}
        {w(".")}
        {v("store")}
        {w(".")}
        {f("select")}
        {w("(")}
        {f("getItems")}
        {w(");")}
        {"\n"}
        {"\n"}
        {"  "}
        {f("constructor")}
        {w("(")}
        {"\n"}
        {"    "}
        {k("private ")}
        {v("store")}
        {w(": ")}
        {tp("Store")}
        {w("<")}
        {tp("AppState")}
        {w(">,")}
        {"\n"}
        {"    "}
        {k("private ")}
        {v("http")}
        {w(": ")}
        {tp("HttpClient")}
        {"\n"}
        {"  "}
        {w(") {}")}
        {"\n"}
        {"\n"}
        {"  "}
        {f("ngOnInit")}
        {w("() {")}
        {"\n"}
        {"    "}
        {k("this")}
        {w(".")}
        {v("store")}
        {w(".")}
        {f("dispatch")}
        {w("(")}
        {f("loadItems")}
        {w("());")}
        {"\n"}
        {"  "}
        {w("}")}
        {"\n"}
        {w("}")}
      </pre>
    ),
  },
  {
    lang: "TypeScript / React",
    code: (
      <pre>
        {k("const ")}
        {f("useAuth")}
        {w(" = () => {")}
        {"\n"}
        {"  "}
        {k("const ")}
        {w("[")}
        {v("user")}
        {w(", ")}
        {v("setUser")}
        {w("] = ")}
        {f("useState")}
        {w("<")}
        {tp("User")}
        {w(">();")}
        {"\n"}
        {"  "}
        {k("const ")}
        {v("token")}
        {w(" = ")}
        {v("localStorage")}
        {w(".")}
        {f("getItem")}
        {w("(")}
        {s("'jwt'")}
        {w(");")}
        {"\n"}
        {"\n"}
        {"  "}
        {f("useEffect")}
        {w("(() => {")}
        {"\n"}
        {"    "}
        {k("if ")}
        {w("(")}
        {v("token")}
        {w(") {")}
        {"\n"}
        {"      "}
        {v("api")}
        {w(".")}
        {f("get")}
        {w("(")}
        {s("'/me'")}
        {w(", {")}
        {"\n"}
        {"        "}
        {v("headers")}
        {w(": { ")}
        {v("Authorization")}
        {w(": ")}
        {v("token")}
        {w(" }")}
        {"\n"}
        {"      "}
        {w("}).")}
        {f("then")}
        {w("(")}
        {v("res")}
        {w(" => ")}
        {f("setUser")}
        {w("(")}
        {v("res")}
        {w(".")}
        {v("data")}
        {w("));")}
        {"\n"}
        {"    "}
        {w("}")}
        {"\n"}
        {"  "}
        {w("}, [")}
        {v("token")}
        {w("]);")}
        {"\n"}
        {"\n"}
        {"  "}
        {k("return ")}
        {w("{ ")}
        {v("user")}
        {w(", ")}
        {v("isAuth")}
        {w(": !!")}
        {v("user")}
        {w(" };")}
        {"\n"}
        {w("};")}
      </pre>
    ),
  },
  {
    lang: "Python / FastAPI",
    code: (
      <pre>
        {c("@app")}
        {w(".")}
        {f("post")}
        {w("(")}
        {s('"/api/predict"')}
        {w(")")}
        {"\n"}
        {k("async def ")}
        {f("predict")}
        {w("(")}
        {"\n"}
        {"    "}
        {v("data")}
        {w(": ")}
        {tp("PredictionRequest")}
        {w(",")}
        {"\n"}
        {"    "}
        {v("db")}
        {w(": ")}
        {tp("Session")}
        {w(" = ")}
        {f("Depends")}
        {w("(")}
        {v("get_db")}
        {w(")")}
        {"\n"}
        {w("):")}
        {"\n"}
        {"    "}
        {v("model")}
        {w(" = ")}
        {f("load_model")}
        {w("(")}
        {s('"v2"')}
        {w(")")}
        {"\n"}
        {"    "}
        {v("result")}
        {w(" = ")}
        {v("model")}
        {w(".")}
        {f("predict")}
        {w("(")}
        {v("data")}
        {w(".")}
        {v("features")}
        {w(")")}
        {"\n"}
        {"    "}
        {k("await ")}
        {f("save_prediction")}
        {w("(")}
        {v("db")}
        {w(", ")}
        {v("result")}
        {w(")")}
        {"\n"}
        {"    "}
        {k("return ")}
        {w("{")}
        {s('"prediction"')}
        {w(": ")}
        {v("result")}
        {w("}")}
      </pre>
    ),
  },
  {
    lang: "Java / Spring Security",
    code: (
      <pre>
        {c("@Configuration")}
        {"\n"}
        {c("@EnableWebSecurity")}
        {"\n"}
        {k("public class ")}
        {tp("SecurityConfig")}
        {w(" {")}
        {"\n"}
        {"  "}
        {c("@Bean")}
        {"\n"}
        {"  "}
        {k("public ")}
        {tp("SecurityFilterChain ")}
        {f("chain")}
        {w("(")}
        {"\n"}
        {"    "}
        {tp("HttpSecurity ")}
        {v("http")}
        {w(") ")}
        {k("throws ")}
        {tp("Exception")}
        {w(" {")}
        {"\n"}
        {"    "}
        {k("return ")}
        {v("http")}
        {"\n"}
        {"      "}
        {w(".")}
        {f("csrf")}
        {w("().")}
        {f("disable")}
        {w("()")}
        {"\n"}
        {"      "}
        {w(".")}
        {f("authorizeRequests")}
        {w("()")}
        {"\n"}
        {"      "}
        {w(".")}
        {f("antMatchers")}
        {w("(")}
        {s('"/api/**"')}
        {w(")")}
        {"\n"}
        {"      "}
        {w(".")}
        {f("authenticated")}
        {w("()")}
        {"\n"}
        {"      "}
        {w(".")}
        {k("and")}
        {w("().")}
        {f("oauth2Login")}
        {w("()")}
        {"\n"}
        {"      "}
        {w(".")}
        {k("and")}
        {w("().")}
        {f("build")}
        {w("();")}
        {"\n"}
        {"  "}
        {w("}")}
        {"\n"}
        {w("}")}
      </pre>
    ),
  },
  {
    lang: "SQL / PostgreSQL",
    code: (
      <pre>
        {k("SELECT ")}
        {v("p")}
        {w(".")}
        {v("name")}
        {w(", ")}
        {v("p")}
        {w(".")}
        {v("stock")}
        {w(",")}
        {"\n"}
        {"  "}
        {v("c")}
        {w(".")}
        {v("category_name")}
        {w(",")}
        {"\n"}
        {"  "}
        {f("COALESCE")}
        {w("(")}
        {f("SUM")}
        {w("(")}
        {v("o")}
        {w(".")}
        {v("quantity")}
        {w("), ")}
        {c("0")}
        {w(") ")}
        {k("AS ")}
        {v("sold")}
        {"\n"}
        {k("FROM ")}
        {tp("products ")}
        {v("p")}
        {"\n"}
        {k("JOIN ")}
        {tp("categories ")}
        {v("c")}
        {w(" ")}
        {k("ON ")}
        {v("c")}
        {w(".")}
        {v("id")}
        {w(" = ")}
        {v("p")}
        {w(".")}
        {v("category_id")}
        {"\n"}
        {k("LEFT JOIN ")}
        {tp("order_items ")}
        {v("o")}
        {w(" ")}
        {k("ON ")}
        {v("o")}
        {w(".")}
        {v("product_id")}
        {w(" = ")}
        {v("p")}
        {w(".")}
        {v("id")}
        {"\n"}
        {k("WHERE ")}
        {v("p")}
        {w(".")}
        {v("active")}
        {w(" = ")}
        {c("true")}
        {"\n"}
        {k("GROUP BY ")}
        {v("p")}
        {w(".")}
        {v("id")}
        {w(", ")}
        {v("c")}
        {w(".")}
        {v("category_name")}
        {"\n"}
        {k("HAVING ")}
        {f("SUM")}
        {w("(")}
        {v("o")}
        {w(".")}
        {v("quantity")}
        {w(") > ")}
        {c("10")}
        {"\n"}
        {k("ORDER BY ")}
        {v("sold")}
        {w(" ")}
        {k("DESC")}
        {w(";")}
      </pre>
    ),
  },
  {
    lang: "TypeScript / Express",
    code: (
      <pre>
        {k("const ")}
        {v("app")}
        {w(" = ")}
        {f("express")}
        {w("();")}
        {"\n"}
        {"\n"}
        {v("app")}
        {w(".")}
        {f("use")}
        {w("(")}
        {f("cors")}
        {w("());")}
        {"\n"}
        {v("app")}
        {w(".")}
        {f("use")}
        {w("(")}
        {v("express")}
        {w(".")}
        {f("json")}
        {w("());")}
        {"\n"}
        {"\n"}
        {v("app")}
        {w(".")}
        {f("get")}
        {w("(")}
        {s('"/api/users/:id"')}
        {w(", ")}
        {k("async ")}
        {w("(")}
        {v("req")}
        {w(", ")}
        {v("res")}
        {w(") => {")}
        {"\n"}
        {"  "}
        {k("const ")}
        {v("user")}
        {w(" = ")}
        {k("await ")}
        {tp("User")}
        {w(".")}
        {f("findByPk")}
        {w("(")}
        {v("req")}
        {w(".")}
        {v("params")}
        {w(".")}
        {v("id")}
        {w(");")}
        {"\n"}
        {"  "}
        {k("if ")}
        {w("(!")}
        {v("user")}
        {w(") ")}
        {k("return ")}
        {v("res")}
        {w(".")}
        {f("status")}
        {w("(")}
        {c("404")}
        {w(").")}
        {f("json")}
        {w("({")}
        {"\n"}
        {"    "}
        {v("error")}
        {w(": ")}
        {s('"User not found"')}
        {"\n"}
        {"  "}
        {w("});")}
        {"\n"}
        {"  "}
        {v("res")}
        {w(".")}
        {f("json")}
        {w("(")}
        {v("user")}
        {w(");")}
        {"\n"}
        {w("});")}
        {"\n"}
        {"\n"}
        {v("app")}
        {w(".")}
        {f("listen")}
        {w("(")}
        {c("3000")}
        {w(", () => ")}
        {f("console")}
        {w(".")}
        {f("log")}
        {w("(")}
        {s('"Server running"')}
        {w("));")}
      </pre>
    ),
  },
  {
    lang: "Docker / Compose",
    code: (
      <pre>
        {tp("services")}
        {w(":")}
        {"\n"}
        {"  "}
        {v("backend")}
        {w(":")}
        {"\n"}
        {"    "}
        {v("build")}
        {w(": ")}
        {s("./backend")}
        {"\n"}
        {"    "}
        {v("ports")}
        {w(": [")}
        {s('"8080:8080"')}
        {w("]")}
        {"\n"}
        {"    "}
        {v("environment")}
        {w(":")}
        {"\n"}
        {"      "}
        {w("- ")}
        {v("DB_HOST")}
        {w("=")}
        {s("postgres")}
        {"\n"}
        {"      "}
        {w("- ")}
        {v("JWT_SECRET")}
        {w("=")}
        {s("${SECRET}")}
        {"\n"}
        {"    "}
        {v("depends_on")}
        {w(": [")}
        {s("postgres")}
        {w("]")}
        {"\n"}
        {"  "}
        {v("postgres")}
        {w(":")}
        {"\n"}
        {"    "}
        {v("image")}
        {w(": ")}
        {s("postgres:15")}
        {"\n"}
        {"    "}
        {v("volumes")}
        {w(":")}
        {"\n"}
        {"      "}
        {w("- ")}
        {s("pgdata:/var/lib/postgresql/data")}
      </pre>
    ),
  },
];

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
      offset += (cards[i] as HTMLElement).offsetHeight + 16;
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
