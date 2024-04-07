import "./MainPage.css";
import Projects from "../elements/Projects";
import Greeting from "../elements/Greeting";
import AboutMe from "../elements/AboutMe";
import Contacts from "../elements/Contats";

// todo #6 Добавить модальные окна с комментариями к некоторым страницам
// todo #7 Добавить страницу с прочитанными книгами
// todo #13 Якорные ссылки должны вести к конкретным элементам, а не на страницу, где они находятся
// todo #14 Сделать подчеркивание ссылок в navbar в зависимости от элемента, где находится пользователь
//todo #28 Сделать, чтобы ссылка назад появлялась после первого перехода

const MainPage = () => {

  return (
    <div>
      <div className="main">
        <Greeting />
        <AboutMe />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default MainPage;
