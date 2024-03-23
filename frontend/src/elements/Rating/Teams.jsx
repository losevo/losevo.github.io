import * as cn from 'classnames';
import { changeActivePreviousWeeks } from "../../features/slices/ratingSlices";
import { useDispatch, useSelector } from 'react-redux';
//todo #22 Добавить фильтр по дате
//todo #23 Добавить фильтр по региону
//todo #25 Добавить анимацию раскрывания дополнительных данных

const Teams = () => {
    const teams = useSelector((state) => state.rating.ratings);
    const dispatch = useDispatch();

  //const sortOfTeam = teams.sort(
   // (team1, team2) => team2.ratings.march4 - team1.ratings.march4);

   
  return (
    <div className="table-body">
      {teams.map((team, index) => {

        const pathToLogo = process.env.PUBLIC_URL + "/logos/" + team.logo;

        const teamClass = cn({
            'another-weeks-flex': team.active,
            'another-weeks-none': !team.active,
        })

        return (
          <div className="team" key={index} >
            <div className="current-week" onClick={() => dispatch(changeActivePreviousWeeks(team))}>
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
            <div className={teamClass}>
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
