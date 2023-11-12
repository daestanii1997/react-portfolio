import {useState, useEffect} from 'react';
import Project from '../components/Project';
import { Projects, allProjects} from '../utils/projects';
const { image, title, github, deployed} = allProjects;
import "../components/style.css";

export default function Portfolio() {

  const [projects, setProjects] = useState([]);

  const oneProject = [];
  // for loop to display each project
  for (let i = 0; i< title.length; i++) {
    oneProject.push(new Projects(i+1, image[i] ,title[i], github[i], deployed[i] ))
  }

  useEffect(() => {
    setProjects(oneProject);
  }, []);

    return (
      <div className="project-section">
        <Project projects={projects} />
      </div>
    );
  }
  