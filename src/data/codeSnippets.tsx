import type { ReactNode } from "react";

// Syntax highlighting helper
const k = (t: string) => <span style={{ color: "#c98bdf" }}>{t}</span>; // keyword
const f = (t: string) => <span style={{ color: "#5565e8" }}>{t}</span>; // function
const s = (t: string) => <span style={{ color: "#e99287" }}>{t}</span>; // string
const v = (t: string) => <span style={{ color: "#4d5bce" }}>{t}</span>; // variable
const c = (t: string) => <span style={{ color: "#fea55f" }}>{t}</span>; // constant/annotation
const tp = (text: string) => <span style={{ color: "#3c9d93" }}>{text}</span>; // type
const w = (text: string) => <span style={{ color: "#d6deeb" }}>{text}</span>; // plain

export interface Snippet {
  lang: string;
  code: ReactNode;
}

export const codeSnippets: Snippet[] = [
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
  {
    lang: "Go / Gin",
    code: (
      <pre>
        {k("func ")}
        {f("main")}
        {w("() {")}
        {"\n"}
        {"  "}
        {v("r")}
        {w(" := ")}
        {v("gin")}
        {w(".")}
        {f("Default")}
        {w("()")}
        {"\n"}
        {"\n"}
        {"  "}
        {v("r")}
        {w(".")}
        {f("GET")}
        {w("(")}
        {s('"/ping"')}
        {w(", ")}
        {k("func")}
        {w("(")}
        {v("c")}
        {w(" *")}
        {tp("gin.Context")}
        {w(") {")}
        {"\n"}
        {"    "}
        {v("c")}
        {w(".")}
        {f("JSON")}
        {w("(")}
        {c("200")}
        {w(", ")}
        {tp("gin")}
        {w(".")}
        {tp("H")}
        {w("{")}
        {"\n"}
        {"      "}
        {s('"message"')}
        {w(": ")}
        {s('"pong"')}
        {w(",")}
        {"\n"}
        {"    "}
        {w("})")}
        {"\n"}
        {"  "}
        {w("})")}
        {"\n"}
        {"\n"}
        {"  "}
        {v("r")}
        {w(".")}
        {f("Run")}
        {w("(")}
        {s('":8080"')}
        {w(")")}
        {"\n"}
        {w("}")}
      </pre>
    ),
  },
  {
    lang: "Rust / Actix",
    code: (
      <pre>
        {c("#[actix_web::main]")}
        {"\n"}
        {k("async fn ")}
        {f("main")}
        {w("() -> ")}
        {tp("std::io::Result")}
        {w("<()> {")}
        {"\n"}
        {"  "}
        {tp("HttpServer")}
        {w("::")}
        {f("new")}
        {w("(|| {")}
        {"\n"}
        {"    "}
        {tp("App")}
        {w("::")}
        {f("new")}
        {w("()")}
        {"\n"}
        {"      "}
        {w(".")}
        {f("route")}
        {w("(")}
        {s('"/hello"')}
        {w(", ")}
        {v("web")}
        {w("::")}
        {f("get")}
        {w("().")}
        {f("to")}
        {w("(")}
        {f("manual_hello")}
        {w("))")}
        {"\n"}
        {"  "}
        {w("})")}
        {"\n"}
        {"  "}
        {w(".")}
        {f("bind")}
        {w("(")}
        {s('("127.0.0.1", 8080)')}
        {w(")?")}
        {"\n"}
        {"  "}
        {w(".")}
        {f("run")}
        {w("()")}
        {"\n"}
        {"  "}
        {w(".")}
        {k("await")}
        {"\n"}
        {w("}")}
      </pre>
    ),
  },
  {
    lang: "C# / .NET Core",
    code: (
      <pre>
        {k("var ")}
        {v("builder")}
        {w(" = ")}
        {tp("WebApplication")}
        {w(".")}
        {f("CreateBuilder")}
        {w("(")}
        {v("args")}
        {w(");")}
        {"\n"}
        {k("var ")}
        {v("app")}
        {w(" = ")}
        {v("builder")}
        {w(".")}
        {f("Build")}
        {w("();")}
        {"\n"}
        {"\n"}
        {v("app")}
        {w(".")}
        {f("MapGet")}
        {w("(")}
        {s('"/api/hello"')}
        {w(", () => ")}
        {s('"Hello World!"')}
        {w(");")}
        {"\n"}
        {"\n"}
        {v("app")}
        {w(".")}
        {f("Run")}
        {w("();")}
      </pre>
    ),
  },
  {
    lang: "JavaScript / Node.js",
    code: (
      <pre>
        {k("const ")}
        {v("http")}
        {w(" = ")}
        {f("require")}
        {w("(")}
        {s("'http'")}
        {w(");")}
        {"\n"}
        {"\n"}
        {k("const ")}
        {v("server")}
        {w(" = ")}
        {v("http")}
        {w(".")}
        {f("createServer")}
        {w("((req, res) => {")}
        {"\n"}
        {"  "}
        {v("res")}
        {w(".")}
        {v("statusCode")}
        {w(" = ")}
        {c("200")}
        {w(";")}
        {"\n"}
        {"  "}
        {v("res")}
        {w(".")}
        {f("setHeader")}
        {w("(")}
        {s("'Content-Type'")}
        {w(", ")}
        {s("'text/plain'")}
        {w(");")}
        {"\n"}
        {"  "}
        {v("res")}
        {w(".")}
        {f("end")}
        {w("(")}
        {s("'Hello World\\n'")}
        {w(");")}
        {"\n"}
        {w("});")}
        {"\n"}
        {"\n"}
        {v("server")}
        {w(".")}
        {f("listen")}
        {w("(")}
        {c("3000")}
        {w(", () => {")}
        {"\n"}
        {"  "}
        {v("console")}
        {w(".")}
        {f("log")}
        {w("(")}
        {s("'Server running at port 3000'")}
        {w(");")}
        {"\n"}
        {w("});")}
      </pre>
    ),
  },
];
