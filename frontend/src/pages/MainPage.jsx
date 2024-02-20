import "./MainPage.css";
import Projects from "../elements/Projects";
import Greeting from "../elements/Greeting";
import AboutMe from "../elements/AboutMe";

// todo #4 Разобрать css по элементам, в которых используются классы

const MainPage = () => {

  return (
    <div>
      <div className="main">
        <Greeting />
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
};

export default MainPage;
