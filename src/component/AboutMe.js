import React from "react";

function AboutMe({ profilePic = "default-profile.jpg", skills = [], bio = "No bio provided.", description = "No description provided" }) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Profile Image Section */}
        <div className="image-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>

        {/* Text Content Section */}
        <div className="text-container">
          <h2>About Me</h2>
          <p className="description">{description}</p>

          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-list">
              {skills.length > 0 ? (
                skills.map((skill, index) => <span key={index} className="skill-item">{skill}</span>)
              ) : (
                <span className="no-skills">No skills listed.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

/* ✅ New Light Themed CSS */
const styles = `
  .about {
    background: white;
    padding: 80px 20px;
    color: black;
    text-align: center;
  }

  .about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .about-container:hover {
    transform: scale(1.02);
  }

  /* Image Container */
  .image-container {
    flex: 1;
    text-align: center;
  }

  .profile-pic {
    width: 180px;
    height: 180px;
    border-radius: 12px;
    object-fit: cover;
    border: 5px solid #4db5ff;
    box-shadow: 0px 0px 20px rgba(77, 181, 255, 0.5);
  }

  /* Text Content */
  .text-container {
    flex: 2;
    text-align: left;
    padding: 20px;
  }

  .about h2 {
    color: #4db5ff;
    font-size: 32px;
    margin-bottom: 15px;
  }

  .description {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    opacity: 0.9;
    margin-bottom: 20px;
  }

  /* Skills Section */
  .skills-section h3 {
    font-size: 20px;
    color: #4db5ff;
    margin-bottom: 10px;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-item {
    background: #e3f2fd;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: black;
    border: 1px solid #4db5ff;
    transition: all 0.3s ease;
    box-shadow: 0px 2px 6px rgba(77, 181, 255, 0.2);
  }

  .skill-item:hover {
    background: #4db5ff;
    color: white;
    transform: translateY(-3px);
  }

  .no-skills {
    font-size: 14px;
    color: #666;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .about-container {
      flex-direction: column;
      text-align: center;
      padding: 20px;
    }

    .image-container {
      margin-bottom: 20px;
    }

    .profile-pic {
      width: 140px;
      height: 140px;
    }

    .text-container {
      text-align: center;
    }

    .about h2 {
      font-size: 26px;
    }

    .description {
      font-size: 14px;
    }

    .skills-section h3 {
      font-size: 18px;
    }

    .skill-item {
      font-size: 12px;
      padding: 8px 12px;
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
