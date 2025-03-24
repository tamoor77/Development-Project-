import { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from local storage (data entry page)
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  // Drag and Drop Handler
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={projects} strategy={verticalListSortingStrategy}>
          <div className="projects-container">
            {projects.length > 0 ? (
              projects.map((project) => <ProjectCard key={project.id} {...project} />)
            ) : (
              <p>No projects added yet.</p>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  );
};

export default Projects;

/* ✅ Light Themed CSS */
const projectStyles = `
  .projects-section {
    background: white;
    color: black;
    padding: 80px 20px;
    text-align: center;
  }

  .projects-section h2 {
    font-size: 2.5rem;
    color: #4db5ff;
    margin-bottom: 20px;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1000px;
    margin: auto;
  }

  .projects-container p {
    color: #555;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .projects-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = projectStyles;
document.head.appendChild(styleSheet);