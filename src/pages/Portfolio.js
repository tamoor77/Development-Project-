import { useEffect, useState } from "react";
import Navbar from "./../component/Navbar";
import Hero from "./../component/Hero";
import AboutMe from "./../component/AboutMe";
import Projects from "./../component/Projects";
import Contact from "./../component/Contact";
import Footer from "./../component/Footer";

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setPortfolioData(data);
      } catch (error) {
        console.error("Error parsing portfolio data:", error);
        setPortfolioData(null);
      }
    }
  }, []);

  if (!portfolioData)
    return (
      <div className="loading">
        <div className="spinner"></div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <>
      <Navbar />
      <Hero name={portfolioData.name || "Your Name"} bio={portfolioData.bio || "A brief bio about yourself."} />
      <AboutMe 
      name={portfolioData.name || "Your Name"}
        profilePic={portfolioData.profilePic || "default-profile.jpg"} 
        bio={portfolioData.bio || "Tell us about yourself."} 
        description={portfolioData.description || "Description of your skillset and interests."} 
        skills={portfolioData.skills ? portfolioData.skills.split(",") : []} 
      />
      <Projects projects={portfolioData.projects || []} />
      <Contact />
      <Footer socialLinks={portfolioData.socialLinks || []} />
    </>
  );
}

export default Portfolio;


/* ✅ CSS for Loading Spinner */
const styles = `
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 1.5rem;
    color: #4db5ff;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-top: 5px solid #4db5ff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
