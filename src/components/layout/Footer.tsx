import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__label">find me in:</span>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
          aria-label="Twitter/X"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="footer__right">
        <a
          href="https://github.com/Piers18"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github"
        >
          @Piers18 <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
