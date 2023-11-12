import "./style.css";

export default function Project(props) {
  return (
    <section >
      {/* Mapping the projects data to use on the portfolio */}
      {props.projects.map((project) => (
        <div key={project.id} className="project-container">
          <img className="project-image" src={project.image}></img>

          <a className="project-title" href={project.deployed}>{project.title}</a>

          <a className="git-link" href={project.github}>
            <img
            style={{width: '40px'}}
              src="github-mark.png"
            ></img>
          </a>
        </div>
      ))}
    </section>
  );
}
