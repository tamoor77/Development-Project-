import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ProjectCard = ({ id, title, description, image, githubLink }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="project-card">
      <img src={image || "https://via.placeholder.com/150"} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectCard;


/* CSS */
const cardStyles = `
  .project-card {
    background: #222;
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    cursor: grab;
  }

  .project-card:hover {
    transform: scale(1.05);
  }

  .project-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
  }

  .project-card h3 {
    font-size: 1.5rem;
    margin-top: 10px;
    color: #4db5ff;
  }

  .project-card p {
    font-size: 1rem;
    margin: 10px 0;
    color: #ddd;
  }

  .project-card a {
    display: inline-block;
    background: #4db5ff;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
  }

  .project-card a:hover {
    background: #3498db;
  }
`;

// Inject styles into the document
const cardStyleSheet = document.createElement("style");
cardStyleSheet.type = "text/css";
cardStyleSheet.innerText = cardStyles;
document.head.appendChild(cardStyleSheet);
