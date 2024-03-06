import projects from '../features/projects.js';
import { Link } from 'react-router-dom';

// todo #3 Сделать карточки проектов горизонтальными без ограничения экрана по высоте

const Project = (props) => {
    const { name, description, technologies, links } = props.project;
    const wordForLink = 'GitHub';

    return (
        <div className='project'>
            <div className='name-of-project'>
                <h3>{name}</h3>
            </div>
            <div className='about-project'>
                {description.map((paragraph) => 
                <p>{paragraph.split(' ').map((word) => 
                word.slice(0, -1) === wordForLink ? <Link to={links.linkToGithub}>{wordForLink}.</Link> : `${word} `)}</p>)}
            </div>
            <div className="projects-tech">
                {technologies.map((tech) => <span>{tech}</span>)}
            </div>
            <div className="link-to-project">
                <Link to={links.linkToProject}>К проекту {"->"} </Link>
              </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className='projects'>
            <div className="project-h">
            <h1>Проекты</h1>
          </div>
          <div className="smalltalks-about-projects">
            <span>
              Тут будут мои учебные и не очень учебные проекты. Надеюсь, в
              какой-то момент дойду до того, что здесь будут большие и сложные
              штуки
            </span>
          </div>
          <div className='list-of-projects'>
            {projects.map((project) => <Project project={project}/>)}
        </div>
        </div>
        
    )
};

export default Projects;
