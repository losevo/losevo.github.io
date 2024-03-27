import { useDispatch, useSelector } from "react-redux";
import { dates, regions } from "../../features/datesAndRegion";
import {
  changeActiveRegion,
  changeActiveDate,
} from "../../features/slices/ratingSlices";
import * as cn from 'classnames';
import { useState } from "react";

const FiltersAndSort = () => {
    const [isActiveFilter, setActiveFilter] = useState(false);
  const dispatch = useDispatch();
  const date = useSelector((state) => state.rating.activeDate);
  const listOfDates = Object.values(dates).reverse();

  const changeToPreviousWeek = () => {
    const index = listOfDates.findIndex((x) => x === dates[date]) - 1;
    if (index < 0) return;
    const week = listOfDates[index];
    const prevWeek = week.split(" ").join("").toLowerCase();
    dispatch(changeActiveDate(prevWeek));
  };

  const changeToNextWeek = () => {
    const index = listOfDates.findIndex((x) => x === dates[date]) + 1;
    if (index >= listOfDates.length) return;
    const week = listOfDates[index];
    const nextWeek = week.split(" ").join("").toLowerCase();
    dispatch(changeActiveDate(nextWeek));
  };

  const classesFilter = cn('filter-select', {
    'active': isActiveFilter,
  })

  return (
    <div className="sort-and-filter">
      <div className={classesFilter}>
        <button
          className="select-button"
          onClick={() => setActiveFilter(!isActiveFilter)}
        >
          <span className="selected-value">Region</span>
          <span className="arrow"></span>
        </button>
        <ul className="selected-dropdown">
          {regions.map((region) => (
            <li key={region} onClick={(e) => {
                dispatch(changeActiveRegion(e.target.id));
                setActiveFilter(false);
              }}>
                <input id={region} type="radio" />
                <label htmlFor={region}>{region}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="change-current-date">
        <div className="left-arrow" onClick={changeToPreviousWeek}>
          {"<-"}
        </div>
        <div className="current-date">{dates[date]}</div>
        <div className="right-arrow" onClick={changeToNextWeek}>
          {"->"}
        </div>
      </div>
    </div>
  );
};

export default FiltersAndSort;
