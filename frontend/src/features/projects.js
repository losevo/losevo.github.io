const projects = [
  {
    name: "RSS-агрегатор",
    description: [
      `Сервис для агрегации RSS-потоков, с помощью которого удобно
            читать различные источники. Позволяет добавлять неограниченное
            количество лент, сам их обновляет и добавляет записи в общий
            поток.`,
      `Учебный проект, который был написан на чистом JS, а теперь
            перенесён на React. Его изначальную реализацию можно
            посмотреть на GitHub.`,
    ],
    technologies: [
      "React",
      "HTML",
      "CSS",
      "Redux-toolkit",
      "React Hook Form",
      "yup",
      "i18next",
    ],
    links: {
      linkToGithub: "https://github.com/losevo/frontend-project-11",
      linkToProject: "rss",
    },
  },
  {
    name: "Рейтинги по CS2",
    description: [
      `Верстка рейтинга по CS2 на основе Elo.`,
      `С момента перехода киберспортивной сцены с CSGO на CS2 считал рейтинг 
      команд. В данный момент, посчитано порядка трёх тысяч сыгранных матчей.
       Текущий рейтинг и разбивка по неделе в этом мини-проекте.`,
    ],
    technologies: ["React", "HTML", "CSS", "Redux-toolkit", "classnames"],
    links: {
      linkToGithub: null,
      linkToProject: "rating",
    },
  },
  {
    name: "Вёрстка макета для тестового задания",
    description: [
      `Небольшая вёрстка макета с последовательным появлением элементов`,
      `Проект задеплоил на Vercel, а код можно посмотреть на GitHub.`
    ],
    technologies: ["React", "HTML", "CSS", "Redux-toolkit", "grid", "JS-анимация"],
    links: {
      linkToGithub: 'https://github.com/losevo/test_first',
      linkToProject: "https://test-first-flame.vercel.app/",
    },
  },
  {
    name: "Карта с отображением машин",
    description: [
      `Карта, на которой отображены данные, полученные с сервера. Для данных отрисованы карточки, которые можно сортировать и удалять на фронтенд части.`,
      `Проект задеплоил на Vercel, а код можно посмотреть на GitHub.`
    ],
    technologies: ["React", "HTML", "CSS", "Redux-toolkit", "grid", "JS-анимация"],
    links: {
      linkToGithub: 'https://github.com/losevo/test_glonassgps',
      linkToProject: "https://test-glonassgps.vercel.app/",
    },
  },
];

export default projects;
