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
        {s('"/api/users"')}
        {w(")")}
        {"\n"}
        {k("public class ")}
        {tp("UserController")}
        {w(" {")}
        {"\n"}
        {"  "}
        {c("@Autowired")}
        {"\n"}
        {"  "}
        {k("private ")}
        {tp("UserService ")}
        {v("userService")}
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
        {tp("UserDTO")}
        {w("> ")}
        {f("getUser")}
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
        {v("userService")}
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
        {s("'app-profile'")}
        {w(",")}
        {"\n"}
        {"  "}
        {v("templateUrl")}
        {w(": ")}
        {s("'./profile.html'")}
        {"\n"}
        {w("})")}
        {"\n"}
        {k("export class ")}
        {tp("ProfileComponent")}
        {"\n"}
        {"  "}
        {k("implements ")}
        {tp("OnInit")}
        {w(" {")}
        {"\n"}
        {"  "}
        {v("user$")}
        {w("!: ")}
        {tp("Observable")}
        {w("<")}
        {tp("User")}
        {w(">;")}
        {"\n"}
        {"\n"}
        {"  "}
        {f("constructor")}
        {w("(")}
        {k("private ")}
        {v("auth")}
        {w(": ")}
        {tp("AuthService")}
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
        {v("user$")}
        {w(" = ")}
        {k("this")}
        {w(".")}
        {v("auth")}
        {w(".")}
        {f("getCurrentUser")}
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
    lang: "TypeScript / React",
    code: (
      <pre>
        {k("export const ")}
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
        {w(" | ")}
        {tp("null")}
        {w(">(")}
        {tp("null")}
        {w(");")}
        {"\n"}
        {"\n"}
        {"  "}
        {f("useEffect")}
        {w("(() => {")}
        {"\n"}
        {"    "}
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
        {s("'/auth/me'")}
        {w(").")}
        {f("then")}
        {w("(")}
        {v("res")}
        {w(" => ")}
        {f("setUser")}
        {w("(")}
        {v("res")}
        {w(".")}
        {v("data")}
        {w(")));")}
        {"\n"}
        {"    "}
        {w("}")}
        {"\n"}
        {"  "}
        {w("}, []);")}
        {"\n"}
        {"\n"}
        {"  "}
        {k("return ")}
        {w("{ ")}
        {v("user")}
        {w(", ")}
        {v("isAuthenticated")}
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
        {f("get")}
        {w("(")}
        {s('"/api/items/{item_id}"')}
        {w(", ")}
        {v("response_model")}
        {w("=")}
        {tp("Item")}
        {w(")")}
        {"\n"}
        {k("async def ")}
        {f("read_item")}
        {w("(")}
        {"\n"}
        {"    "}
        {v("item_id")}
        {w(": ")}
        {tp("int")}
        {w(", ")}
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
        {v("item")}
        {w(" = ")}
        {v("db")}
        {w(".")}
        {f("query")}
        {w("(")}
        {tp("models")}
        {w(".")}
        {tp("Item")}
        {w(").")}
        {f("filter")}
        {w("(...).")}
        {f("first")}
        {w("()")}
        {"\n"}
        {"    "}
        {k("if ")}
        {v("item")}
        {w(" ")}
        {k("is None")}
        {w(":")}
        {"\n"}
        {"        "}
        {k("raise ")}
        {tp("HTTPException")}
        {w("(")}
        {v("status_code")}
        {w("=")}
        {c("404")}
        {w(")")}
        {"\n"}
        {"    "}
        {k("return ")}
        {v("item")}
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
        {f("post")}
        {w("(")}
        {s('"/api/login"')}
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
        {w("{ ")}
        {v("email")}
        {w(", ")}
        {v("password")}
        {w(" } = ")}
        {v("req")}
        {w(".")}
        {v("body")}
        {w(";")}
        {"\n"}
        {"  "}
        {k("const ")}
        {v("user")}
        {w(" = ")}
        {k("await ")}
        {tp("User")}
        {w(".")}
        {f("findOne")}
        {w("({ ")}
        {v("email")}
        {w(" });")}
        {"\n"}
        {"\n"}
        {"  "}
        {k("if ")}
        {w("(!")}
        {v("user")}
        {w(" || !(")}
        {k("await ")}
        {f("compare")}
        {w("(")}
        {v("password")}
        {w(", ")}
        {v("user")}
        {w(".")}
        {v("hash")}
        {w("))) {")}
        {"\n"}
        {"    "}
        {k("return ")}
        {v("res")}
        {w(".")}
        {f("status")}
        {w("(")}
        {c("401")}
        {w(").")}
        {f("json")}
        {w("({")}
        {v("error")}
        {w(": ")}
        {s('"Invalid auth"')}
        {w("});")}
        {"\n"}
        {"  "}
        {w("}")}
        {"\n"}
        {"\n"}
        {"  "}
        {k("const ")}
        {v("token")}
        {w(" = ")}
        {f("signJwt")}
        {w("({ ")}
        {v("id")}
        {w(": ")}
        {v("user")}
        {w(".")}
        {v("id")}
        {w(" });")}
        {"\n"}
        {"  "}
        {v("res")}
        {w(".")}
        {f("json")}
        {w("({ ")}
        {v("token")}
        {w(" });")}
        {"\n"}
        {w("});")}
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
        {tp("HttpSecurity ")}
        {v("http")}
        {w(")")}
        {"\n"}
        {"      "}
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
        {s('"/api/public/**"')}
        {w(").")}
        {f("permitAll")}
        {w("()")}
        {"\n"}
        {"      "}
        {w(".")}
        {f("anyRequest")}
        {w("().")}
        {f("authenticated")}
        {w("()")}
        {"\n"}
        {"      "}
        {w(".")}
        {k("and")}
        {w("().")}
        {f("addFilterBefore")}
        {w("(")}
        {"\n"}
        {"        "}
        {v("jwtFilter")}
        {w(", ")}
        {tp("UsernamePasswordAuthFilter")}
        {w(".class)")}
        {"\n"}
        {"      "}
        {w(".")}
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
    lang: "TypeScript / Angular",
    code: (
      <pre>
        {c("@Injectable")}
        {w("({ ")}
        {v("providedIn")}
        {w(": ")}
        {s("'root'")}
        {w(" })")}
        {"\n"}
        {k("export class ")}
        {tp("DataService")}
        {w(" {")}
        {"\n"}
        {"  "}
        {k("private ")}
        {v("apiUrl")}
        {w(" = ")}
        {s("'https://api.example.com'")}
        {w(";")}
        {"\n"}
        {"\n"}
        {"  "}
        {f("constructor")}
        {w("(")}
        {k("private ")}
        {v("http")}
        {w(": ")}
        {tp("HttpClient")}
        {w(") {}")}
        {"\n"}
        {"\n"}
        {"  "}
        {f("fetchAnalytics")}
        {w("(): ")}
        {tp("Observable")}
        {w("<")}
        {tp("AnalyticsData")}
        {w("> {")}
        {"\n"}
        {"    "}
        {k("return this")}
        {w(".")}
        {v("http")}
        {w(".")}
        {f("get")}
        {w("<")}
        {tp("AnalyticsData")}
        {w(">(")}
        {"\n"}
        {"      "}
        {w("`$")}
        {w("{")}
        {k("this")}
        {w(".")}
        {v("apiUrl")}
        {w("}")}
        {s("/analytics")}
        {w("`")}
        {"\n"}
        {"    "}
        {w(").")}
        {f("pipe")}
        {w("(")}
        {"\n"}
        {"      "}
        {f("retry")}
        {w("(")}
        {c("3")}
        {w("),")}
        {"\n"}
        {"      "}
        {f("catchError")}
        {w("(")}
        {k("this")}
        {w(".")}
        {f("handleError")}
        {w(")")}
        {"\n"}
        {"    "}
        {w(");")}
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
        {k("import ")}
        {w("{ ")}
        {v("createContext")}
        {w(", ")}
        {v("useContext")}
        {w(" } ")}
        {k("from ")}
        {s("'react'")}
        {w(";")}
        {"\n"}
        {"\n"}
        {k("const ")}
        {v("ThemeContext")}
        {w(" = ")}
        {f("createContext")}
        {w("<")}
        {tp("ThemeType")}
        {w(">({")}
        {"\n"}
        {"  "}
        {v("theme")}
        {w(": ")}
        {s("'dark'")}
        {w(", ")}
        {f("toggleTheme")}
        {w(": () => {}")}
        {"\n"}
        {w("});")}
        {"\n"}
        {"\n"}
        {k("export const ")}
        {tp("ThemeProvider")}
        {w(" = ({ ")}
        {v("children")}
        {w(" }) => {")}
        {"\n"}
        {"  "}
        {k("const ")}
        {w("[")}
        {v("theme")}
        {w(", ")}
        {v("setTheme")}
        {w("] = ")}
        {f("useState")}
        {w("(")}
        {s("'dark'")}
        {w(");")}
        {"\n"}
        {"\n"}
        {"  "}
        {k("const ")}
        {f("toggleTheme")}
        {w(" = () => {")}
        {"\n"}
        {"    "}
        {f("setTheme")}
        {w("(")}
        {v("prev")}
        {w(" => ")}
        {v("prev")}
        {w(" === ")}
        {s("'dark'")}
        {w(" ? ")}
        {s("'light'")}
        {w(" : ")}
        {s("'dark'")}
        {w(");")}
        {"\n"}
        {"  "}
        {w("};")}
        {"\n"}
        {"\n"}
        {"  "}
        {k("return ")}
        {w("(")}
        {"\n"}
        {"    "}
        {w("<")}
        {tp("ThemeContext.Provider")}
        {w(" ")}
        {v("value")}
        {w("={{ ")}
        {v("theme")}
        {w(", ")}
        {v("toggleTheme")}
        {w(" }}>")}
        {"\n"}
        {"      "}
        {w("{")}
        {v("children")}
        {w("}")}
        {"\n"}
        {"    "}
        {w("</")}
        {tp("ThemeContext.Provider")}
        {w(">")}
        {"\n"}
        {"  "}
        {w(");")}
        {"\n"}
        {w("};")}
      </pre>
    ),
  },
  {
    lang: "JavaScript / Node.js",
    code: (
      <pre>
        {k("const ")}
        {f("authMiddleware")}
        {w(" = (")}
        {v("req")}
        {w(", ")}
        {v("res")}
        {w(", ")}
        {v("next")}
        {w(") => {")}
        {"\n"}
        {"  "}
        {k("const ")}
        {v("authHeader")}
        {w(" = ")}
        {v("req")}
        {w(".")}
        {v("headers")}
        {w("[")}
        {s("'authorization'")}
        {w("];")}
        {"\n"}
        {"  "}
        {k("const ")}
        {v("token")}
        {w(" = ")}
        {v("authHeader")}
        {w(" && ")}
        {v("authHeader")}
        {w(".")}
        {f("split")}
        {w("(")}
        {s("' '")}
        {w(")[")}
        {c("1")}
        {w("];")}
        {"\n"}
        {"\n"}
        {"  "}
        {k("if ")}
        {w("(")}
        {v("token")}
        {w(" == ")}
        {k("null")}
        {w(") ")}
        {k("return ")}
        {v("res")}
        {w(".")}
        {f("sendStatus")}
        {w("(")}
        {c("401")}
        {w(");")}
        {"\n"}
        {"\n"}
        {"  "}
        {v("jwt")}
        {w(".")}
        {f("verify")}
        {w("(")}
        {v("token")}
        {w(", ")}
        {v("process")}
        {w(".")}
        {v("env")}
        {w(".")}
        {v("TOKEN_SECRET")}
        {w(", (")}
        {v("err")}
        {w(", ")}
        {v("user")}
        {w(") => {")}
        {"\n"}
        {"    "}
        {k("if ")}
        {w("(")}
        {v("err")}
        {w(") ")}
        {k("return ")}
        {v("res")}
        {w(".")}
        {f("sendStatus")}
        {w("(")}
        {c("403")}
        {w(");")}
        {"\n"}
        {"    "}
        {v("req")}
        {w(".")}
        {v("user")}
        {w(" = ")}
        {v("user")}
        {w(";")}
        {"\n"}
        {"    "}
        {f("next")}
        {w("();")}
        {"\n"}
        {"  "}
        {w("});")}
        {"\n"}
        {w("};")}
      </pre>
    ),
  },
  {
    lang: "Python / FastAPI",
    code: (
      <pre>
        {k("class ")}
        {tp("UserCreate")}
        {w("(")}
        {tp("BaseModel")}
        {w("):")}
        {"\n"}
        {"    "}
        {v("email")}
        {w(": ")}
        {tp("EmailStr")}
        {"\n"}
        {"    "}
        {v("password")}
        {w(": ")}
        {tp("str")}
        {"\n"}
        {"\n"}
        {k("class ")}
        {tp("UserResponse")}
        {w("(")}
        {tp("BaseModel")}
        {w("):")}
        {"\n"}
        {"    "}
        {v("id")}
        {w(": ")}
        {tp("int")}
        {"\n"}
        {"    "}
        {v("email")}
        {w(": ")}
        {tp("EmailStr")}
        {"\n"}
        {"    "}
        {v("is_active")}
        {w(": ")}
        {tp("bool")}
        {"\n"}
        {"\n"}
        {"    "}
        {k("class ")}
        {tp("Config")}
        {w(":")}
        {"\n"}
        {"        "}
        {v("orm_mode")}
        {w(" = ")}
        {c("True")}
        {"\n"}
        {"\n"}
        {c("@app")}
        {w(".")}
        {f("post")}
        {w("(")}
        {s('"/users/"')}
        {w(", ")}
        {v("response_model")}
        {w("=")}
        {tp("UserResponse")}
        {w(")")}
        {"\n"}
        {k("def ")}
        {f("create_user")}
        {w("(")}
        {v("user")}
        {w(": ")}
        {tp("UserCreate")}
        {w(", ")}
        {v("db")}
        {w(": ")}
        {tp("Session")}
        {w(" = ")}
        {f("Depends")}
        {w("(")}
        {v("get_db")}
        {w(")):")}
        {"\n"}
        {"    "}
        {v("db_user")}
        {w(" = ")}
        {f("get_user_by_email")}
        {w("(")}
        {v("db")}
        {w(", ")}
        {v("email")}
        {w("=")}
        {v("user")}
        {w(".")}
        {v("email")}
        {w(")")}
        {"\n"}
        {"    "}
        {k("if ")}
        {v("db_user")}
        {w(":")}
        {"\n"}
        {"        "}
        {k("raise ")}
        {tp("HTTPException")}
        {w("(")}
        {v("status_code")}
        {w("=")}
        {c("400")}
        {w(", ")}
        {v("detail")}
        {w("=")}
        {s('"Email registered"')}
        {w(")")}
        {"\n"}
        {"    "}
        {k("return ")}
        {f("create_user_impl")}
        {w("(")}
        {v("db")}
        {w("=")}
        {v("db")}
        {w(", ")}
        {v("user")}
        {w("=")}
        {v("user")}
        {w(")")}
      </pre>
    ),
  },
];
