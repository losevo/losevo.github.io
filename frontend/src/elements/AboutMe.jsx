import "./AboutMe.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
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
    "React Hook Form",
    "React Router",
    "Jest",
    "Formik",
    "yup",
    "i18next",
    "WebSockets",
  ];

  return (
    <div className="skills-page" id="about">
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
              подготовил глоссарий статей на 200+ вручную отобранных материалов
              и проводил выездное обучение для 20 человек в Москве.
            </span>
          </p>
        </div>
        <div className="skills">
          <h3> ЗНАЮ</h3>
          <div className="basic-skills">
            {basicSkills.map((skill, index) => (
              <span className="basic-skill" key={index}>{skill}</span>
            ))}
          </div>
          <h3>ИСПОЛЬЗУЮ</h3>
          <div className="additional-skills">
            {additionalSkills.map((skill, index) => (
              <span className="additional-skill" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
