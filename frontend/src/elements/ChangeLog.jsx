import "./ChangeLog.css";
import changelog from "../features/changelog";
import { useEffect } from "react";

const Change = (props) => {
  const { date, changes } = props.data;

  return (
    <div className="changelog-one-date">
      {changes.map((change, index) => (
        <div className="changelog-pages" key={index}>
          <div className="changelog-page">{change.page}</div>
          <div className="changelog-description">{change.description}</div>
        </div>
      ))}
      <div className="changelog-date-div">
        <div className="changelog-date">{date.toDateString()}</div>
      </div>
    </div>
  );
};

const ChangeLog = () => {
  const sortCnangelog = changelog.reverse();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="changelog">
      <div className="changelog-head">
        <h3>Журнал изменений</h3>
      </div>
      <div className="changelog-body">
        {sortCnangelog.map((datas, index) => (
          <Change data={datas} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChangeLog;
