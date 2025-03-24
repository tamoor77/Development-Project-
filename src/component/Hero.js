import PropTypes from "prop-types";

const HeroSection = ({ name, bio }) => {
  return (
    <section id="heroo" className="hero">
      <div className="hero-container">
        <p className="welcome-text">Hey, I'm {name || "Your Name"}</p>
        <h1>Data Science Student</h1>
        <p>{bio || "I am a senior computer science student skilled in web development and software engineering."}</p>
        <a href="#projects" className="cta-button">
          View My Projects
        </a>
      </div>
    </section>
  );
};

// Prop Type Validations
HeroSection.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
};

// Default Props for Safety
HeroSection.defaultProps = {
  name: "John Doe",
  bio: "A passionate developer eager to create amazing experiences.",
};

export default HeroSection;

/* ✅ Light Themed CSS */
const heroStyles = `
  .hero {
    background: white;
    color: black;
    text-align: left;
    padding: 120px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .hero-container {
    max-width: 700px;
    margin: auto;
    padding: 20px;
  }

  .welcome-text {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
    opacity: 0.9;
  }

  .hero h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #222;
  }

  .hero p {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #333;
    opacity: 0.9;
  }

  .cta-button {
    background: #4db5ff;
    border: none;
    color: white;
    padding: 12px 24px;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px;
    transition: 0.3s;
    display: inline-block;
  }

  .cta-button:hover {
    background: #2c9cd6;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }

    .hero p {
      font-size: 1.2rem;
    }

    .cta-button {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = heroStyles;
document.head.appendChild(styleSheet);
