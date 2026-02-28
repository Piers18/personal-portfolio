import { useState } from "react";
import {
  FaChevronRight,
  FaFolder,
  FaFolderOpen,
  FaEnvelope,
  FaPhone,
  FaGamepad,
  FaBriefcase,
  FaUser,
  FaStar,
} from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";

interface FileItem {
  id: string;
  name: string;
  type: "folder" | "file";
  icon?: string;
  children?: FileItem[];
  content?: string[];
}

const personalInfo: FileItem[] = [
  {
    id: "bio",
    name: "bio",
    type: "folder",
    children: [
      {
        id: "bio-file",
        name: "about-me",
        type: "file",
        content: [
          "/**",
          " * About me",
          " * Bachiller en Ingeniería con enfoque",
          " * en Computer Science, especializado en",
          " * desarrollo Full Stack (Java/Angular).",
          " *",
          " * Experiencia en despliegues en la nube",
          " * (AWS) y gestionando flujos de trabajo",
          " * en entornos empresariales.",
          " *",
          " * Apasionado por crear soluciones",
          " * escalables y robustas con Spring Boot,",
          " * Angular, PostgreSQL y Docker.",
          " */",
        ],
      },
    ],
  },
  {
    id: "interests",
    name: "interests",
    type: "folder",
    children: [
      {
        id: "interests-file",
        name: "hobbies",
        type: "file",
        content: [
          "/**",
          " * My Interests & Hobbies",
          " *",
          " * - Full Stack Development",
          " * - Cloud Architecture (AWS)",
          " * - API Design & REST Services",
          " * - DevOps & CI/CD",
          " * - Learning new technologies",
          " * - Problem solving",
          " * - Open Source",
          " */",
        ],
      },
    ],
  },
  {
    id: "education",
    name: "education",
    type: "folder",
    children: [
      {
        id: "upc",
        name: "upc",
        type: "file",
        content: [
          "/**",
          " * Universidad Peruana de Ciencias",
          " * Aplicadas (UPC)",
          " *",
          " * Carrera: Computer Science",
          " * 2024 – Actualidad",
          " */",
        ],
      },
      {
        id: "uns",
        name: "universidad-nacional-del-santa",
        type: "file",
        content: [
          "/**",
          " * Universidad Nacional del Santa",
          " *",
          " * Carrera: Ingeniería Mecánica",
          " * 2019 – 2024",
          " */",
        ],
      },
    ],
  },
];

const contacts: FileItem[] = [
  {
    id: "email",
    name: "pieroaguilaranticonajob@gmail.com",
    type: "file",
    icon: "mail",
    content: ["// Email: pieroaguilaranticonajob@gmail.com"],
  },
  {
    id: "phone",
    name: "+51 957 369 914",
    type: "file",
    icon: "phone",
    content: ["// Phone: +51 957 369 914"],
  },
];

const codeSnippets = [
  {
    user: "@piero",
    date: "Created 5 months ago",
    stars: 3,
    details: true,
    code: `function initializeModelChunk<T>(chunk: ResolvedModelChunk<T>): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`,
  },
  {
    user: "@piero",
    date: "Created 9 months ago",
    stars: 0,
    details: true,
    code: `export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}`,
  },
];

