import { useDispatch, useSelector } from "react-redux";
import { dates, regions } from "../../features/datesAndRegion";
import { changeActiveRegion, changeActiveDate } from "../../features/slices/ratingSlices";

const FiltersAndSort = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.rating.activeDate);
  const listOfDates = Object.values(dates).reverse();

  const changeToPreviousWeek = () => {
    const index = listOfDates.findIndex((x) => x === dates[date]) - 1;
    if (index < 0) return;
    const week = listOfDates[index];
    const prevWeek = week.split(' ').join('').toLowerCase();
    dispatch(changeActiveDate(prevWeek));
  }

  const changeToNextWeek = () => {
    const index = listOfDates.findIndex((x) => x === dates[date]) + 1;
    if(index >= listOfDates.length) return;
    const week = listOfDates[index];
    const nextWeek = week.split(' ').join('').toLowerCase();
    dispatch(changeActiveDate(nextWeek));
  }

  return (
    <div>
      <select
        name="region"
        id="region-select"
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(changeActiveRegion(e.target.value));
        }}
      >
        {regions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
      <div className="change-current-date">
        <div className="left-arrow" onClick={changeToPreviousWeek}>{'<-'}</div>
        <div className="current-date">{dates[date]}</div>
        <div className="right-arrow" onClick={changeToNextWeek}>{'->'}</div>
      </div>
    </div>
  );
};

export default FiltersAndSort;
