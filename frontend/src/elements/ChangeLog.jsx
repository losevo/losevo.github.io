import "./ChangeLog.css";
import changelog from "../features/changelog";

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
  return (
    <div className="changelog">
      <div className="changelog-head">
        <h3>Журнал изменений</h3>
      </div>
      <div className="changelog-body">
        {changelog.map((datas, index) => <Change data={datas} key={index}/>)}
      </div>
    </div>
  );
};

export default ChangeLog;