const AboutPage = () => {
  const [openFolders, setOpenFolders] = useState<string[]>([
    "bio",
    "education",
  ]);
  const [selectedFile, setSelectedFile] = useState<string>("bio-file");
  const [activeSection, setActiveSection] = useState<string>("personal");

  const toggleFolder = (folderId: string) => {
    setOpenFolders((prev) =>
      prev.includes(folderId)
        ? prev.filter((id) => id !== folderId)
        : [...prev, folderId],
    );
  };

  const getCurrentContent = (): string[] => {
    const allItems = [...personalInfo, ...contacts];
    const findContent = (items: FileItem[]): string[] | undefined => {
      for (const item of items) {
        if (item.id === selectedFile && item.content) return item.content;
        if (item.children) {
          const found = findContent(item.children);
          if (found) return found;
        }
      }
      return undefined;
    };
    return findContent(allItems) || ["// Select a file to view its contents"];
  };

  const getFileName = (): string => {
    const allItems = [...personalInfo, ...contacts];
    const findName = (items: FileItem[]): string | undefined => {
      for (const item of items) {
        if (item.id === selectedFile) return item.name;
        if (item.children) {
          const found = findName(item.children);
          if (found) return found;
        }
      }
      return undefined;
    };
    return findName(allItems) || "untitled";
  };

  const content = getCurrentContent();

  return (
    <div className="about-page">
      {/* Icon sidebar */}
      <div style={{ display: "flex" }}>
        <div className="about-sidebar__icons">
          <button
            className={`about-sidebar__icon ${activeSection === "personal" ? "about-sidebar__icon--active" : ""}`}
            onClick={() => setActiveSection("personal")}
            title="Personal Info"
          >
            <FaUser />
          </button>
          <button
            className={`about-sidebar__icon ${activeSection === "professional" ? "about-sidebar__icon--active" : ""}`}
            onClick={() => setActiveSection("professional")}
            title="Professional Info"
          >
            <FaBriefcase />
          </button>
          <button
            className={`about-sidebar__icon ${activeSection === "hobbies" ? "about-sidebar__icon--active" : ""}`}
            onClick={() => setActiveSection("hobbies")}
            title="Hobbies"
          >
            <FaGamepad />
          </button>
        </div>

        {/* File tree sidebar */}
        <div className="sidebar">
          <div
            className="sidebar__header sidebar__header--open"
            onClick={() => {}}
          >
            <FaChevronRight />
            <span>personal-info</span>
          </div>

          <div className="file-tree">
            {personalInfo.map((folder) => (
              <div key={folder.id}>
                <div
                  className="file-tree__item file-tree__item--folder"
                  onClick={() => toggleFolder(folder.id)}
                >
                  <span className="file-tree__icon file-tree__icon--folder">
                    {openFolders.includes(folder.id) ? (
                      <FaFolderOpen />
                    ) : (
                      <FaFolder />
                    )}
                  </span>
                  <span>{folder.name}</span>
                </div>

                {openFolders.includes(folder.id) &&
                  folder.children?.map((file) => (
                    <div
                      key={file.id}
                      className={`file-tree__item file-tree__item--nested ${selectedFile === file.id ? "file-tree__item--active" : ""}`}
                      onClick={() => setSelectedFile(file.id)}
                    >
                      <span className="file-tree__icon file-tree__icon--file">
                        <IoMdDocument />
                      </span>
                      <span>{file.name}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <div
            className="sidebar__header sidebar__header--open"
            onClick={() => {}}
          >
            <FaChevronRight />
            <span>contacts</span>
          </div>

          <div className="file-tree">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`file-tree__item file-tree__item--nested ${selectedFile === contact.id ? "file-tree__item--active" : ""}`}
                onClick={() => setSelectedFile(contact.id)}
              >
                <span
                  className={`file-tree__icon ${contact.icon === "mail" ? "file-tree__icon--mail" : "file-tree__icon--phone"}`}
                >
                  {contact.icon === "mail" ? <FaEnvelope /> : <FaPhone />}
                </span>
                <span>{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="about-page__main">
        <div className="code-editor">
          <div className="code-editor__tabs">
            <div className="code-editor__tab code-editor__tab--active">
              <span>{getFileName()}</span>
              <span className="code-editor__tab-close">✕</span>
            </div>
          </div>

          <div className="code-editor__content">
            <div className="code-editor__lines">
              <div className="code-editor__line-numbers">
                {content.map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <div className="code-editor__code">
                {content.map((line, i) => (
                  <div key={i}>
                    {line.startsWith("/**") ||
                    line.startsWith(" *") ||
                    line.startsWith(" */") ? (
                      <span style={{ color: "var(--syntax-comment)" }}>
                        {line}
                      </span>
                    ) : line.startsWith("//") ? (
                      <span style={{ color: "var(--syntax-comment)" }}>
                        {line}
                      </span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Code snippets section */}
        <div className="snippet-section">
          <div className="snippet-section__title">
            {"// Code snippet showcase:"}
          </div>

          {codeSnippets.map((snippet, index) => (
            <div key={index} className="snippet-card">
              <div className="snippet-card__header">
                <div className="snippet-card__user">
                  <div className="snippet-card__avatar">
                    {snippet.user.charAt(1).toUpperCase()}
                  </div>
                  <div>
                    <div className="snippet-card__name">{snippet.user}</div>
                    <div className="snippet-card__date">{snippet.date}</div>
                  </div>
                </div>
                <div className="snippet-card__meta">
                  {snippet.details && (
                    <span className="snippet-card__meta-item">details</span>
                  )}
                  <span className="snippet-card__meta-item">
                    <FaStar style={{ color: "var(--text-muted)" }} />{" "}
                    {snippet.stars} stars
                  </span>
                </div>
              </div>
              <pre className="snippet-card__code">
                <code>{snippet.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
