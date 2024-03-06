import "./RSSResult.css";
import NewsItems from "./NewsItems";
import RSSChannelItems from "./RSSChanelItems";

const RSSResult = () => {

  return (
    <div className="result-rss">
      <div>
        <NewsItems />
        <RSSChannelItems />
      </div>
    </div>
  );
};

export default RSSResult;
