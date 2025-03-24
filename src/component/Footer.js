import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <FaFacebook size={24} />
          </a>
        </div>

        <p className="footer-note">© {new Date().getFullYear()} Portfolio Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

/* ✅ CSS (Lighter Theme) */
const css = `
  .footer {
    background: #f9f9f9;
    color: #333;
    text-align: center;
    padding: 30px 0;
    width: 100%;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .social-links {
    display: flex;
    gap: 15px;
  }

  .social-icon {
    font-size: 24px;
    color: #555;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .social-icon.github:hover {
    color: #000;
    transform: scale(1.2);
  }

  .social-icon.linkedin:hover {
    color: #0077b5;
    transform: scale(1.2);
  }

  .social-icon.twitter:hover {
    color: #1da1f2;
    transform: scale(1.2);
  }

  .social-icon.facebook:hover {
    color: #1877f2;
    transform: scale(1.2);
  }

  .footer-note {
    font-size: 13px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .footer-container {
      padding: 10px;
    }

    .social-links {
      gap: 10px;
    }

    .social-icon {
      font-size: 20px;
    }
  }
`;

// Inject styles into the document
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);
