import "./style.css";

export default function Project(props) {
  return (
    <>
      {/* Mapping the projects data to use on the portfolio */}
      {props.projects.map((project) => (
        // eslint-disable-next-line react/jsx-key
        <section className="border">
          <div key={project.id} className="project-container">
            <a href={project.deployed}>
              <img className="project-image" src={project.image}></img>
            </a>
            <h3 className="project-title">{project.title}</h3>
            <div style={{ backgroundColor: "transparent" }}>
              <a href={project.deployed}>
                <button style={{ marginRight: "5px" }}>Deployed</button>
              </a>
              <a href={project.github}>
                <button>Github</button>
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
