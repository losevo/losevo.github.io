import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  const basicSkills = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "git",
    "npm",
    "Webpack",
    "axios",
  ];
  const additionalSkills = [
    "Redux-toolkit",
    "React Router",
    "Jest",
    "Formik",
    "yup",
    "i18next",
    "WebSockets",
  ];

  return (
    <div>
      <div className="main">
        <div className="greetings">
          <div className="center-box">
            <h1 className="center-h">Привет! </h1>
            <h1> Меня зовут Дмитрий</h1>
            <p>Начинающий веб-разработчик из Санкт-Петербурга</p>
            <p>И это мой сайт-визитка:)</p>
          </div>
        </div>
        <div className="skills-page">
          <div className="center-box">
            <h1>О себе</h1>
          </div>
          <div className="part-skills-and-about">
            <div className="about">
              <span>
                Умею думать алгоритмами и{" "}
                <Link to={"https://www.codewars.com/users/losevo"}>
                  решаю каты 6-8 kyu
                </Link>
                , могу писать ООП.
              </span>{" "}
              <span>
                Изучаю профильную литературу, tg и YT-каналы, а также профильные
                журналы, статьи на Хабре и блоги на сайтах крупных компаний.
              </span>
              <p>
                <span>
                  Работал три года тренинг-менеджером. Вводил людей в компанию.
                  Обучил более 100 человек, написал 2 больших учебных курса,
                  подготовил глоссарий статей на 200+ вручную отобранных
                  материалов и проводил выездное обучение для 20 человек в
                  Москве.
                </span>
              </p>
            </div>
            <div className="skills">
              <h3> ЗНАЮ</h3>
              <div className="basic-skills">
                {basicSkills.map((skill) => (
                  <span className="basic-skill">{skill}</span>
                ))}
              </div>
              <h3>ИСПОЛЬЗУЮ</h3>
              <div className="additional-skills">
                {additionalSkills.map((skill) => (
                  <span className="additional-skill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
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
          <div className="list-of-projects">
            <div className="project">
              <div className="name-of-project">
                <h3>RSS-агрегатор</h3>
              </div>
              <div className="about-project">
                <p>
                  Сервис для агрегации RSS-потоков, с помощью которого удобно
                  читать различные источники. Позволяет добавлять неограниченное
                  количество лент, сам их обновляет и добавляет записи в общий
                  поток.
                </p>
                <p>
                  Учебный проект, который был написан на чистом JS, а теперь
                  перенесён на React. Его изначальную реализацию можно
                  посмотреть на{" "}
                  <a href="https://github.com/losevo/frontend-project-11">
                    GitHub
                  </a>
                  .
                </p>
              </div>
              <div className="projects-tech">
                <span>React</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Webpack</span>
                <span>React Hook Form</span>
                <span>yup</span>
                <span>i18next</span>
              </div>
              <div className="link-to-project">
                <Link>К проекту {"->"} </Link>
              </div>
            </div>
            <div className="project">
              <div className="name-of-project">
                <h3>Рейтинги по CS2</h3>
              </div>
              <div className="about-project">
                <p>
                  Верстка рейтинга по CS2 основе Elo.
                </p>
                <p>
                  Мне было интересно это сделать, и я это сделал.
                </p>
              </div>
              <div className="projects-tech">
                <span>React</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Webpack</span>
                <span>React Hook Form</span>
                <span>yup</span>
                <span>i18next</span>
              </div>
              <div className="link-to-project">
                <Link>К проекту {"->"} </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
