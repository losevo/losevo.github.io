import * as cn from 'classnames';
import { changeActivePreviousWeeks } from "../../features/slices/ratingSlices";
import { useDispatch, useSelector } from 'react-redux';

const Teams = () => {
    const teams = useSelector((state) => state.rating.ratings);
    const region = useSelector((state) => state.rating.activeRegion);
    const date = useSelector((state) => state.rating.activeDate);
    const dispatch = useDispatch();

    
    const sortOfTeam = teams.slice().filter((team) => team.ratings[date])
    .sort((team1, team2) => team2.ratings[date] - team1.ratings[date])
    .filter((team) => {
        if (region === 'ALL') return team;
        return team.region === region; 
    })
   
  return (
    <div className="table-body">
      {sortOfTeam.map((team, index) => {

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
                {Math.floor(team.ratings[date])}
              </div>
            </div>
            <div className={teamClass}>
                <div>
                    <div className="rating-date">February 12</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.february12) !== 0 && Object.hasOwn(team.ratings, 'february12') ? Math.floor(team.ratings.february12) : "Вне топ-30" }</div>
                </div>
                <div>
                    <div className="rating-date">February 19</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.february19) !== 0 && Object.hasOwn(team.ratings, 'february19') ? Math.floor(team.ratings.february19) : "Вне топ-30"}</div>
                </div>
                <div>
                    <div className="rating-date">February 26</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.february26) !== 0 && Object.hasOwn(team.ratings, 'february26') ? Math.floor(team.ratings.february26) : "Вне топ-30"}</div>
                </div>
                <div>
                    <div className="rating-date">March 4</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.march4) !== 0 && Object.hasOwn(team.ratings, 'march4') ? Math.floor(team.ratings.march4) : "Вне топ-30"}</div>
                </div>
                <div>
                    <div className="rating-date">March 11</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.march11) !== 0 && Object.hasOwn(team.ratings, 'march11') ? Math.floor(team.ratings.march11) : "Вне топ-30"}</div>
                </div>
                <div>
                    <div className="rating-date">March 18</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.march18) !== 0 && Object.hasOwn(team.ratings, 'march18') ? Math.floor(team.ratings.march18) : "Вне топ-30"}</div>
                </div>
                <div>
                    <div className="rating-date">March 25</div>
                    <div className="rating-date-value">{Math.floor(team.ratings.march25) !== 0 && Object.hasOwn(team.ratings, 'march25') ? Math.floor(team.ratings.march25) : "Вне топ-30"}</div>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Teams;
