import "./style.css";

export default function Project(props) {
  return (
    <>
      {/* Mapping the projects data to use on the portfolio */}
      {props.projects.map((project) => (
        <section className="border">
          <div key={project.id} className="project-container">
            <a href={project.deployed}>
              <img className="project-image" src={project.image}></img>
            </a>
            <h3 className="project-title">{project.title}</h3>
            <div style={{ backgroundColor: "transparent" }}>
              <button style={{ marginRight: "5px" }} href={project.deployed}>
                Deployed
              </button>
              <button href={project.github}>
                Github
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
