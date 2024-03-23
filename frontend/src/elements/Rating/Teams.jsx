import teamsForRatings from "../../features/teamsForRating";

//todo #22 Добавить фильтр по дате
//todo #23 Добавить фильтр по региону
//todo #24 Сделать another-weeks раскрывающимся по нажатию

const Teams = () => {
  const sortOfTeam = teamsForRatings.sort(
    (team1, team2) => team2.ratings.march11 - team1.ratings.march11
  );

  return (
    <div className="table-body">
      {sortOfTeam.map((team, index) => {
        const pathToLogo = process.env.PUBLIC_URL + "/logos/" + team.logo;

        return (
          <div className="team" key={index}>
            <div className="current-week">
              <div className="position">{index + 1}</div>
              <div className="teamname">
                <div>
                  <img src={pathToLogo} alt="" />
                </div>
                <div>{team.name}</div>
              </div>
              <div className="team-region">{team.region}</div>
              <div className="team-rating">
                {Math.floor(team.ratings.march11)}
              </div>
            </div>
            <div className="another-weeks-flex">
                <div>
                    <div className="rating-date">February 12</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.february12) !== 0 ? Math.floor(team.ratings.february12) : "Вне топ-30" }</div>
                </div>
                <div>
                    <div className="rating-date">February 19</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.february19) !== 0 ? Math.floor(team.ratings.february19) : "Вне топ-30"}</div>
                </div>
                <div>
                    <div className="rating-date">February 26</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.february26) !== 0 ? Math.floor(team.ratings.february26) : "Вне топ-30"}</div>
                </div>
                <div>
                    <div className="rating-date">March 4</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.march4) !== 0 ? Math.floor(team.ratings.march4) : "Вне топ-30"}</div>
                </div>
                <div>
                    <div className="rating-date">March 11</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.march11) !== 0 ? Math.floor(team.ratings.march11) : "Вне топ-30"}</div>
                </div>
                
                
                
                
                
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Teams;
