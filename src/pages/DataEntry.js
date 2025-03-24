import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaPaperPlane } from "react-icons/fa";

function DataEntry() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePic: "",
    skills: "",
    description: "",
    projects: [{ title: "", description: "", image: "", github: "" }],
    socialLinks: [{ name: "", url: "" }],
  });

  // Convert uploaded image to Base64
  const handleImageUpload = (e, field, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => {
          if (index !== undefined) {
            const updatedProjects = [...prev.projects];
            updatedProjects[index].image = reader.result;
            return { ...prev, projects: updatedProjects };
          } else {
            return { ...prev, [field]: reader.result };
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e, field, index) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (index !== undefined) {
        const updatedList = [...prev[field]];
        updatedList[index][name] = value;
        return { ...prev, [field]: updatedList };
      } else {
        return { ...prev, [field]: value };
      }
    });
  };

  const addField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [
        ...prev[field],
        field === "projects"
          ? { title: "", description: "", image: "", github: "" }
          : { name: "", url: "" },
      ],
    }));
  };

  const handleSubmit = () => {
    const { projects, ...portfolioData } = formData;
    localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
    localStorage.setItem("projects", JSON.stringify(projects));
    navigate("/portfolio");
  };

  return (
    <div className="data-entry">
      <h2>Create Your Portfolio</h2>

      <div className="form-container">
        {/* Left Section */}
        <div className="form-section">
          <h3>Basic Information</h3>
          <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => handleChange(e, "name")} />
          <textarea placeholder="Short Bio" value={formData.bio} onChange={(e) => handleChange(e, "bio")} />

          {/* Profile Picture Upload */}
          <label className="upload-label">
            Profile Picture
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "profilePic")} />
          </label>
          {formData.profilePic && <img src={formData.profilePic} alt="Profile" className="preview-image" />}

          <input type="text" placeholder="Skills (comma separated)" value={formData.skills} onChange={(e) => handleChange(e, "skills")} />
          <textarea placeholder="Describe Yourself" value={formData.description} onChange={(e) => handleChange(e, "description")} />
        </div>

        {/* Right Section */}
        <div className="form-section">
          <h3>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index} className="project-input">
              <input type="text" name="title" placeholder="Project Title" value={project.title} onChange={(e) => handleChange(e, "projects", index)} />
              <textarea name="description" placeholder="Project Description" value={project.description} onChange={(e) => handleChange(e, "projects", index)} />

              {/* Project Image Upload */}
              <label className="upload-label">
                Project Image
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "projects", index)} />
              </label>
              {project.image && <img src={project.image} alt="Project" className="preview-image" />}

              <input type="text" name="github" placeholder="GitHub Link" value={project.github} onChange={(e) => handleChange(e, "projects", index)} />
            </div>
          ))}
          <button className="add-btn" onClick={() => addField("projects")}>
            <FaPlus /> Add Project
          </button>

          <h3>Social Links</h3>
          {formData.socialLinks.map((link, index) => (
            <div key={index} className="social-input">
              <input type="text" name="name" placeholder="Platform Name" value={link.name} onChange={(e) => handleChange(e, "socialLinks", index)} />
              <input type="text" name="url" placeholder="Profile URL" value={link.url} onChange={(e) => handleChange(e, "socialLinks", index)} />
            </div>
          ))}
          <button className="add-btn" onClick={() => addField("socialLinks")}>
            <FaPlus /> Add Social Media
          </button>
        </div>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        <FaPaperPlane /> Generate Portfolio
      </button>
    </div>
  );
}

export default DataEntry;

/* ✅ **Dark-Themed Two-Column CSS** */
const css = `
.data-entry {
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
  background: #2c2f36;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
}

h2 {
  color: #ffcc00;
  margin-bottom: 25px;
  font-weight: bold;
}

.form-container {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.form-section {
  flex: 1;
  padding: 20px;
  background: #383c44;
  border-radius: 10px;
}

h3 {
  color: #ffcc00;
  margin-bottom: 20px;
}

input, textarea {
  width: 90%;
  padding: 14px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  outline: none;
  font-size: 16px;
}

input:focus, textarea:focus {
  border: 2px solid #4db5ff;
  box-shadow: 0px 0px 8px rgba(77, 181, 255, 0.6);
}

.upload-label {
  font-weight: bold;
  display: block;
  margin: 10px 0;
}

.preview-image {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  border: 3px solid #ffcc00;
}

button {
  padding: 14px;
  margin-top: 10px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.add-btn {
  background: #ffcc00;
  color: black;
}

.submit-btn {
  background: #4db5ff;
  color: white;
  margin-top: 25px;
}

button:hover {
  opacity: 0.85;
}

`;

// Inject CSS into the document
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);
