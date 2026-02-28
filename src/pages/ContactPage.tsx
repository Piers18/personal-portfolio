import { useState } from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa6";
import { SiDevdotto } from "react-icons/si";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could use axios to send the form data
    setTimeout(() => setSubmitted(false), 3000);
  };

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const codePreview = [
    {
      num: 1,
      content: (
        <>
          <span style={{ color: "var(--syntax-keyword)" }}>const</span>{" "}
          <span style={{ color: "var(--syntax-variable)" }}>button</span> =
          document.
          <span style={{ color: "var(--syntax-function)" }}>querySelector</span>
          (<span style={{ color: "var(--syntax-string)" }}>'#sendBtn'</span>);
        </>
      ),
    },
    { num: 2, content: "" },
    {
      num: 3,
      content: (
        <>
          <span style={{ color: "var(--syntax-keyword)" }}>const</span>{" "}
          <span style={{ color: "var(--syntax-variable)" }}>message</span> ={" "}
          {"{"}
        </>
      ),
    },
    {
      num: 4,
      content: (
        <>
          &nbsp;&nbsp;
          <span style={{ color: "var(--syntax-variable)" }}>name</span>:{" "}
          <span style={{ color: "var(--syntax-string)" }}>
            "{formData.name || "Your Name"}"
          </span>
          ,
        </>
      ),
    },
    {
      num: 5,
      content: (
        <>
          &nbsp;&nbsp;
          <span style={{ color: "var(--syntax-variable)" }}>email</span>:{" "}
          <span style={{ color: "var(--syntax-string)" }}>
            "{formData.email || ""}"
          </span>
          ,
        </>
      ),
    },
    {
      num: 6,
      content: (
        <>
          &nbsp;&nbsp;
          <span style={{ color: "var(--syntax-variable)" }}>message</span>:{" "}
          <span style={{ color: "var(--syntax-string)" }}>
            "{formData.message || ""}"
          </span>
          ,
        </>
      ),
    },
    {
      num: 7,
      content: (
        <>
          &nbsp;&nbsp;
          <span style={{ color: "var(--syntax-variable)" }}>date</span>:{" "}
          <span style={{ color: "var(--syntax-string)" }}>"{dateStr}"</span>
        </>
      ),
    },
    { num: 8, content: "}" },
    { num: 9, content: "" },
    {
      num: 10,
      content: (
        <>
          button.
          <span style={{ color: "var(--syntax-function)" }}>
            addEventListener
          </span>
          (<span style={{ color: "var(--syntax-string)" }}>'click'</span>, ()
          =&gt; {"{"}
        </>
      ),
    },
    {
      num: 11,
      content: (
        <>
          &nbsp;&nbsp;form.
          <span style={{ color: "var(--syntax-function)" }}>send</span>
          (message);
        </>
      ),
    },
    { num: 12, content: "})" },
  ];

  return (
    <div className="contact-page">
      {/* Contact sidebar */}
      <div className="contact-sidebar">
        <div className="sidebar__header sidebar__header--open">
          <FaChevronRight />
          <span>contacts</span>
        </div>

        <div className="file-tree">
          <div className="file-tree__item file-tree__item--nested">
            <span className="file-tree__icon file-tree__icon--mail">
              <FaEnvelope />
            </span>
            <span>user@gmail.com</span>
          </div>
          <div className="file-tree__item file-tree__item--nested">
            <span className="file-tree__icon file-tree__icon--phone">
              <FaPhone />
            </span>
            <span>+51 999 999 999</span>
          </div>
        </div>

        <div className="sidebar__header sidebar__header--open">
          <FaChevronRight />
          <span>find-me-also-in</span>
        </div>

        <div className="file-tree">
          <div className="file-tree__item file-tree__item--nested">
            <span className="file-tree__icon" style={{ color: "#ff0000" }}>
              <FaYoutube />
            </span>
            <span>YouTube</span>
          </div>
          <div className="file-tree__item file-tree__item--nested">
            <span
              className="file-tree__icon"
              style={{ color: "var(--text-secondary)" }}
            >
              <SiDevdotto />
            </span>
            <span>dev.to</span>
          </div>
          <div className="file-tree__item file-tree__item--nested">
            <span className="file-tree__icon" style={{ color: "#e4405f" }}>
              <FaInstagram />
            </span>
            <span>Instagram</span>
          </div>
          <div className="file-tree__item file-tree__item--nested">
            <span className="file-tree__icon" style={{ color: "#9146ff" }}>
              <FaTwitch />
            </span>
            <span>Twitch</span>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="contact-main">
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="name">
                _name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="contact-form__input"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="email">
                _email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="contact-form__input"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="message">
                _message:
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-form__textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="your message here ..."
              />
            </div>

            <button type="submit" className="contact-form__submit">
              {submitted ? "message sent!" : "submit-message"}
            </button>
          </form>
        </div>

        {/* Code preview */}
        <div className="contact-code-section">
          <div className="contact-code">
            {codePreview.map((line) => (
              <div key={line.num} className="contact-code__line">
                <span className="contact-code__number">{line.num}</span>
                <span>{line.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
