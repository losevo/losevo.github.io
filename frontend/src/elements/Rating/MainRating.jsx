import { useEffect } from "react";
import "./MainRating.css";
import Teams from "./Teams";
import FiltersAndSort from "./FiltersAndSort";
import { useSelector } from "react-redux";

const MainRating = () => {
    const state = useSelector((state) => state.rating);
    const { activeRegion, activeDate } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rating">
      <FiltersAndSort region={activeRegion}/>
      <div className="table">
        <div className="table-head">
          <div className="position">#</div>
          <div className="teamname">Team</div>
          <div className="team-region">Region</div>
          <div className="team-rating">Rating</div>
        </div>
        <Teams date={activeDate} />
      </div>
    </div>
  );
};

export default MainRating;
