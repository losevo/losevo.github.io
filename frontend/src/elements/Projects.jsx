import projects from '../data/projects.js';
import { Link } from 'react-router-dom';

// todo #2 Добавить ссылку на гитхаб в описание в зависимости от её наличия
// todo #3 Сделать карточки проектов горизонтальными без ограничения экрана по высоте

const Project = (props) => {
    console.log(props, props.project.name);
    const { name, description, technologies, links } = props.project; 

    return (
        <div className='project'>
            <div className='name-of-project'>
                <h3>{name}</h3>
            </div>
            <div className='about-project'>
                {description.map((paragraph) => <p>{paragraph}</p>)}
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
