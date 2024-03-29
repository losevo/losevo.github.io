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
            посмотреть на GitHub.`
        ],
        technologies: ['React', 'HTML', 'CSS', 'Redux-toolkit', 'React Hook Form', 'yup', 'i18next'],
        links: {
            linkToGithub: "https://github.com/losevo/frontend-project-11",
            linkToProject: "rss"
        }
    },
    {
        name: "Рейтинги по CS2",
        description: [
            `Верстка рейтинга по CS2 на основе Elo.`,
            `Мне было интересно это сделать, и я это сделал.`
        ],
        technologies: ['React', 'HTML', 'CSS', 'Redux-toolkit','classnames'],
        links: {
            linkToGithub: null,
            linkToProject: "rating"
        }
    }
];

export default projects;