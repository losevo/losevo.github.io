import "./ChangeLog.css";
import changelog from "../features/changelog";
import { useEffect } from "react";

//todo #29 Убрать addEventListener при переходе на другую страницу

const Change = (props) => {
  const { date, changes } = props.data;

  return (
    <div className="changelog-one-date">
      {changes.map((change, index) => (
        <div className="changelog-pages" key={index}>
          <div className="changelog-page">{change.page}</div>
          <div>
          <div className="changelog-description">{change.description}</div>
          {change.link ? <div><a className='changelog-link' href={change.link}>Ссылка </a></div> : null}
          </div>
        </div>
      ))}
      <div className="changelog-date-div">
        <div className="changelog-date">{date.toDateString()}</div>
      </div>
    </div>
  );
};

const sortCnangelog = changelog.reverse();

const ChangeLog = () => {
  
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
