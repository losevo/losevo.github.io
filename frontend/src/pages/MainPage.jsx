import "./MainPage.css";
import Projects from "../elements/Projects";
import Greeting from "../elements/Greeting";
import AboutMe from "../elements/AboutMe";

// todo #6 Добавить модальные окна с комментариями к некоторым страницам
// todo #7 Добавить страницу с прочитанными книгами
// todo #8 Сделать navbar с динамичными ссылками на страницу назад
// todo #9 Добавить анимации для навыков
// todo #12 Сделать контакты отдельным листом, а не в футере
// todo #13 Якорные ссылки должны вести к конкретным элементам, а не на страницу, где они находятся
// todo #14 Сделать подчеркивание ссылок в navbar в зависимости от элемента, где находится пользователь
// todo #16 Сделать страницу 404
// todo #20 Добавить рейтинг elo

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
