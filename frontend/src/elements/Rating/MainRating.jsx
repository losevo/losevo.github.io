import { useEffect } from "react";
import "./MainRating.css";
import Teams from "./Teams";
import FiltersAndSort from "./FiltersAndSort";

const MainRating = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rating">
      <div className="table">
      <FiltersAndSort />
        <div className="table-head">
          <div className="position">#</div>
          <div className="teamname">Team</div>
          <div className="team-region">Region</div>
          <div className="team-rating">Rating</div>
        </div>
        <Teams />
      </div>
    </div>
  );
};

export default MainRating;
